const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token, access denied.' });
  }

  const token = authHeader.split(' ')[1]; // "Bearer <token>" → grab just the token

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // attach the decoded user info to the request
    next(); // token is valid, let the request continue
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token.' });
  }
};

module.exports = protect;