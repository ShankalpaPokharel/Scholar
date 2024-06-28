const Course = require("../models/Course.models");
const Teacher = require("../models/Teacher.models")
const UpcomingCourse = require("../models/Upcomingcourse.models");

exports.getCourses = async (req, res) => {
    try {
        const courses = await Course.find({});
        res.status(200).json(courses); // Status code 200 for successful response
    } catch (error) {
        console.error("Error fetching courses:", error);
        res.status(500).json({ error: "Error fetching courses" });
    }
};

exports.getTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find({});
        res.status(200).json(teachers); // Status code 200 for successful response
    } catch (error) {
        console.error("Error fetching teachers:", error);
        res.status(500).json({ error: "Error fetching teachers" });
    }
};

exports.getUpcomingCourses = async (req, res) => {
    try {
        const upcomingCourses = await UpcomingCourse.find({});
        res.status(200).json(upcomingCourses); // Status code 200 for successful response
    } catch (error) {
        console.error("Error fetching upcoming courses:", error);
        res.status(500).json({ error: "Error fetching upcoming courses" });
    }
};
