
const express = require('express');
const router = express.Router();

const { userController } = require("../controllers/userController");


router.post('/createuser', userController);

// Add other routes as needed

module.exports = router;
