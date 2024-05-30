require("dotenv").config();
const validator = require("email-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db");

const signInUser = async function (req, res) {
  try {
    const { email, password } = req.body.user;

    if (!email) return res.status(400).json({ message: "Email is required" });

    if (!password)
      return res.status(400).json({ message: "Password is required" });

    let findUser = "SELECT * FROM users WHERE email = ? AND is_deleted = 0";
    const [rows] = await db.query(findUser, [email]);
    if (rows.length == 1) {
      const user = rows[0];
      console.log(user);
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        const jwtToken = jwt.sign({ email }, process.env.JWT_SECRET, {
          expiresIn: "5h",
        });
        return res
          .status(200)
          .json({ token: jwtToken, message: "Sign in success", user });
      } else {
        return res.status(401).json({ message: "Sign in failed" });
      }
    } else {
      return res.status(401).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({
      errorMessage: error,
      message: "Failed to sign in User. Internal Server Error",
    });
  }
};

module.exports = signInUser;
