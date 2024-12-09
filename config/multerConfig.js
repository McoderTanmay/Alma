const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Dynamic directory creation
function createUploadDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

// Dynamic storage configuration
const storage = (uploadDir) => multer.diskStorage({
    destination: (req, file, cb) => {
        createUploadDir(uploadDir); // Ensure directory exists
        cb(null, uploadDir); // Save files to the provided directory
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname)); // Generate a unique filename
    },
});

// Common multer configuration function
const createMulterUpload = (uploadDir) => multer({
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

module.exports = {
    postUpload: createMulterUpload(path.resolve('../utils/postImages')),
    profileUpload: createMulterUpload(path.resolve('../utils/profilePictures')),
};
