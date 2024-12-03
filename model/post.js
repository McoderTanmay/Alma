const mongoose = require('mongoose');

const postModel = mongoose.Schema(
    {
        userId:{
            type: mongoose.Schema.Types.ObjectId,
            require: true
        },
        content:{
            type: String,
        },
        media_url:{
            type: String,
        },
        timestamp: { type: Date, default: Date.now },
        likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        comments: [
            {
                userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // User who commented
                content: { type: String, required: true }, // Comment content
                createdAt: { type: Date, default: Date.now }, // Timestamp for the comment
                isDeleted: { type: Boolean, default: false } // Soft delete for comments
            }
        ],
        tags: [{ type: String }],
        shares: [
            {
                userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // User who shared
                createdAt: { type: Date, default: Date.now } // Timestamp for the share
            }
        ],
    }
)

const Post = mongoose.model(postModel, "Post");
module.exports = Post;