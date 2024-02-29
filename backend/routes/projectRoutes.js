// projectRoutes.js
const express = require('express');
const router = express.Router();
const { getAllProjects, createProject, updateProject, getProjectById, deleteProject } = require("../controllers/projectController");

// Routes
router.post('/createproject', createProject);
router.get('/getproject', getAllProjects);
router.get('/getproject/:id', getProjectById);
router.put('/updateproject/:id', updateProject);
router.delete('/deleteproject/:id', deleteProject);

// Add other routes as needed

module.exports = router;
