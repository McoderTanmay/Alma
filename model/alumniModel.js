
import mongoose from 'mongoose';

const { Schema } = mongoose;

const alumniSchema = new Schema(
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
            type: Schema.Types.ObjectId,
            ref: 'Forum',
        },
        post: {
            type: Schema.Types.ObjectId,
            ref: 'Post',
        },
        availability: {
            isAvailable: { type: Boolean, default: false },
            startDate: { type: Date },
            endDate: { type: Date },
            location: { type: String },
            message: { type: String },
        },
        verificationStatus: {
            isVerified: { type: Boolean, default: false },
            verifiedBy: { type: String, default: null },
            verifiedDate: { type: Date },
            remarks: { type: String },
        },
        verificationDocument: {
            documentURL: { type: String, default: null },
            uploadedDate: { type: Date },
        },
    }
);

const Alumni = mongoose.model('Alumni', alumniSchema);

export default Alumni;