import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Dynamic directory creation
const createUploadDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Dynamic storage configuration
const storage = (uploadDir) =>
  multer.diskStorage({
    destination: (req, file, cb) => {
      const absoluteDir = path.resolve(uploadDir); // Ensure correct absolute path
      createUploadDir(absoluteDir);
      cb(null, absoluteDir);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + path.extname(file.originalname));
    },
  });

const createMulterUpload = (uploadDir) =>
  multer({
    storage: storage(uploadDir),
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5 MB
    fileFilter: (req, file, cb) => {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error('Only JPEG, PNG, and GIF files are allowed!'));
      }
    },
  });

export const postUpload = createMulterUpload('./utils/postImages'); // Relative paths here
export const profileUpload = createMulterUpload('./utils/profilePictures');
