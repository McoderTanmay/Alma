const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema(
    {
        participants: [
            { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        ],
        lastMessage: { type: String }, 
        lastMessageAt: { type: Date, default: Date.now },
    },
    { timestamps: true } 
);

module.exports = mongoose.model('Chat', chatSchema);