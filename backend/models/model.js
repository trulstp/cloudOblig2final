const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema({
    topic: [
        {
            stationName: {
                type: String,
            },
            timestamp: {
                type: String,
            },
            airTemperature: {
                type: Number,
            },
        },
    ],
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("weather", weatherSchema);
