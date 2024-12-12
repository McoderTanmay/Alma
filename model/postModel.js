import mongoose from 'mongoose';

const { Schema } = mongoose;

// Post schema
const postSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      // Dynamically set ref based on userType
      refPath: 'userType', // Refers to userType to determine which model (Student or Alumni) to reference
    },
    userType: {
      type: String,
      enum: ['alumni', 'student'], // Specifies the type of user
    },
    content: {
      type: String,
      trim: true,
    },
    images: [
      {
        url: { type: String, },
        altText: { type: String, default: '' },
      },
    ],
    timestamp: {
      type: Date,
      default: Date.now,
    },
    likes: [
      {
        userId: { type: Schema.Types.ObjectId, refPath: 'likes.userType' },  // Dynamically set ref based on userType
        userType: { type: String, enum: ['alumni', 'student'] },
      },
    ],
    comments: [
      {
        authorId: { type: Schema.Types.ObjectId, refPath: 'comments.authorType' },  // Dynamically set ref based on authorType
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
        userId: { type: Schema.Types.ObjectId, refPath: 'shares.userType' },  // Dynamically set ref based on userType
        userType: { type: String, enum: ['alumni', 'student'] },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

export default mongoose.model('Post', postSchema);
