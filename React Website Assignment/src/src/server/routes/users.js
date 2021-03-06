const router = require('express').Router();
const User = require('../models/user.model');
const checkAuth = require('../middleware/checkAuth');
const wrap = require('../helpers/wrap');
const sendError = require('../middleware/sendError');

router.use(checkAuth);

// @route POST api/users
// @desc add new users
router.post('/', wrap(async (req, res) => {
  const { username, password } = req.body;

  const newUser = new User({ username, password });
  await newUser.save();

  res.json(`User registered: ${username}`);
}));

router.use(sendError);

module.exports = router;
