var Post = require('../models/Post');

// GET
function getAll(request, response) {
  Post.find(function(error, posts) {
    if(error) response.json({message: 'Could not find any posts'});

    response.json({posts: posts});
  });
}

// POST
function createPost(request, response) {
  console.log('in POST');
  console.log('body:',request.body);

  var post = new Post(request.body);

  post.save(function(error) {
    if (error) response.json({messsage: 'Could not ceate post b/c:' + error});

    response.json({post: post, message: "Post successfully added."});
  });
}

// GET
function getPost(request, response) {
  var id = request.params.id;

  Post.findById({_id: id}, function(error, post) {
    if(error) response.json({message: 'Could not find post b/c:' + error});

    response.json({post: post});
  });
}

function updatePost(request, response) {
  var id = request.params.id;

  Post.findById({_id: id}, function(error, post) {
    if(error) response.json({message: 'Could not find post b/c:' + error});

    if(request.body.name) post.name = request.body.name;
    if(request.body.start) post.start = request.body.start;
    if(request.body.end) post.end = request.body.end;
    if(request.body.uncovered !== undefined) post.uncovered = request.body.uncovered;

    post.save(function(error) {
      if(error) response.json({messsage: 'Could not update post b/c:' + error});

      response.json({message: 'Post successfully updated', post: post});
    });
  });
}

function removePost(request, response) {
  var id = request.params.id;

  Post.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete post b/c:' + error});

    response.json({message: 'Post successfully deleted'});
  });
}

// Post
module.exports = {
  getAll: getAll,
  createPost: createPost,
  getPost: getPost,
  updatePost: updatePost,
  removePost: removePost
}
