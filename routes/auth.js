const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

router.use(express.json());

// Create a user using: POST "/api/auth/add-user". No login required.
router.post(
  '/add-user',
  [
    body('name').notEmpty(),
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, email, password } = req.body;

      // Check if the user with the given email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'Email is already in use' });
      }

      // If the user does not exist, create a new user
      const user = new User({
        name,
        email,
        password,
      });

      const savedUser = await user.save();
      res.json(savedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }
);

module.exports = router;
