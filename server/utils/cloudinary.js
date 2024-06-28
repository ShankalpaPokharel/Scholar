const cloudinary = require("cloudinary").v2;
const fs = require("fs");

require("dotenv").config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// const uploadOnCloudinary = async (localFilePath) => {
//     try {
//         if (!localFilePath) return { message: "couldn't find the file path" };
//         // upload the file on cloudinary
//         const response = await cloudinary.uploader.upload(localFilePath, {
//             resource_type: "auto",
//         });
//         // file has been uploaded successful
//         console.log("file  is uploaed on cloudinary", response.url);
//         return response;
//     } catch (error) {
//         fs.unlinkSync(localFilePath); //remove the locally caved temporary file as the upload operation got failed
//         return error;
//     }
// };
const uploadOnCloudinary = async (fileData) => {
    try {
        if (!fileData) return { message: "File data is missing" };

        const uploadStream = cloudinary.uploader.upload_stream(
            { resource_type: "auto" },
            (error, result) => {
                if (error) {
                    console.error("Error during upload to Cloudinary:", error);
                    // Handle error if needed
                    return;
                }
                console.log("File uploaded to Cloudinary:", result.secure_url);
                // Optionally, you can delete the local temporary file if it exists
                // fs.unlinkSync(localFilePath);
            }
        );

        const readableStream = new Readable();
        readableStream.push(fileData);
        readableStream.push(null);

        readableStream.pipe(uploadStream);

        return new Promise((resolve, reject) => {
            uploadStream.on("end", () => resolve({ secure_url: result.secure_url }));
            uploadStream.on("error", (error) => reject(error));
        });
    } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        throw error;
    }
};
module.exports = { uploadOnCloudinary };
