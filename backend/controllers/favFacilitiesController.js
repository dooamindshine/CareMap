require("dotenv").config();
const db = require("../db");

const getUserFavFacilities = async function (req, res) {
    try {
      const userid  = req.query.userid;
  
      if (!userid)
        return res
          .status(400)
          .json({ message: "Userid is required in parameters" });
  
      let findFacilities = "SELECT * FROM facilities INNER JOIN locations ON facilities.facility = locations.idlocations WHERE userid = ?";
      const [results] = await db.query(findFacilities, [userid]);
      if (results) {
        return res
          .status(200)
          .json({ message: "User Facilities Data Fetch successfuly", results });
      } else {
        return res.status(401).json({ message: "No Facilities found for this user" });
      }
    } catch (error) {
      return res.status(500).json({
        errorMessage: error,
        message: "Failed to fetch Facilities. Internal Server Error",
      });
    }
  };
  
  module.exports = getUserFavFacilities;
  