const Forum = require('../model/forumModel');

const createForumThread = async (req, res) => {
    try {
        const { title, content, author, tags } = req.body;

        if (!title || !content || !author) {
            console.log(title,content,author,tags);
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

module.exports = createForumThread;
