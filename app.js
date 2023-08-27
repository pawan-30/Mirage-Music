// Entry File.
//const express = require('express'); // Common JS
import express from 'express';
import cors from 'cors';
import { userRoutes } from './routes/user-routes.js';
import bodyParser from 'body-parser';
const app = express();
app.use(cors()); // cors middleware
app.use(express.static("public"))
app.use(express.json()); // JSON Data Fetch (next)
app.use(bodyParser.urlencoded({extended:false}))
app.use('/',userRoutes);
//app.use('/', ideRoutes);
// Last Middleware (404)
app.use((request, response, next)=>{
    response.json({message:'Invalid URL'});
})
const server = app.listen(1234,(err)=>{
    if(err){
        console.log('Server Crash ', err);
    }
    else{
        console.log('Server Up and Running ', server.address().port);
    }
})