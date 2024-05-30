const addUserFavFacility = async function (req, res) {
    try {
      const { userid } = req.query.userid;
      const { facility } = req.body.user;
  
      if (!userid)
        return res
          .status(400)
          .json({ message: "Userid is required in parameters" });
  
      let insertFacility = "INSERT INTO facilities (userid, facility)  values ( ? , ?)";
      const [rows] = await db.query(insertFacility, [userid, facility]);
      if (rows.length == 1) {
        const facilities = rows[0];
        console.log(facilities);
        return res
          .status(201)
          .json({ message: "User Facility Added successfuly", facilities });
      } else {
        return res.status(400).json({ message: "Failed to add new facility" });
      }
    } catch (error) {
      return res.status(500).json({
        errorMessage: error,
        message: "Failed to add facility. Internal Server Error",
      });
    }
  };
  
  module.exports = addUserFavFacility;
  