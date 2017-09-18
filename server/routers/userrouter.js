const router = require('express').Router();
const userController = require('../controller/user.controller');

console.log('this is the usercontroller for the get ', userController.getAllUsers)
//this comes at end of html
//userController is the variable the is getting from user.controllerjs
router.route('/users')
.get(userController.getAllTasks)
.post(userController.handleUserSubmit)

router.route('/users/:id')
.delete(userController.deleteItems)
//then add to server

  module.exports = router;
  //add this to server