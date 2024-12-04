const user = require('../model/userModel');

module.exports = {
    async createUser(body){
        return await user.create(body);
    },
    async findUserByRollNo(data){
        return await user.find({rollNo: data});
    }
}