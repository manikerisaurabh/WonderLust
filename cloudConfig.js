

const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");


// to attach backend with cloudinary account we are config it with .env credintials
cloudinary.config({
    cloud_name: "dump4bxcm",
    api_key: "571698628183994",
    api_secret: "UbCS-YxUD2E8bf3eqOQtMFJuyhA",
});

// this is from npm cloudinary, only provide the folder name
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "journeyNest",
        allowedFormats: ["png", "jpg", "jpeg"],
    },
});

module.exports = {
    cloudinary,
    storage,
};  // we are using this in routes listing