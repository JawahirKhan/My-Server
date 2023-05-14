const express = require("express");
const app = express();
const port = 3000
const mongoose = require('mongoose')
app.use(express.json())
require('dotenv').config({path:'./config.env'});
const connectDb = require('./db/db');
const router = require("./routes/user");


app.use('/getAllUsers',router)
app.use('/delete',router)




app.listen(port, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", port);
});





