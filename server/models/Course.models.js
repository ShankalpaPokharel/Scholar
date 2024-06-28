const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
    {
        category: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        instructor: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        image: {
            type: String, // Store the path to the image
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);
module.exports = Course;


