const mongoose = require('mongoose');


const forumSchema = new mongoose.Schema({
  threadId: { 
    type: mongoose.Schema.Types.ObjectId, 
    default: () => new mongoose.Types.ObjectId(), 
    unique: true 
  },
  title: { type: String, required: true, trim: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  tags: [{ type: String }], 
  timestamp: { type: Date, default: Date.now },
  upvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] 
});


const Forum = mongoose.model('Forum', forumSchema);

module.exports = Forum;
