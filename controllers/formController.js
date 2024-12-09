const Forum = require('../model/forumModel');
const Thread = require('../model/threadModel')


const createForumThread = async (req, res) => {
    try {
        const { title, content,userType ,tags } = req.body;
        const author = req.user.userId;

        if (!title || !content || !author) {
            return res.status(400).json({ message: 'Title, content, and author are required.' });
        }

        const newForum = new Forum({
            title,
            content,
            author,
            tags,
            userType
        });

        const savedThread = await newForum.save();

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

        if (!post.upvotes.includes(req.user.userId)) {
            post.upvotes.push(req.user.userId);
            
        }else{
            post.upvotes.splice(req.user.userId);
        }
        await post.save();

        res.status(200).json({
            message: 'Post upvoted successfully!',

        });
    } catch (error) {
        console.error('Error upvoting thread:', error);
        res.status(500).json({
            message: 'An error occurred while upvoting the thread.',
            error: error.message,
        });
    }
};




const createReplyThread = async (req, res) => {
  try {
    const { content,userType } = req.body; 
    const author = req.user.userId;
    const forumId = req.params.id;
    console.log(content,author,forumId);
    
    if (!content || !author || !forumId) {
      return res.status(400).json({ message: 'Content, author, and forumId are required.' });
    }

    
    const forum = await Forum.findById(forumId);
    if (!forum) {
      return res.status(404).json({ message: 'Forum post not found.' });
    }

    
    const newThread = new Thread({
      content,
      author,
      forum: forumId,
      userType
    });

   
    const savedThread = await newThread.save();

    
    forum.threads.push(savedThread._id);
    await forum.save();

    
    res.status(201).json({
      message: 'Thread created successfully!',
      thread: savedThread,
    });
  } catch (error) {
    console.error('Error creating thread:', error);
    res.status(500).json({
      message: 'An error occurred while creating the thread.',
      error: error.message,
    });
  }
};

const upvoteReplyThread = async (req, res) => {
    try {
      const thread = await Thread.findById(req.params.id); 
  
      if (!thread) {
        return res.status(404).json({ message: 'Reply thread not found.' });
      }
  
      
      if (thread.upvotes.includes(req.user.userId)) {
        
        thread.upvotes.splice(req.user.userId);
      } else {
        
        thread.upvotes.push(req.user.userId);
      }
  
      
      await thread.save();
  
      res.status(200).json({
        message: 'Reply thread upvote status updated successfully!',
        upvotesCount: thread.upvotes.length, 
      });
    } catch (error) {
      console.error('Error upvoting reply thread:', error);
      res.status(500).json({
        message: 'An error occurred while updating the upvote status.',
        error: error.message,
      });
    }
  };
  
  
  


module.exports = {
    createForumThread,
    upvotePost,
    createReplyThread,
    upvoteReplyThread
};
