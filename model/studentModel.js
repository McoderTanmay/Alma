const mongoose = require('mongoose');

// Student schema
const studentSchema = new mongoose.Schema({
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
        default: 'student',
    },
    passoutYear: {
        type: Number,
        required: true,
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
    isVerified:{
        type: String,
        enum: [yes, no]
    },
    docs:{
        type: String,
    }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
