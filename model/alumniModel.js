const mongoose = require('mongoose');

// Alumni schema
const alumniSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true,
    },
    universityID: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    rollNo: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    userType: {
        type: String,
        default: 'alumni',
    },
    passoutYear: {
        type: Number,
        required: true,
    },
    experience: {
        type: [
            {
                companyName: { type: String },
                position: { type: String },
                duration: { type: String },
                about: { type: String },
            },
        ],
        default: [],
    },
    profile: {
        type: String,
    },
    profilePic: {
        type: String,
        default: '',
    },
    forum: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Forum',
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
    },
});

const Alumni = mongoose.model('Alumni', alumniSchema);

module.exports = Alumni;
