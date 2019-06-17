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


const port = process.env.PORT || 3000;
app.listen(port,() => {
	console.log(`Started at port ${port}`);

})

