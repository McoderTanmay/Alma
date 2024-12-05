const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userQuery = require("../querries/userQuery");

const JWT_SECRET = process.env.SECRET;

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
      profile,
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
        profile,
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
};
