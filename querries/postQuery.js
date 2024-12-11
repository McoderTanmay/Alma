import Post from '../model/postModel.js';

const create = async (body) => {
  return await Post.create(body);
};

const getPosts = async () => {
  return await Post.find({}).sort({ createdAt: -1 });
};

const deletePost = async (id) => {
  return await Post.deleteOne({ _id: id });
};

const likePost = async (postId, userId) => {
  try {
    const currentPost = await Post.findById(postId);

    if (!currentPost) {
      throw new Error('Post not found');
    }

    if (!currentPost.likes.includes(userId)) {
      currentPost.likes.push(userId);
    } else {
      currentPost.likes = currentPost.likes.filter((id) => id !== userId);
    }

    await currentPost.save();
    return currentPost;
  } catch (error) {
    console.error('Error updating likes:', error.message);
    throw error;
  }
};

const getUserPosts = async (userId, userType) => {
  try {
    const Model = userType === 'alumni' ? Alumni : userType === 'student' ? Student : null;

    if (!Model) {
      throw new Error('Invalid user type. Must be "alumni" or "student".');
    }

    const user = await Model.findById(userId).populate('post');

    if (!user) {
      throw new Error('User not found');
    }

    return user.post;
  } catch (error) {
    console.error('Error fetching user posts:', error.message);
    throw error;
  }
};

export default { create, getPosts, deletePost, likePost, getUserPosts };
