import Alumni from '../model/alumniModel.js';
import Student from '../model/studentModel.js';

const createUser = async (body) => {
  try {
    if (body.userType === 'alumni') {
      return await Alumni.create(body);
    } else if (body.userType === 'student') {
      return await Student.create(body);
    } else {
      throw new Error('Invalid user type. Must be "alumni" or "student".');
    }
  } catch (error) {
    console.error('Error creating user:', error.message);
    throw error;
  }
};

const findUserByRollNo = async (rollNo) => {
  try {
    // Search in the Student model
    const student = await Student.findOne({ rollNo });
    if (student) {
      return student;
    }

    // Search in the Alumni model if not found in Student
    const alumni = await Alumni.findOne({ rollNo });
    if (alumni) {
      return alumni;
    }

    // Return null if user not found in either
    return null;
  } catch (error) {
    console.error('Error finding user by rollNo:', error.message);
    throw error;
  }
};

export default { createUser, findUserByRollNo };
