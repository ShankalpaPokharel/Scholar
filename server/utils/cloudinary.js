const cloudinary = require("cloudinary").v2;
const { Readable } = require("stream");

require("dotenv").config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (fileData) => {
    try {
        if (!fileData) return { message: "File data is missing" };

        return new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream({ resource_type: "auto" }, (error, result) => {
                if (error) {
                    console.error("Error during upload to Cloudinary:", error);
                    reject(error); // Reject promise on error
                    return;
                }
                console.log("File uploaded to Cloudinary:", result.secure_url);
                resolve(result); // Resolve promise with result on success
            });

            const readableStream = new Readable();
            readableStream.push(fileData);
            readableStream.push(null);

            readableStream.pipe(uploadStream);
        });
    } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        throw error;
    }
};

module.exports = { uploadOnCloudinary };
