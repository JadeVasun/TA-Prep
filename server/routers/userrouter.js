const router = require('express').Router();
const userController = require('../controller/user.controller');

console.log('this is the usercontroller for the get ', userController.getAllUsers)
//this comes at end of html
//userController is the variable the is getting from user.controllerjs
router.route('/users')
.get(userController.getAllUsers)
.post(userController.handleUserSubmit)
//then add to server

  module.exports = router;
  //add this to server