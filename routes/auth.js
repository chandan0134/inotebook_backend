const express = require('express');
const User=require('../models/User')
const router = express.Router();

// router.get('/', (req, res) => {
//     console.log(req.body);
    
//     res.send("hello");
// });

// module.exports = router;



router.post('/', async (req, res) => {
    try {
        const { name, email, password,date } = req.body;

        // Create a new User instance
        const user = new User({
            name,
            email,
            password,
            date
        });

        // Save the user to the database
        const savedUser = await user.save();

        // Send the saved user data as the response
        res.json(savedUser);
    } catch (error) {
        // If an error occurs during the process, send a 400 status with the error message
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
