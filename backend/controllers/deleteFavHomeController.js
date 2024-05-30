const deleteUserFavHomes = async function (req, res) {
    try {
      const { id } = req.query.id;
      
      if (!id)
        return res
          .status(400)
          .json({ message: "id is required in parameters" });
  
      let deleteHomes = "DELETE FROM homes WHERE idhomes = ?;";
      const [rows] = await db.query(deleteHomes, [id]);
      if (rows.length == 1) {
        const homes = rows[0];
        console.log(homes);
        return res
          .status(204)
          .json({ message: "User Homes deleted successfuly", homes });
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
  