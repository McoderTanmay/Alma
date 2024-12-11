

import mongoose from 'mongoose';

const { Schema } = mongoose;

const replySchema = new Schema(
  {
    thread: {
      type: Schema.Types.ObjectId,
      ref: 'Forum',
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      required: true, // Reference to either Alumni or Student
    },
    userType: {
      type: String,
      enum: ['alumni', 'student'], // Distinguishes the author type
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
    upvotes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

export default mongoose.model('Reply', replySchema);