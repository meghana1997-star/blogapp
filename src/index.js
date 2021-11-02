require('./db/mongoose');
const express = require('express');

const app = express();
app.use(express.json());

const blogRoutes = require('./routes/blogRoutes');
app.use('/blogs', blogRoutes);
app.listen(3000, (req, res) => {
    console.log("app is running in port 3000!");
})