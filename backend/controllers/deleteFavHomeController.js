const db = require("../db");

const deleteUserFavHomes = async function (req, res) {
    try {
      const userid  = req.query.userid;
      const uuid = req.query.uuid;
      
      if (!userid)
        return res
          .status(400)
          .json({ message: "id is required in parameters" });
  
      let deleteHomes = "DELETE FROM homes WHERE uuid = ?;";
      const [results] = await db.query(deleteHomes, [uuid]);
      if (results) {
        return res
          .status(204)
          .json({ message: "User address deleted successfuly" });
      } else {
        return res.status(400).json({ message: "Failed to delete home address" });
      }
    } catch (error) {
      return res.status(500).json({
        errorMessage: error,
        message: "Failed to delete home address. Internal Server Error",
      });
    }
  };
  
  module.exports = deleteUserFavHomes;
  