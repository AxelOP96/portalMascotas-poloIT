const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = (requiredRole) => async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ msg: "Token requerido" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user || user.role !== requiredRole) {
      return res.status(403).json({ msg: "Acceso denegado" });
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token inválido" });
  }
};
