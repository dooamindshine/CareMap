require("dotenv").config();
const db = require("../db");

const getUserProfile = async function (req, res) {
  try {
    const { userid } = req.query;

    if (!userid)
      return res
        .status(400)
        .json({ message: "User id is required in parameters" });

    let findUser = "SELECT * FROM users u LEFT JOIN facilities f ON u.id = f.userid LEFT JOIN homes h ON u.id  = h.userid WHERE u.id = ? AND is_deleted = 0;"
    const [results] = await db.query(findUser, [userid]);
    console.log(JSON.stringify(results))
    if (results.length == 1) {
      const user = results[0];
      console.log(user);
      delete user['password'];
      return res
        .status(200)
        .json({ message: "User Data Fetch successfuly", user });
    } else {
      return res.status(401).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      errorMessage: error,
      message: "Failed to fetch User. Internal Server Error",
    });
  }
};

module.exports = getUserProfile;
