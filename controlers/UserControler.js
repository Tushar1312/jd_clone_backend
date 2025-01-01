const Users = require("../models/UserSchema");

exports.userRegistration = async (req, res) => {
  const { name, email, mobile, password } = req.body;

  const result = await Users.create({
    name: name,  
    mobile: mobile,
    email: email,
    password: password,
  });
  if (result) {
    res.json({ status: 200, message: "user create successfully" });
  } else {
    res.json({ status: 422, message: "User not created" });
  }

};
exports.userlogin=async(req,res)=>{
  const{email,password}=req.body;

  const result = await Users.findOne({
    email:email,
    password:password,
  });
  if (result) {
    res.json({ status: 200, message: "login successfully" });
  } else {
    res.json({ status: 422, message: "User not found" });
  }
};