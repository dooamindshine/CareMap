const deleteUser = async function (req, res) {
    try {
      const { userid } = req.query.userid;
      
      if (!userid)
        return res
          .status(400)
          .json({ message: "id is required in parameters" });
  
      let deleteUser = "UPDATE users SET is_deleted = 1 WHERE id = ?;";
      const [rows] = await db.query(deleteUser, [userid]);
      if (rows.length == 1) {
        const users = rows[0];
        console.log(users);
        return res
          .status(204)
          .json({ message: "User deleted successfuly", users });
      } else {
        return res.status(400).json({ message: "Failed to delete user" });
      }
    } catch (error) {
      return res.status(500).json({
        errorMessage: error,
        message: "Failed to delete user. Internal Server Error",
      });
    }
  };
  
  module.exports = deleteUser;
  