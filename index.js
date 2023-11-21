const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth'); // Corrected path
const notesRoutes = require('./routes/notes'); // Corrected path

const URI = "mongodb://127.0.0.1:27017/notebook";
const port = 5000;
const app = express();

mongoose.connect(URI, {})
    .then(result => console.log("database connected"))
    .catch(err => console.log(err));

app.use(express.json());

app.use('/auth', authRoutes); // Updated path
app.use('/notes', notesRoutes); // Updated path

app.listen(port, () => {
    console.log("Server is running at http://localhost:" + port);
});
