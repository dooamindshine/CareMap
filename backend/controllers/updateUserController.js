const db = require("../db");

const updateUser = async function (req, res) {
  console.log("here");
  try {
    const userid = req.query.userid;
    console.log(req.body.user);
    const {
      first_name,
      last_name,
      age,
      marital_status,
      children,
      address,
      zipcode,
      birthdate,
      gender,
    } = req.body.user;

    if (!userid)
      return res
        .status(400)
        .json({ message: "user id is required in parameters" });

    let updateUsers =
      "UPDATE users SET first_name = ?, last_name = ?, age = ? , marital_status = ?, children = ?, address = ?, zipcode = ?, gender = ? WHERE id = ?;";
    const [results] = await db.query(updateUsers, [
      first_name,
      last_name,
      age,
      marital_status,
      children,
      address,
      zipcode,
      gender,
      userid,
    ]);
    if (results) {
      return res.status(200).json({ message: "User updated successfuly" });
    } else {
      return res.status(400).json({ message: "Failed to update user" });
    }
  } catch (error) {
    console.log("error");
    console.log(error);
    return res.status(500).json({
      errorMessage: error,
      message: "Failed to update user. Internal Server Error",
    });
  }
};

module.exports = updateUser;
