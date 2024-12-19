const mongoose = require("mongoose");

const TalukasSchema = new mongoose.Schema(
    {
        taluka_name: String,
        district: String,
        state: String,
        status: String,
    },
    {
        timestamps: true,
    }
);

const Talukas = mongoose.model("Talukas", TalukasSchema);
module.exports = Talukas;