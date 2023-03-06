const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.post('/upload-image', async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.body.data);
    res.send(result.public_id);
  } catch (error) {
    //console.log(error);
  }
});

module.exports = router;
