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

const createMulterUpload = (uploadDir, allowedTypes) =>
  multer({
    storage: storage(uploadDir),
    limits: { fileSize: 10 * 1024 * 1024 }, // Limit file size to 10 MB
    fileFilter: (req, file, cb) => {
      if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error(`Only files of type: ${allowedTypes.join(', ')} are allowed!`));
      }
    },
  });

// Specific configurations for different uploads
export const postUpload = createMulterUpload('./utils/postImages', [
  'image/jpeg',
  'image/png',
  'image/gif',
]);

export const profileUpload = createMulterUpload('./utils/profilePictures', [
  'image/jpeg',
  'image/png',
  'image/gif',
]);

export const alumniDocumentUpload = createMulterUpload('./utils/documents', [
  // Document MIME types
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  // Image MIME types
  'image/jpeg',
  'image/png',
  'image/gif',
]);

