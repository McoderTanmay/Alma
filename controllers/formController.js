const Forum = require('../model/forumModel');



const createForumThread = async (req, res) => {
    try {
        const { title, content, author, tags } = req.body;

        if (!title || !content || !author) {
            console.log(title, content, author, tags);
            return res.status(400).json({ message: 'Title, content, and author are required.' });
        }

        const newThread = new Forum({
            title,
            content,
            author,
            tags,
        });

        const savedThread = await newThread.save();

        res.status(201).json({
            message: 'Forum thread created successfully!',
            thread: savedThread,
        });
    } catch (error) {
        console.error('Error creating forum thread:', error);
        res.status(500).json({
            message: 'An error occurred while creating the forum thread.',
            error: error.message,
        });
    }
};

const upvotePost = async (req, res) => {
    try {
        
        const post = await Forum.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ message: 'Post not found.' });
        }

         if (post.upvotes.includes(req.user.userId)) {
            return res.status(400).json({ message: 'User has already upvoted this post.' });
        }
        post.upvotes.push(req.body.userId);
        const updatedPost = await post.save();
        res.status(200).json({
            message: 'Post upvoted successfully!',
            thread: updatedPost,
        });
    } catch (error) {
        console.error('Error upvoting thread:', error);
        res.status(500).json({
            message: 'An error occurred while upvoting the thread.',
            error: error.message,
        });
    }
};
module.exports = {
    createForumThread,
    upvotePost
};
