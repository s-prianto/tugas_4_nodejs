//filename index.js
//import express
let express = require('express');
//import mongoose
let mongoose = require('mongoose');
//import body parser
let bodyParser = require('body-parser');
//import Routes
let apiRoutes = require('./api-routes.js');

//intialize app
let app = express();

//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//connect monogose and set connection variable
mongoose.connect('mongodb://localhost/tugas_4_nodejs');

var db = mongoose.connection;

//setup server
var PORT = process.env.PORT || 8083;

//lauched app greetings
app.listen(PORT,()=>{console.log(`Server Berjalan pada PORT ${PORT}`)});

//send message for default url
app.get('/',(req,res)=>res.send('Selamat Datang di Server Data Siswa'));

//app apiRoutes
app.use('/api',apiRoutes);
