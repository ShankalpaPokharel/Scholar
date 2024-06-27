const express = require("express");
const router = express.Router();
const admin = require("../controllers/adminController");

router.post("/addCourse", admin.addCourse);
router.post("/addTeacher", admin.addTeacher);
router.post("/addupc", admin.upcomingCourse);
router.post("/login",admin.login)

module.exports = router;
