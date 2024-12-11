const Alumni = require("../model/alumniModel");
const Student = require("../model/studentModel");

module.exports = {
  async createUser(body) {
    try {
      if (body.userType === "alumni") {
        const newAlumni = await Alumni.create(body);
        return newAlumni;
      } else if (body.userType === "student") {
        const newStudent = await Student.create(body);
        return newStudent;
      } else {
        throw new Error('Invalid user type. Must be "alumni" or "student".');
      }
    } catch (error) {
      // Handle errors
      console.error("Error creating user:", error.message);
      throw error;
    }
  },
  async findUserByRollNo(data) {
    try {
      // First, search in the Student model
      const student = await Student.findOne({ rollNo: data });
      if (student) {
        return student; // Return if found in Student
      }

      // If not found, search in the Alumni model
      const alumni = await Alumni.findOne({ rollNo: data });
      if (alumni) {
        return alumni; // Return if found in Alumni
      }

      // If not found in both, return null
      return null;
    } catch (error) {
      console.error("Error finding user by rollNo:", error.message);
      throw error;
    }
  },
};
