const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    userType: {
        type: String,
        enum: ['alumni', 'student'], // Specifies the type of user
        required: true,
    },
    content: {
        type: String,
        trim: true,
    },
    images: [
        {
            url: { type: String, required: true },
            altText: { type: String, default: '' },
        },
    ],
    timestamp: {
        type: Date,
        default: Date.now,
    },
    likes: [
        {
            userId: { type: mongoose.Schema.Types.ObjectId },
            userType: { type: String, enum: ['alumni', 'student'] },
        },
    ],
    comments: [
        {
            authorId: { type: mongoose.Schema.Types.ObjectId },
            authorType: { type: String, enum: ['alumni', 'student'] },
            content: { type: String, required: true },
            createdAt: { type: Date, default: Date.now },
            isDeleted: { type: Boolean, default: false },
        },
    ],
    tags: [
        {
            type: String,
            trim: true,
        },
    ],
    shares: [
        {
            userId: { type: mongoose.Schema.Types.ObjectId },
            userType: { type: String, enum: ['alumni', 'student'] },
            createdAt: { type: Date, default: Date.now },
        },
    ],
});


module.exports = mongoose.model('Post', postSchema);


