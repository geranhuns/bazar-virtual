function validateToken(req, res, next) {
  const token = req.headers.authorization;
  //lógica para validar el token
  if (x) {
    //si el token es válido
    //add token to req
    req.headers.token = token;
    return next(req, res);
  }
  return res.status(401).json({ error: "unauthorized" });
}

function isAdmin(req, res, next) {
  const { token } = req.headers;
  if (!token.isAdmin) {
    return res.status(403).json({ error: "Forbidden" });
  }
  return next(req, res);
}

module.exports = { validateToken, isAdmin };
