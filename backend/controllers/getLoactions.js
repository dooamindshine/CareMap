require("dotenv").config();
const db = require("../db");

const getLocations = async function (req, res) {
  try {
    const userid = req.query.userid;
    const category = req.query?.category;
    console.log(category);
    if (!userid)
      return res
        .status(400)
        .json({ message: "Userid is required in parameters" });
    if (category != "null") {
      console.log("over here")
      let findLoactions = "SELECT * FROM locations WHERE type = ?";
      const [results] = await db.query(findLoactions, [category]);
      if (results) {
        return res
          .status(200)
          .json({ message: "User Locations Data Fetch successfuly", results });
      } else {
        return res.status(401).json({ message: "No locations found" });
      }
    } else {
      console.log("here");
      let findLoactions = "SELECT * FROM locations LIMIT 500";
      const [results] = await db.query(findLoactions);
      if (results) {
        return res
          .status(200)
          .json({ message: "Locations Data Fetch successfuly", results });
      } else {
        return res.status(401).json({ message: "No locations found" });
      }
    }
  } catch (error) {
    return res.status(500).json({
      errorMessage: error,
      message: "Failed to fetch Locations. Internal Server Error",
    });
  }
};

module.exports = getLocations;
