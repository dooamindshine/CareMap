const addUserFavHomes = async function (req, res) {
  try {
    const { userid } = req.query.userid;
    const { address } = req.body.user;

    if (!userid)
      return res
        .status(400)
        .json({ message: "Userid is required in parameters" });

    let insertHomes = "INSERT INTO homes (userid, address)  values ( ? , ?)";
    const [rows] = await db.query(insertHomes, [userid, address]);
    if (rows.length == 1) {
      const homes = rows[0];
      console.log(homes);
      return res
        .status(201)
        .json({ message: "User Homes Added successfuly", homes });
    } else {
      return res.status(400).json({ message: "Failed to add new home address" });
    }
  } catch (error) {
    return res.status(500).json({
      errorMessage: error,
      message: "Failed to add Homes. Internal Server Error",
    });
  }
};

module.exports = addUserFavHomes;
