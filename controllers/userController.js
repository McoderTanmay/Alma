import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userQuery from "../querries/userQuery.js";
import User from "../model/userModel.js";
import Alumni from "../model/alumniModel.js";
import Student from "../model/studentModel.js";
import dotenv from 'dotenv';
dotenv.config();
const SECRET = process.env.SECRET;

const signin = async (req, res) => {
  const { password, FullName, universityID, email, userType, passoutYear, experiance, rollNo } = req.body;

  try {
    const existingUser = await userQuery.findUserByRollNo(rollNo);

    if (existingUser) {
      return res.status(400).json({ message: "Something went wrong" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await userQuery.createUser({
      FullName,
      universityID,
      email,
      userType,
      passoutYear,
      experiance,
      rollNo,
      password: hashedPassword,
    });

    res.status(200).json({ code: 200, status: "Success" });
  } catch (error) {
    
    res.status(500).json({ code: 500, status: "failed", message: error.message });
  }
};

const login = async (req, res) => {
  const { password, rollNo } = req.body;

  try {
    const user = await userQuery.findUserByRollNo(rollNo);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid Password" });
    }
    console.log(SECRET);
    
    const token = jwt.sign({ userId: user._id },SECRET , { expiresIn: "24h" });
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const profilePicUpload = async (req, res) => {
  const { userId } = req.user;
  const { file } = req;

  if (!file) {
    return res.status(400).json({
      code: 400,
      status: "Failed",
      message: "No file uploaded. Please provide a profile picture.",
    });
  }

  const profilePicUrl = `D:/Projects/Alma/Backend/utils/profilePictures/${file.filename}`;

  try {
    const alumni = await Alumni.findById(userId);
    const student = await Student.findById(userId);
    const userType = alumni ? alumni.userType : student ? student.userType : null;

    if (!userType) {
      return res.status(400).json({ code: 400, status: "Failed", message: "Invalid user type." });
    }

    const Model = userType === "student" ? Student : Alumni;
    const updatedUser = await Model.findByIdAndUpdate(userId, { profilePic: profilePicUrl }, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ code: 404, status: "Failed", message: "User not found." });
    }

    res.status(200).json({
      code: 200,
      status: "Success",
      message: "Profile picture uploaded successfully.",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error uploading profile picture:", error.message);
    res.status(500).json({
      code: 500,
      status: "Failed",
      message: "An error occurred while uploading the profile picture.",
    });
  }
};

const getUserDetails = async (req, res) => {
  const { userId, userType } = req.user;

  try {
    const Model = userType === "student" ? Student : userType === "alumni" ? Alumni : null;

    if (!Model) {
      return res.status(400).json({ code: 400, status: "Failed", message: "Invalid user type." });
    }

    const user = await Model.findById(userId).populate("forum").populate("post");

    if (!user) {
      return res.status(404).json({ code: 404, status: "Failed", message: "User not found." });
    }

    res.status(200).json({ code: 200, status: "Success", user });
  } catch (error) {
    console.error("Error fetching user details:", error.message);
    res.status(500).json({
      code: 500,
      status: "Failed",
      message: "An error occurred while fetching user details.",
    });
  }
};

export { signin, login, profilePicUpload, getUserDetails };
