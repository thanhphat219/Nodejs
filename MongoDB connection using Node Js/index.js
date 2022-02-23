const express = require('express');
const app = express();
const mongoose = require('mongoose');


const connectionUrl = "mongodb+srv://thanhphat219:anh123456@thanhphat219.zfapj.mongodb.net/thanhphat219?retryWrites=true&w=majority"

mongoose
  .connect(connectionUrl)
  .then(() => {
    console.log("Connection Successfull");
  })
  .catch((err) => {
    console.log(err);
  });