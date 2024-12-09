const mongoose = require('mongoose');


const replySchema = new mongoose.Schema({
  thread: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Forum',
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
});

const Reply = mongoose.model('Reply', replySchema);

module.exports = Reply;

