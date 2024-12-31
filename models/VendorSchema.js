const mongoose = require("mongoose");


const VendorSchema = new mongoose.Schema(
    {
        username: String,
        mobile: String,
        email: String,
        password: String,

    },
    {
        timestamps: true,
    }
)
const Vendor = mongoose.model("vendor",VendorSchema);
module.exports = Vendor;