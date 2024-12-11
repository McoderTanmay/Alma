const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userQuery = require("../querries/userQuery");
const JWT_SECRET = process.env.SECRET;
const User = require("../model/userModel");
const Alumni = require("../model/alumniModel");
const Student = require("../model/studentModel");

module.exports = {
  async signin(req, res, next) {
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 10);

    const {
      FullName,
      universityID,
      email,
      userType,
      passoutYear,
      experiance,
      rollNo,
    } = req.body;

    const exsistingUser = await userQuery.findUserByRollNo(rollNo);

    if (exsistingUser) {
      return res.status(400).json({ message: "Something went wrong" });
    }

    try {
      const user = await userQuery.createUser({
        FullName,
        universityID,
        email,
        userType,
        passoutYear,
        experiance,
        rollNo,
        password: hashedPassword,
      });
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
  async login(req, res, next) {
    const { password, rollNo } = req.body;

    const user = await userQuery.findUserByRollNo(rollNo);
    console.log(user);

    try {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({ message: "Invalid Password" });
      }

      const userId = user._id;
      const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: "24h" });

      return res.status(200).json({
        message: "Login successful",
        token, // Return the token
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  //   async profilePicUpload(req, res) {
  //     const userId = req.user.userId; // Extract the authenticated user's ID
  //     const { file } = req; // Extract the uploaded file from multer

  //     // Check if a file was uploaded
  //     if (!file) {
  //         return res.status(400).json({
  //             code: 400,
  //             status: 'Failed',
  //             message: 'No file uploaded. Please provide a profile picture.',
  //         });
  //     }

  //     // Generate the file URL or file path
  //     const profilePicUrl = `/utils/profilePictures/${file.filename}`; // Adjust the path as needed

  //     try {
  //         // Update the user's profile picture in the database
  //         const updatedUser = await User.findByIdAndUpdate(
  //             userId,
  //             { profilePic: profilePicUrl },
  //             { new: true } // Return the updated document
  //         );

  //         if (!updatedUser) {
  //             return res.status(404).json({
  //                 code: 404,
  //                 status: 'Failed',
  //                 message: 'User not found.',
  //             });
  //         }

  //         // Respond with the updated user data
  //         res.status(200).json({
  //             code: 200,
  //             status: 'Success',
  //             message: 'Profile picture uploaded successfully.',
  //             user: updatedUser,
  //         });
  //     } catch (error) {
  //         res.status(500).json({
  //             code: 500,
  //             status: 'Failed',
  //             message: error.message,
  //         });
  //     }
  // },
  // async getUserDetails(req, res) {
  //   const userId = req.user.userId;
  //   try {
  //       const user = await User.findById(userId)
  //           .populate('forum') // Populates the referenced forum details
  //           .populate('post'); // Populates the referenced post details

  //       if (!user) {
  //           return res.status(404).json({
  //               code: 404,
  //               status: 'Failed',
  //               message: 'User not found',
  //           });
  //       }

  //       res.status(200).json({
  //           code: 200,
  //           status: 'Success',
  //           user,
  //       });
  //   } catch (error) {
  //       res.status(500).json({
  //           code: 500,
  //           status: 'Failed',
  //           message: error.message,
  //       });
  //   }
  // },

  async profilePicUpload(req, res) {
    const userId = req.user.userId;
    const { file } = req;

    if (!file) {
      return res.status(400).json({
        code: 400,
        status: "Failed",
        message: "No file uploaded. Please provide a profile picture.",
      });
    }

    const profilePicUrl = `D:/Projects/Alma/Backend/utils/profilePictures`+`/utils/profilePictures/${file.filename}`;

    try {
      let userType;
      const alumni = await Alumni.findById(userId);
      const student = await Student.findById(userId);
      if(alumni){
        userType = alumni.userType;
      }
      else if(student){
        userType = student.userType;
      }
      let updatedUser;

      if (userType === "student") {
        updatedUser = await Student.findByIdAndUpdate(
          userId,
          { profilePic: profilePicUrl },
          { new: true } // Return the updated document
        );
      } else if (userType === "alumni") {
        updatedUser = await Alumni.findByIdAndUpdate(
          userId,
          { profilePic: profilePicUrl },
          { new: true }
        );
      } else {
        return res.status(400).json({
          code: 400,
          status: "Failed",
          message: "Invalid user type.",
        });
      }

      if (!updatedUser) {
        return res.status(404).json({
          code: 404,
          status: "Failed",
          message: "User not found.",
        });
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
  },

  async getUserDetails(req, res) {
    const userId = req.user.userId;
    const userType = req.user.userType;

    try {
      let user;

      if (userType === "student") {
        user = await Student.findById(userId)
          .populate("forum")
          .populate("post");
      } else if (userType === "alumni") {
        user = await Alumni.findById(userId).populate("forum").populate("post");
      } else {
        return res.status(400).json({
          code: 400,
          status: "Failed",
          message: "Invalid user type.",
        });
      }

      if (!user) {
        return res.status(404).json({
          code: 404,
          status: "Failed",
          message: "User not found.",
        });
      }

      res.status(200).json({
        code: 200,
        status: "Success",
        user,
      });
    } catch (error) {
      console.error("Error fetching user details:", error.message);
      res.status(500).json({
        code: 500,
        status: "Failed",
        message: "An error occurred while fetching user details.",
      });
    }
  },
};
