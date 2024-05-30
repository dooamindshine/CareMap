const deleteUserFavFacility = async function (req, res) {
    try {
      const { id } = req.query.id;
      
      if (!id)
        return res
          .status(400)
          .json({ message: "id is required in parameters" });
  
      let deleteFacilities = "DELETE FROM facilities WHERE idfacilities = ?;";
      const [rows] = await db.query(deleteFacilities, [id]);
      if (rows.length == 1) {
        const facilities = rows[0];
        console.log(facilities);
        return res
          .status(204)
          .json({ message: "User Facility deleted successfuly", facilities });
      } else {
        return res.status(400).json({ message: "Failed to delete home facility" });
      }
    } catch (error) {
      return res.status(500).json({
        errorMessage: error,
        message: "Failed to delete home facility. Internal Server Error",
      });
    }
  };
  
  module.exports = deleteUserFavFacility;
  