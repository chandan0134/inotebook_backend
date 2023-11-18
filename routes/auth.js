const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

router.post(
  '/',
  [
    body('name').notEmpty(),
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, email, password } = req.body;

      // Create a new User instance
      const user = new User({
        name,
        email,
        password
      });

      // Save the user to the database
      const savedUser = await user.save();

      // Send the saved user data as the response
      res.json(savedUser);
    } catch (error) {
      // If an error occurs during the process, send a 500 status with the error message
      res.status(500).json({ error: error.message });
    }
  }
);

module.exports = router;
