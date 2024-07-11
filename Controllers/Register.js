const bcrypt = require("bcrypt");
const UserModel = require("../Models/Users");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    const user = await UserModel.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ message: "User already Exists", success: false });
    }
    const userModel = new UserModel({ name, email, password });
    userModel.password = await bcrypt.hash(password, 10);
    await userModel.save();
    res.status(201).json({
      message: "Signup Successfull",
      sucess: true,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
      success: true,
    });
  }
};

module.exports = { signup };
