const express = require("express");
const router = express.Router();
const user = require("../controllers/userController");


router.get("/getCourses",user.getCourses)
router.get("/getTeachers",user.getTeachers)
router.get("/getupc",user.getUpcomingCourses)

module.exports = router;
