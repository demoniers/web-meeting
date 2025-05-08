const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "❌ No autorizado" });

  try {
    req.user = jwt.verify(token, "MeettingInternacionalSalamanca2026IEdicion");
    next();
  } catch (error) {
    res.status(403).json({ error: "❌ Token inválido" });
  }
};
