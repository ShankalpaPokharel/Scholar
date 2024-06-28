const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    field: {
        type: String,
        required: true,
    },
    image: {
        type: String, // Store the path to the image
        required: true,
    },
    facebook: {
        type: String,
        default: ''
    },
    twitter: {
        type: String,
        default: ''
    },
    linkedin: {
        type: String,
        default: ''
    },
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

const Teacher = mongoose.models.Teacher || mongoose.model('Teacher', teacherSchema);
module.exports = Teacher;


