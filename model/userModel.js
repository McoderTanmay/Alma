const mongoose = require('mongoose');

const experience = {
    companyName:{
        type: String,
    },
    position:{
        type: String,
    },
    duration:{
        type: String,
    },
    about:{
        type: String,
    }
}

const userSchema = mongoose.Schema(
    {
        FullName: {
            type: String,
            required: true
        },
        universityID: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        rollNo: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        userType: {
            type: String,
            enum: ['alumni', 'student'],
            required: true
        },
        passoutYear: {
            type: Number,
        },
        experience: {
            type: String, // Adjust the type as needed
        },
        profile: {
            type: String,
        },
        profilePic: { // Field for profile picture
            type: String, // This could be a URL or file path
            default: '', // Optional: Provide a default image path if necessary
        },
        forum: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Forum",
        },

        post:[{

            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        }]
    }
);


const User = mongoose.model("User", userSchema);
module.exports = User; 