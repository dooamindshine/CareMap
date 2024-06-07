const db = require("../db");

const updateUserFavHomes = async function (req, res) {
  try {
    const userid = req.query.userid;
    const address = req.body.data;

    if (!userid)
      return res
        .status(400)
        .json({ message: "address id is required in parameters" });

    let updateHomes = "UPDATE homes SET isfav = ? WHERE uuid = ?;";
    const [results] = await db.query(updateHomes, [address.isFav, address.id]);
    if (results) {
      return res
        .status(200)
        .json({ message: "User Homes updated successfuly", results });
    } else {
      return res.status(400).json({ message: "Failed to update address" });
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      errorMessage: error,
      message: "Failed to update address. Internal Server Error",
    });
  }
};

module.exports = updateUserFavHomes;
