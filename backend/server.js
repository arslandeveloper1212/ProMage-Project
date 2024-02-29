const express = require('express');
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" })

const mongoose = require('mongoose');
const projectRoutes = require('./routes/projectRoutes');
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");
const app = express();
const port = process.env.PORT || 8202

app.use(express.json());

require("./db/conn")
app.use('/projects', projectRoutes);
app.use("/tasks", taskRoutes)
app.use("/users", userRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
