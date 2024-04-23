const express = require('express');
const router = require('./src/routes/api');
const app = new express();
const bodyPerser = require('body-parser');
const path = require('path');
require('dotenv').config()


// Security Middleware
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitizer = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

// Database
const mongoose = require('mongoose');

// Security Middleware Implement
app.use(helmet());
app.use(mongoSanitizer());
app.use(xss());
app.use(hpp());
app.use(cors());


// Body Perser
app.use(bodyPerser.json());


// Rate Limiter
const limiter = rateLimit({windowMs: 15*60*1000, max:3000})
app.use(limiter);

// Database Conncection 
let URI ="mongodb+srv://<username>:<password>@cluster0.3vcr8jm.mongodb.net/Food_CRUD?retryWrites=true&w=majority&appName=Cluster0";
let OPTION = {user:`${process.env.DB_USERNAME}`, pass:`${process.env.DB_PASSWORD}`, autoIndex:true}
mongoose.connect(URI, OPTION)
.then(()=>{
    console.log("Database Connected Successfully")
})
.catch(()=>{
    console.log("Database Connection Failed")
})

// rocky(()=>{

// })

// Managing Backend API Routing
app.use("/api/v1", router)



// Managing Front-end Routing
app.use(express.static('client/dist'))
app.use('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./client/dist/index.html'))
})




module.exports = app;