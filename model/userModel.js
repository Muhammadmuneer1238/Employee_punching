const mongoose = require("mongoose");


const punchSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    tasks: [{
        task: String
    }],
    punchInTime: {
        type: Date
    },
    punchOutTime:
    {
        type: Date
    },
    completed: [{
        task: String
    }]
});

const PunchActivity = mongoose.model("PunchActivity", punchSchema);

module.exports = PunchActivity;
