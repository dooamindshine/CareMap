require("dotenv").config();
const db = require("../db");

const getAllDeletedUsers = async function (req, res) {
  try {
    let findUsers = "SELECT * FROM users WHERE is_deleted = 1";
    const [results] = await db.query(findUsers);
    if (results) {
      return res
        .status(200)
        .json({ message: "Delted User Data Fetch successfuly", results });
    } else {
      return res.status(401).json({ message: "Users not found" });
    }
  } catch (error) {
    return res.status(500).json({
      errorMessage: error,
      message: "Failed to fetch delted Users. Internal Server Error",
    });
  }
};

module.exports = getAllDeletedUsers;
