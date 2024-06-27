const { uploadOnCloudinary } = require("../utils/cloudinary");
const fs = require("fs");
const path = require("path");

const Course = require("../models/Course");
const Teacher = require("../models/teacher");
const UpcomingCourse = require("../models/Upcomingcourse");

exports.addCourse = async (req, res) => {
    try {
        const { category, price, instructor, title } = req.body;
        const image = req.files?.image;

        if (!category || !price || !instructor || !title || !image) {
            return res.status(400).send("All fields are required");
        }

        let rootPath = path.resolve(); // Get root path
        let fileName = Date.now() + Math.random().toString(36).substring(2, 10); // Generate unique filename
        imagePath = path.join("/", "uploads", `${fileName}-${req.files.image.name}`); // Create image path
        // console.log(imagePath);

        const filePath = path.join(rootPath, imagePath); // Create file path
        await req.files.image.mv(filePath); // Move uploaded image to file path

        // Upload image to Cloudinary
        const cloudinary_response = await uploadOnCloudinary(filePath);

        fs.unlinkSync(filePath); // Delete temporary file
        imagePath = cloudinary_response.secure_url; // Set image path to Cloudinary URL

        // console.log(cloudinary_response);

        const course = { category, price, instructor, title, image: imagePath };

        const savedCourse = await Course.create(course);

        return res.send({ message: "Course added successfully", savedCourse });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error, success: false });
    }
};

exports.addTeacher = async (req, res) => {
    try {
        const { name, field, facebook, twitter, linkedin } = req.body;
        const image = req.files?.image;

        if (!name || !field || !image) {
            return res.status(400).send("Name, field, and image are required");
        }

        let rootPath = path.resolve(); // Get root path
        let fileName = Date.now() + Math.random().toString(36).substring(2, 10); // Generate unique filename
        imagePath = path.join("/", "uploads", `${fileName}-${req.files.image.name}`); // Create image path
        // console.log(imagePath);

        const filePath = path.join(rootPath, imagePath); // Create file path
        await req.files.image.mv(filePath); // Move uploaded image to file path

        // Upload image to Cloudinary
        const cloudinary_response = await uploadOnCloudinary(filePath);

        fs.unlinkSync(filePath); // Delete temporary file
        imagePath = cloudinary_response.secure_url; // Set image path to Cloudinary URL

        // console.log(cloudinary_response);

        const teacher = { name, field, facebook, twitter, linkedin, image: imagePath };

        const savedTeacher = await Teacher.create(teacher);

        return res.send({ message: "Teacher added successfully", savedTeacher });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error, success: false });
    }
};

exports.upcomingCourse = async (req, res) => {
    try {
        const { category, date, duration, price } = req.body;
        const image = req.files?.image;

        if (!category || !date || !duration || !price || !image) {
            return res.status(400).send("All fields are required");
        }

        let rootPath = path.resolve(); // Get root path
        let fileName = Date.now() + Math.random().toString(36).substring(2, 10); // Generate unique filename
        imagePath = path.join("/", "uploads", `${fileName}-${req.files.image.name}`); // Create image path
        // console.log(imagePath);

        const filePath = path.join(rootPath, imagePath); // Create file path
        await req.files.image.mv(filePath); // Move uploaded image to file path

        // Upload image to Cloudinary
        const cloudinary_response = await uploadOnCloudinary(filePath);

        fs.unlinkSync(filePath); // Delete temporary file
        imagePath = cloudinary_response.secure_url; // Set image path to Cloudinary URL

        // console.log(cloudinary_response);

        const teacher = { category, date, duration, price, image: imagePath };

        const savedupc = await UpcomingCourse.create(teacher);

        return res.send({ message: "UPC  added successfully", savedupc });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error, success: false });
    }
};
