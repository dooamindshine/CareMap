require('dotenv').config();
const validator = require("email-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require('../db');

const createUser = async function (req, res) {
  try {
    const {
      first_name,
      last_name,
      email,
      password,
      age,
      marital_status,
      children,
      address,
      zipcode,
      birthdate,
      gender,
    } = req.body.user;

    if (!email) return res.status(400).json({ message: "Email is required" });

    if (!password)
      return res.status(400).json({ message: "Password is required" });

    if (!first_name)
      return res.status(400).json({ message: "First name is required" });

    const isValid = validator.validate(email);
    if (!isValid)
      return res.status(400).json({ message: "Email address is not valid" });

    const hashPassword = await bcrypt.hash(password, 10);

    let sql =
      "INSERT INTO users (first_name, last_name, email, password, age, marital_status, children, address, zipcode, birthdate, gender) VALUES (?, ? , ?, ? ,? ,? ,? ,? ,?,?,?)";
    await db.query(sql, [
      first_name,
      last_name,
      email,
      hashPassword,
      age,
      marital_status,
      children,
      address,
      zipcode,
      birthdate,
      gender,
    ]);
    const jwtToken = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "5h",
    });
    return res
      .status(201)
      .json({ token: jwtToken, message: "Users created successfully" });
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ message: "Failed to create User. Internal Server Error" });
  }
};

module.exports = createUser;