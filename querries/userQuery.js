const Alumni = require('../model/alumniModel');
const Student = require('../model/studentModel');
module.exports = {
    async createUser(body) {
        try {
            if (body.userType === 'alumni') {
                const newAlumni = await Alumni.create(body);
                return newAlumni;
            } else if (body.userType === 'student') {
                const newStudent = await Student.create(body);
                return newStudent;
            } else {
                throw new Error('Invalid user type. Must be "alumni" or "student".');
            }
        } catch (error) {
            // Handle errors
            console.error('Error creating user:', error.message);
            throw error;
        }
    },
    async findUserByRollNo(data){
        return await user.findOne({rollNo: data});
    }
}