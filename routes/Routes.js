const express = require("express");
const { userRegistration, userlogin } = require("../controlers/UserControler");
const { getAllTalukas } = require("../controlers/SettingsControllers");
const { adminLogin } = require("../controlers/AdminControllers");
const { vendorLogin, venderRegistration } = require("../controlers/VendorControllers");
const router = express.Router();

router.post("/api/user-registration", userRegistration);

router.get("/api/admin/all-talukas",getAllTalukas);

router.post("/api/admin/admin-login",adminLogin);

router.post("/api/vendor/vendor-login", vendorLogin);

router.post("/api/vendor/vendor-registration",venderRegistration);
 
router.post("/api/user-login", userlogin);


module.exports = router;