const mongoose = require('mongoose');

const threadSchema = new mongoose.Schema({
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
  forum: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Forum',
    required: true,
  },
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
});

const Thread = mongoose.model('Thread', threadSchema);

module.exports = Thread;
