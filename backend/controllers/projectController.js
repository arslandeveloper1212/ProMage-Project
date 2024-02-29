
const Project = require("../models/Project");



const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find().populate("staff_id");

        if (projects) {
            res.status(200).json({ message: "Projects retrieved successfully", projects });
        } else {
            res.status(404).json({ err: "No projects found" });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


const createProject = async (req, res) => {
    try {
        const data = await Project.create({
            staff_id: req.body.staff_id,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            isRunning: req.body.isRunning,
        });

        const projectId = data._id; // Get the MongoDB ID of the created project

        const userData = await Project.findOne({ _id: projectId }).populate("staff_id");

        if (userData) {
            res.status(201).json({ message: "Project created successfully", userData });
        } else {
            res.status(422).json({ err: "Not Created Project" });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};











const getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id).populate("staff_id");
        if (project) {
            res.json(project);
        } else {
            res.status(404).json({ message: "Project not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (project) {
            res.json(project);
        } else {
            res.status(404).json({ message: "Project not found" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);
        if (project) {
            res.json({ message: "Project deleted successfully" });
        } else {
            res.status(404).json({ message: "Project not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllProjects,
    createProject,
    getProjectById,
    updateProject,
    deleteProject,
};
