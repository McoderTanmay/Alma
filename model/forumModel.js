const mongoose = require('mongoose');


const forumSchema = new mongoose.Schema({
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
    type: mongoose.Schema.Types.ObjectId,
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
      userId: { type: mongoose.Schema.Types.ObjectId }, // ID of the user who upvoted
      userType: {
        type: String,
        enum: ['alumni', 'student'], // Type of the user who upvoted
        required: true,
      },
    },
  ],
  threads: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Thread',
    },
  ],
});

const Forum = mongoose.model('Forum', forumSchema);

module.exports = Forum;

