
import mongoose from 'mongoose';

const { Schema } = mongoose;

const experience = {
    companyName: {
        type: String,
    },
    position: {
        type: String,
    },
    duration: {
        type: String,
    },
    about: {
        type: String,
    },
};

const userSchema = new Schema(
    {
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
            enum: ['alumni', 'student'],
            required: true,
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
        profilePic: {
            type: String, // This could be a URL or file path
            default: '', // Optional: Provide a default image path if necessary
        },
        forum: {
            type: Schema.Types.ObjectId,
            ref: 'Forum',
        },
        post: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Post',
            },
        ],
    },
    {
        timestamps: true, // Adds createdAt and updatedAt fields
    }
);

export default mongoose.model('User', userSchema);