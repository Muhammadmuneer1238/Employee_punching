const mongoose = require("mongoose");


const punchSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    tasks: [{
        task: Array
    }],
    punchInTime: {
        type: Date
    },
    punchOutTime:
    {
        type: Date
    },
    completed: [{
        task: Array
    }],
    checked: {
        type: Boolean
    }

});

const PunchActivity = mongoose.model("PunchActivity", punchSchema);

module.exports = PunchActivity;
