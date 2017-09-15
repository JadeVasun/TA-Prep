const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('../database/dbconfig');
const userRouter = require('./routers/userrouter');
const path = require('path');

const port = 1337;
const ip = 'localhost';


const app = express();
app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended:true}))
  .use(morgan('dev'))
  //add router later then test using postman
  .use('/api', userRouter);
app.use(express.static(path.join(__dirname, '../client/static')));


app.listen(port, ip, () => {
  console.log('congrats server established');
})

//to check if port is listening then you then node server/server
//it'll 404 when you go to the site

//when done go to postman
