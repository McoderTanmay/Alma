import mongoose from 'mongoose';

const { Schema } = mongoose;

// Student schema
const studentSchema = new Schema(
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
      type: Schema.Types.ObjectId,
      ref: 'Forum',
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
    verificationStatus: {
      isVerified: { type: Boolean, default: true },
      verifiedBy: { type: String, default: null },
      verifiedDate: { type: Date },
      remarks: { type: String },
  },
  verificationDocument: {
    documentURL: { type: String, default: null },
    uploadedDate: { type: Date },
},
    skills: {
      type: [String], // Array of strings to hold skills
      default: [],    // Default is an empty array
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields automatically
);

export default mongoose.model('Student', studentSchema);
