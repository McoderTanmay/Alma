
import mongoose from 'mongoose';

const { Schema } = mongoose;

const chatSchema = new Schema(
    {
        participants: [
            { type: Schema.Types.ObjectId, ref: 'User', required: true },
        ],
        lastMessage: { type: String },
        lastMessageAt: { type: Date, default: Date.now },
    },
    { timestamps: true } // Adds createdAt and updatedAt fields
);

export default mongoose.model('Chat', chatSchema);