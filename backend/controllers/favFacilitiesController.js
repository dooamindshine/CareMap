const getUserFavFacilities = async function (req, res) {
    try {
      const { userid } = req.query.userid;
  
      if (!userid)
        return res
          .status(400)
          .json({ message: "Userid is required in parameters" });
  
      let findFacilities = "SELECT * FROM facilities WHERE userid = ?";
      const [rows] = await db.query(findFacilities, [userid]);
      if (rows.length == 1) {
        const faciliteis = rows[0];
        console.log(faciliteis);
        return res
          .status(200)
          .json({ message: "User Facilities Data Fetch successfuly", faciliteis });
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
  