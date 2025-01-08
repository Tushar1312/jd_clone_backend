const express = require("express");
const multer = require("multer");
const path = require("path")

const { userRegistration, userlogin } = require("../controlers/UserControler");
const { getAllTalukas } = require("../controlers/SettingsControllers");
const { adminLogin } = require("../controlers/AdminControllers");
const { vendorLogin, venderRegistration } = require("../controlers/VendorControllers");
const { Listing } = require("../controlers/ListingControllers");


const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, "./public/images")
    },
    filename: function (req, file, cb) {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);

    }
})

const upload = multer({ storage })

router.post("/api/user-registration", userRegistration);

router.get("/api/admin/all-talukas", getAllTalukas);

router.post("/api/admin/admin-login", adminLogin);

router.post("/api/vendor/vendor-login", vendorLogin);

router.post("/api/vendor/vendor-registration", venderRegistration);

router.post("/api/user-login", userlogin);

// router.post("/api/vendor/add-listing",Listing);

router.post("/api/vendor/add-listing", upload.array("uplod_images", 5), Listing);

module.exports = router;
