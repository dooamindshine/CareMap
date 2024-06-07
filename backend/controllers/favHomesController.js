require("dotenv").config();
const db = require("../db");

const getUserFavHomes = async function (req, res) {
    try {
      const userid  = req.query.userid;
  
      if (!userid)
        return res
          .status(400)
          .json({ message: "Userid is required in parameters" });
  
      let findHomes = "SELECT * FROM homes WHERE userid = ?";
      const [results] = await db.query(findHomes, [userid]);
      if (results) {
        return res
          .status(200)
          .json({ message: "User Homes Data Fetch successfuly", results });
      } else {
        return res.status(401).json({ message: "No homes found for this user" });
      }
    } catch (error) {
      return res.status(500).json({
        errorMessage: error,
        message: "Failed to fetch Homes. Internal Server Error",
      });
    }
  };
  
  module.exports = getUserFavHomes;
  