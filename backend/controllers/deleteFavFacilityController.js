const db = require("../db");

const deleteUserFavFacility = async function (req, res) {
  try {
    const userid = req.query.userid;
    const id = req.query.id;

    if (!userid)
      return res.status(400).json({ message: "id is required in parameters" });

    let deleteFacilities = "DELETE FROM facilities WHERE idfacilities = ?;";
    const [dresults] = await db.query(deleteFacilities, [id]);
    if (dresults) {
      let findFacilities =
        "SELECT * FROM facilities INNER JOIN locations ON facilities.facility = locations.idlocations WHERE userid = ?";
      const [results] = await db.query(findFacilities, [userid]);
      if (results) {
        console.log("results:"+results)
        return res
          .status(204)
          .json({ message: "User Facility deleted successfuly", results });
      } else {
        return res
          .status(401)
          .json({ message: "Failed to delete the facility" });
      }
    } else {
      return res
        .status(400)
        .json({ message: "Failed to delete home facility" });
    }
  } catch (error) {
    return res.status(500).json({
      errorMessage: error,
      message: "Failed to delete home facility. Internal Server Error",
    });
  }
};

module.exports = deleteUserFavFacility;
