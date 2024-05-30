const jwt = require("jsonwebtoken");

const verifyJWTToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  const email = req.header('email');
  if (!token) return res.status(401).json({ error: "Access has been denied" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    email = decoded.email;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = verifyJWTToken;
