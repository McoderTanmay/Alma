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
                authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
                content: { type: String, required: true }, 
                createdAt: { type: Date, default: Date.now }, 
                isDeleted: { type: Boolean, default: false } 
            }
        ],
        tags: [{ type: String }],
        shares: [
            {
                userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}, // User who shared
                createdAt: { type: Date, default: Date.now } // Timestamp for the share
            }
        ],
    }
)

const Post = mongoose.model("Post", postModel);
module.exports = Post;