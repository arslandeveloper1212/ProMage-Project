const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    isRunning: {
        type: Boolean,
        default: true
    },
    staff_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);

module.exports = Project