// requisito 3
const validateEmailPassword = async (req, res, next) => {
  const { email, password } = req.body;
  if(!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  if(email.length < 1 || password.length < 1) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
}

module.exports = validateEmailPassword;