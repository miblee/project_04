// SINCE THIS IS USERS, I PROBABLY ONLY NEED TO DO "CREATE USER" AND NOTHING ELSE, RIGHT?


var User = require('../models/User');

// GET
function getAll(request, response) {
  User.find(function(error, users) {
    if(error) response.json({message: 'Could not find any user'});

    response.json({users: users});
  });
}

// POST
function createUser(request, response) {
  console.log('in POST');
  console.log('body:',request.body);

  var user = new User(request.body);

  user.save(function(error) {
    if (error) response.json({messsage: 'Could not ceate user b/c:' + error});

    response.json({user: user, message: "User successfully added."});
  });
}

// GET
function getUser(request, response) {
  var id = request.params.id;

  User.findById({_id: id}, function(error, user) {
    if(error) response.json({message: 'Could not find user b/c:' + error});

    response.json({user: user});
  });
}

// function updateUser(request, response) {
//   var id = request.params.id;

//   User.findById({_id: id}, function(error, user) {
//     if(error) response.json({message: 'Could not find user b/c:' + error});

//     if(request.body.name) user.name = request.body.name;
//     if(request.body.start) user.start = request.body.start;
//     if(request.body.end) user.end = request.body.end;
//     if(request.body.uncovered !== undefined) user.uncovered = request.body.uncovered;

//     user.save(function(error) {
//       if(error) response.json({messsage: 'Could not update user b/c:' + error});

//       response.json({message: 'User successfully updated', user: user});
//     });
//   });
// }

// function removeUser(request, response) {
//   var id = request.params.id;

//   User.remove({_id: id}, function(error) {
//     if(error) response.json({message: 'Could not delete user b/c:' + error});

//     response.json({message: 'User successfully deleted'});
//   });
// }

module.exports = {
  getAll: getAll,
  createUser: createUser,
  getUser: getUser,
  // updateUser: updateUser,
  // removeUser: removeUser
}
