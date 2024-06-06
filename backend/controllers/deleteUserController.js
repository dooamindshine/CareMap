const db = require("../db");

const deleteUser = async function (req, res) {
    try {
      const userid  = req.query.userid;
      console.log("here"+userid)
      
      if (!userid)
        return res
          .status(400)
          .json({ message: "id is required in parameters" });
  
      let deleteUser = "UPDATE users SET is_deleted = 1 WHERE id = ?;";
      const [results] = await db.query(deleteUser, [userid]);
      if (results) {
        return res
          .status(204)
          .json({ message: "User deleted successfuly" });
      } else {
        return res.status(400).json({ message: "Failed to delete user" });
      }
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        errorMessage: error,
        message: "Failed to delete user. Internal Server Error",
      });
    }
  };
  
  module.exports = deleteUser;
  