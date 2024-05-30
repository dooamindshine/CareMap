const updateUserFavHomes = async function (req, res) {
    try {
      const { id } = req.query.id;
      const { address, isfav } = req.body.user;
  
      if (!id)
        return res
          .status(400)
          .json({ message: "address id is required in parameters" });
  
      let updateHomes = "UPDATE homes SET address = ?, isfav = ? WHERE idhomes = ?;";
      const [rows] = await db.query(updateHomes, [address, isfav , id]);
      if (rows.length == 1) {
        const homes = rows[0];
        console.log(homes);
        return res
          .status(200)
          .json({ message: "User Homes updated successfuly", homes });
      } else {
        return res.status(400).json({ message: "Failed to update address" });
      }
    } catch (error) {
      return res.status(500).json({
        errorMessage: error,
        message: "Failed to update address. Internal Server Error",
      });
    }
  };
  
  module.exports = updateUserFavHomes;
  