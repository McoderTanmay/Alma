const bcrypt = require("bcrypt");
const userQuery = require("../querries/userQuery");

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

    const universityRollNo = universityID + rollNo;
    const exsistingUser = await userQuery.findUserByRollNo(universityRollNo);

    if (!exsistingUser) {
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
        rollNo: universityRollNo,
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
        return res.status(400).json({ message: "User not found" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: "Invalid Password" });
      }


      const userId = user._Id;
      const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: "24h" });
      return res.status(200).json({ token });
    } catch (error) {
      return res
        .status(500)
        .send({ code: 500, status: "failed", message: error.message });
    }
  },
};
