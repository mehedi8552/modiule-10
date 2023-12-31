const jwt = require('jsonwebtoken');

const secretKey = '1212'; 
module.exports = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send('Access denied.');

  try {
    const verified = jwt.verify(token, secretKey);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send('Invalid token.');
  }
};
