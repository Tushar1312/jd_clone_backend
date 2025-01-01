const Vendor = require("../models/VendorSchema")


exports.vendorLogin = async (req, res) => {
    const { Email, Password } = req.body;

    const result = await Vendor.findOne({ email: Email });
    if (result) {
        if (result.password === Password) {
            res.json({ status: 200, message: "login successfully", vendor: result });
        } else {
            res.json({ status: 422, message: "Invalid password" });
        }
    } else {
        res.json({ status: 422, message: "User not found" });
    }
}

exports.venderRegistration = async (req, res) => {
    const { name, email, mobile, password } = req.body;
  
    const result = await Vendor.create({
      name: name,  
      mobile: mobile,
      email: email,
      password: password,
    });
    if (result) {
      res.json({ status: 200, message: "user created successfully" });
    } else {
      res.json({ status: 422, message: "User not created" });
    }
  };