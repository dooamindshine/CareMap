const getUserProfile = async function (req, res) {
  try {
    const { userid } = req.query.userid;

    if (!userid)
      return res
        .status(400)
        .json({ message: "User id is required in parameters" });

    let findUser = "SELECT * FROM users WHERE id = ? AND is_deleted = 0";
    const [rows] = await db.query(findUser, [userid]);
    if (rows.length == 1) {
      const user = rows[0];
      console.log(user);
      return res
        .status(200)
        .json({ message: "User Data Fetch successfuly", user });
    } else {
      return res.status(401).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({
      errorMessage: error,
      message: "Failed to fetch User. Internal Server Error",
    });
  }
};

module.exports = getUserProfile;
