const express = require("express");
const { userRegistration } = require("../controlers/UserControler");
const { getAllTalukas } = require("../controlers/SettingsControllers");
const { adminLogin } = require("../controlers/AdminControllers");
const { vendorLogin } = require("../controlers/VendorControllers");
const router = express.Router();

router.post("/api/user-tushar", userRegistration);

router.get("/api/admin/all-talukas",getAllTalukas);

router.post("/api/admin/admin-login",adminLogin);

router.post("/api/vendor/vendor-login", vendorLogin);



module.exports = router;