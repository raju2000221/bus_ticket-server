const User = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);
  // Check if required fields are present
  if (
    !username ||
    !email ||
    !password ||
    username.trim() === "" ||
    email.trim() === "" ||
    password.trim() === ""
  ) {
    return res
      .status(400)
      .json({ message: "All fields are required and cannot be empty." });
  }

  try {
    // Check if username or email already exists
    const existingUser = await User.findOne({
      email: email,
    });

    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash the password
    const hashPassword = bcryptjs.hashSync(password, 10);

    // Create and save the new user
    const newUser = new User({
      username: username,
      email: email,
      password: hashPassword,
    });

    await newUser.save();
    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  // Check if required fields are present
  if (!email || !password || email.trim() === "" || password.trim() === "") {
    return res
      .status(400)
      .json({ message: "All fields are required and cannot be empty." });
  }

  try {
    // Check if username or email already exists
    const existingUser = await User.findOne({
      email: email,
    });

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Hash the password
    const validPassword = bcryptjs.compareSync(password, existingUser.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const token = jwt.sign(
      {
        id: existingUser._id,
      },
      process.env.JWT_SEC
    );

    const { password: pass, ...user } = existingUser._doc;

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json({ message: "Signin successfully", user: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { register, login };
