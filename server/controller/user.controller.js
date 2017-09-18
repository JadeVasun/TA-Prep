const userDefinition = require('../../database/models/samplemodel').User;
const todoDefinition = require('../../database/models/samplemodel').Todos;
console.log('this is the userdefinition',userDefinition)
//req is from front end, res is what were sending back to frontend or data back to frontend
module.exports = {
  getAllTasks: (req, res) => {
    console.log('In the getAllUsers Controller');
    //findAll gets all users
    todoDefinition.findAll()
      .then((tasks) => {
        res.status(200).send(tasks)
      })
      .catch(() => {
        res.status(404);
      })
  },
  //create adds a user
  //use name and body from model in models database
  handleUserSubmit: (req, res) => {
    todoDefinition.create({
      tasks: req.body.todo
    })
    .then((user) => {
      res.status(201).send(user)
    })
    .catch(() => {
      res.status(404);
    })
  },
  
  deleteItems: (req, res) => {
    todoDefinition.destroy({
      where: {id: req.params.id}
    })
    .then(() => {
      res.status(200).send('working');
    })
    .catch(() => {
      res.status(404).send('notworkin');
    })
  }
}

//then make router file in routers folder