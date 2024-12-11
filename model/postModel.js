import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
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
        userId: { type: Schema.Types.ObjectId },
        userType: { type: String, enum: ['alumni', 'student'] },
      },
    ],
    comments: [
      {
        authorId: { type: Schema.Types.ObjectId },
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
        userId: { type: Schema.Types.ObjectId },
        userType: { type: String, enum: ['alumni', 'student'] },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

export default mongoose.model('Post', postSchema);