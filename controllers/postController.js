const postQuery = require("../querries/postQuery");
const Post = require("../model/postModel")

module.exports = {
  async createPost(req, res, next) {
    const user = req.user.userId;
    const { content, media_url, tags } = req.body;
    try {
      await postQuery.create({ content, media_url, tags, user });
      return res.status(200).send({
        code: 200,
        status: "Success",
      });
    } catch (error) {
      return res
        .status(500)
        .send({ code: 500, status: "failed", message: error.message });
    }
  },
  async deletePost(req, res, next) {
    const postId = req.params.id;
    try {
      await postQuery.deletePost(postId);
      return res.status(200).send({
        code: 200,
        status: "Success",
      });
    } catch (error) {
      return res
        .status(500)
        .send({ code: 500, status: "failed", message: error.message });
    }
  },
  async getAllPost(req, res, next) {
    const user = req.user.userId;
    console.log("usr", user);
    try {
      const posts = await postQuery.getPosts();
      return res.status(200).send({
        code: 200,
        status: "Success",
        data: posts,
      });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .send({ code: 500, status: "failed", message: error.message });
    }
  },
  async likePost(req, res, next) {
    const userId = req.user.userId;
    const { postId } = req.params;
    try {
      await postQuery.likePost(postId, userId);
      return res.status(200).send({
        code: 200,
        status: "Success",
      });
    } catch (error) {
      return res
        .status(500)
        .send({ code: 500, status: "failed", message: error.message });
    }
  },
  async commentPost(req, res, next) {
    const { postId } = req.params;
    const userId = req.user.userId;
    const { content } = req.body;

    if (!content) {
      return res
        .status(400)
        .json({ error: "Content is required for a comment." });
    }

    try {
      const post = await Post.findById(postId);
      if (!post) {
        return res.status(404).json({ error: "Post not found." });
      }

      const newComment = {
        authorId: userId,
        content: content,
      };

      post.comments.push(newComment);
      await post.save();

      return res
        .status(201)
        .json({ message: "Comment added successfully.", comment: newComment });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: "An error occurred while adding the comment." });
    }
  },
};
