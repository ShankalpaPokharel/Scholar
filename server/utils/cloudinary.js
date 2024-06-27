const cloudinary = require("cloudinary").v2;
const fs = require("fs");

require("dotenv").config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return { message: "couldn't find the file path" };
        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });
        // file has been uploaded successful
        console.log("file  is uploaed on cloudinary", response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath); //remove the locally caved temporary file as the upload operation got failed
        return error;
    }
};

module.exports = { uploadOnCloudinary };
