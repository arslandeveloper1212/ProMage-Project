const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['completed', 'started'],
        default: 'started'
    },
    staff_id: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },

}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;