const mongoose = require("mongoose");


const AdminSchema = new mongoose.Schema(
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
const Admin = mongoose.model("admin", AdminSchema);
module.exports = Admin;




