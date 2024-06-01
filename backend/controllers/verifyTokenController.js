const jwt = require("jsonwebtoken");

const verifyJWTToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  console.log(token);
  const email = req.header("Email");
  console.log(email);
  if (!token) return res.status(401).json({ error: "Access has been denied" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    if (email == decoded.email) next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = verifyJWTToken;
