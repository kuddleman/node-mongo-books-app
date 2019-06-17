// on command line:
// 1. npm init

// 2. install dependencies
// npm install express body-parser mongoose@4.10.8 --save

const express = require('express');
const bodyParser = require('body-parser');

//create an instance of express:
const app = express();


//MIDDLEWARE

//tell the app how to render the static HTML we're using:
app.use(express.static(__dirname + '/../public'))


//Set up moongoose

  //require moongoose
const mongoose = require('mongoose');
 
  //set up connection:
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/book_db'); 

//create models for data, but use separate folder: server/models

const {Book} = require('./models/books');
const {Store} = require('./models/stores');


const port = process.env.PORT || 3000;
app.listen(port,() => {
	console.log(`Started at port ${port}`);

})

