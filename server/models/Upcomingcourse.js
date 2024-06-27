const mongoose = require('mongoose');

const upcomingCourseSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String, // Store the path to the image
        required: true,
    },
}, {
    timestamps: true 
});

const UpcomingCourse = mongoose.model('UpcomingCourse', upcomingCourseSchema);

module.exports = UpcomingCourse;
