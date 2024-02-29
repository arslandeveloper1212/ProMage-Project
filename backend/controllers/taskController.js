
const Task = require("../models/TaskModel");



const getAllTask = async (req, res) => {
    try {
        const projects = await Task.find().populate("staff_id");
        if (projects) {
            res.status(200).json({ message: "Task Created Successfully", projects });
        } else {
            res.status(404).json({ err: "no task found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};



const createTask = async (req, res) => {
    try {
        const data = await Task.create({
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            description: req.body.description,
            status: req.body.status,
            staff_id: req.body.staff_id,


        });

        const projectId = data._id;

        const userData = await Task.findOne({ _id: projectId }).populate("staff_id");

        if (userData) {
            res.status(201).json({ message: "Task created successfully", userData });
        } else {
            res.status(422).json({ err: "Not Created task" });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const getTaskById = async (req, res) => {
    try {
        const project = await Task.findById(req.params.id).populate("staff_id");
        if (project) {
            res.json(project);
        } else {
            res.status(404).json({ message: "Task not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateTask = async (req, res) => {
    try {
        const project = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (project) {
            res.json(project);
        } else {
            res.status(404).json({ message: "Task not found" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteTask = async (req, res) => {
    try {
        const project = await Task.findByIdAndDelete(req.params.id);
        if (project) {
            res.json({ message: "Task deleted successfully" });
        } else {
            res.status(404).json({ message: "task not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllTask,
    createTask,
    getTaskById,
    updateTask,
    deleteTask,
};
