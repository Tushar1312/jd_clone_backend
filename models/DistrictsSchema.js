const mongoose = require("mongoose");

const DistrictsSchema = new mongoose.Schema(
    {
        district: String,
        state: String,
        status: String,
    },
    {
        timestamps: true,
    }
);

const Districts = mongoose.model("Districts", DistrictsSchema);
module.exports = Districts;