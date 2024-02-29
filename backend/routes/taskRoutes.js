// projectRoutes.js
const express = require('express');
const router = express.Router();
const { getAllTask,
    createTask,
    getTaskById,
    updateTask,
    deleteTask, } = require("../controllers/taskController");

router.post('/createtask', createTask);
router.get('/gettask', getAllTask);
router.get('/gettask/:id', getTaskById);
router.put('/updatetask/:id', updateTask);
router.delete('/deletetask/:id', deleteTask);

module.exports = router;
