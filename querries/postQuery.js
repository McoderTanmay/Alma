const post = require('../model/postModel');

module.exports = {
    async create(body){
        return await post.create(body);
    },
    async getPosts(){
        return await post.find({}).sort({ createdAt: -1 });
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