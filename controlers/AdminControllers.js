const Admin = require("../models/AdminSchema")

exports.adminLogin = async (req, res) => {
    const { Email, Password } = req.body;

    const result = await Admin.findOne({ email: Email });
    if (result) {
        if (result.password === Password) {
            res.json({ status: 200, message: "login successfully", admin: result });
        } else {
            res.json({ status: 422, message: "Invalid password" });
        }
    } else {
        res.json({ status: 422, message: "User not found" });
    }
}