const express = require("express");
const router = express.Router();
const admin = require("../controllers/adminController");
const authenticateJWT = require("../middleware/authMiddleware");

router.post("/addCourse", authenticateJWT, admin.addCourse);
router.post("/addTeacher", authenticateJWT, admin.addTeacher);
router.post("/addupc", authenticateJWT, admin.upcomingCourse);
router.post("/login", admin.login);
router.get("/getUser", authenticateJWT, admin.getUser);

module.exports = router;
