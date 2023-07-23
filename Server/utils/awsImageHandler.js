const multer = require("multer");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");
require('aws-sdk/lib/maintenance_mode_message').suppress = true;
const path = require('path');


const s3Config = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    bucket: process.env.AWS_S3_BUCKET_NAME,
});


const avatarS3Config = multerS3({
    s3: s3Config,
    bucket: process.env.AWS_S3_BUCKET_NAME,
    acl: 'public-read',
    metadata: function (req, file, cb) {
        cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, "chatApplication/avatar/" + file.fieldname + '_' + uniqueSuffix + path.extname(file.originalname))
    }
});



exports.uploadAvatar = multer({
    storage: avatarS3Config,
});
