const database = require('../dbconfig');
const Sequelize = require('sequelize');
const seed = require('../seeding');

//db.define makes table in database defining that user can be inserted. so 'users' is the name of the table
const User = database.define ('users', {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER
});
const Todos = database.define ('todos', {
  tasks: Sequelize.STRING
});
// User.hasMany(Todos,
// {})
//calls the table with sync
User.sync() 
//then is successful, catch unsuccessful
  .then(() => console.log('table succesful'))
  .catch(() => console.log('table failed'))
Todos.sync({force: true})
  .then(() => seed(Todos))
  .catch(() => console.log('table failed'))


  module.exports = {
    User: User,
    Todos: Todos
  }
  //then go to controller in server to define functions you need