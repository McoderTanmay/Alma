const post = require('../model/postModel');

module.exports = {
    async create(body){
        return await post.create(body);
    },
    async getPosts(id){
        return await post.find({userId:id});
    },
    async deletePost(id){
        return await post.deleteOne({_id:id});
    },
    async likePost(postId, userId) {
        return await post.findByIdAndUpdate(
            postId,
            { $addToSet: { likes: userId } },
            { new: true }
        );
    },
}