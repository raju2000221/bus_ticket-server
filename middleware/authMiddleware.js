const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const verifyAdmin = async (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return res
      .status(401)
      .json({ message: "No token provided. Please login first." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SEC);

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.isAdmin !== true) {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    req.user = user;
    next();
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error verifying the token", error: error.message });
  }
};

module.exports = verifyAdmin;
