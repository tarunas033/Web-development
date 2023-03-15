// import required modules
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'src/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage });


app.get('/', (req, res) => {
  res.status(200).json({ 
    message: 'welcome to server' });
});

app.post('/upload', upload.single('file'), (req, res) => {
  res.status(200).json({
     message: 'user ${id} uploaded successfully' });
});

// export the server
module.exports = app;
