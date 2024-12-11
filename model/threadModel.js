
import mongoose from 'mongoose';

const { Schema } = mongoose;

const threadSchema = new Schema(
  {
    content: {
      type: String,
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
    forum: {
      type: Schema.Types.ObjectId,
      ref: 'Forum',
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
    upvotes: [
      {
        userId: { type: Schema.Types.ObjectId }, // ID of the user who upvoted
        userType: {
          type: String,
          enum: ['alumni', 'student'], // Type of the user who upvoted
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

export default mongoose.model('Thread', threadSchema);