const jwt = require("jsonwebtoken");
const User = require("../models/User");

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ msg: "Token requerido" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(401).json({ msg: "Usuario no encontrado" });

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token inválido" });
  }
};

module.exports = verifyToken;
