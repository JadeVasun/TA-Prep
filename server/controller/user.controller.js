const userDefinition = require('../../database/models/samplemodel');
console.log('this is the userdefinition',userDefinition)
//req is from front end, res is what were sending back to frontend or data back to frontend
module.exports = {
  getAllUsers: (req, res) => {
    //findAll gets all users
    userDefinition.findAll()
      .then((userlist) => {
        res.status(200).send(userlist)
      })
      .catch(() => {
        res.status(404);
      })
  },
  //create adds a user
  //use name and body from model in models database
  addUserToTable: (req, res) => {
    userDefinition.create({
      name: req.body.name,
      age: req.body.age
    })
    .then((user) => {
      res.status(201).send(user)
    })
    .catch(() => {
      res.status(404);
    })
  }
}

//then make router file in routers folder