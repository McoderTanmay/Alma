
import mongoose from 'mongoose';

const { Schema } = mongoose;

const forumSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
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
  tags: [
    {
      type: String,
    },
  ],
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
  threads: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thread',
    },
  ],
});

export default mongoose.model('Forum', forumSchema);