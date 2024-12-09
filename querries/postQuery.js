const post = require('../model/postModel');
module.exports = {
    async create(body){
        return await post.create(body);
    },
    async getPosts(){
        return await post.find({});
    },
    async deletePost(id){
        return await post.deleteOne({_id:id});
    },
    async likePost(postId, userId) {
        try{
            const currentpost = await post.findById({_id:postId});
            if(!currentpost){
                throw new Error('Something went wrong');
            }
            if(!currentpost.likes.include(userId)){
                currentpost.likes.push(userId);
            }else{
                currentpost.likes.splice(userId);
            }
        }catch(error){
            console.error('Error performing task', error.message);
            throw error;
        }
    },
    async getUserPosts(userId, userType) {
        try {
            let user;
            if (userType === 'alumni') {
                user = await Alumni.findById(userId).populate('post');
            } else if (userType === 'student') {
                user = await Student.findById(userId).populate('post');
            } else {
                throw new Error('Invalid user type. Must be "alumni" or "student".');
            }
            if (!user) {
                throw new Error('User not found');
            }

            return user.post;
        } catch (error) {
            console.error('Error fetching user posts:', error.message);
            throw error;
        }
    },
    
}