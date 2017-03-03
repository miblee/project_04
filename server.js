require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const morgan = require('morgan');
const path = require('path');
const request = require('request');
const app = express();
// CONFIG

// starts up db
require('./check-yoself/config/database');
const Post = require('./check-yoself/models/Post');

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(session({secret: 'keyboard cat', resave: false, saveUninitialized: true}))

// MAKES API REQ TO MS TEXT ANALYTICS API
app.post('/api', (req, res)=>{
  var url = 'https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment'
  var query = req.body["query"];
  var payload = {
    "documents": [
      {
        "language": "en",
        "id": "1",
        "text": query
      }
    ]
  };
  const options = {
    method: 'POST',
    url: url,
    headers: {
      'Ocp-Apim-Subscription-Key': process.env.MS_TEXT_ANALYTICS_PRIMARY_KEY,
      'Accept': 'application/json'
    },
    json: true,
    body: payload
  };
  request(options, function(err, response, body) {
     if (!err && response.statusCode == 200) {
        // save to dB
        console.log(body);
        try {
          var score = body.documents[0].score
        } catch (e) {
          var score = 0;
        }
        Post.create({
          date: new Date(),
          public: true,
          content: query,
          score: score,
        }, function() {
          return res.json({score: score})
        })
      } else {
        return res.json({err: err, response: response})
      }
  })

})


// GETS POST HISTORY
app.get('/posts', (req, res)=>{
  Post.find(function(error, posts) {
    if(error){
      return response.json({message: 'Could not find any posts'});
    }
    res.json({posts: posts});
  });
})

// DELETES POST
app.post('/posts/:id', (req, res) => {
  var id = req.params.id;
  console.log('req id is', req.params.id)
  Post.remove({_id: id}, function(error) {
    if(error) {
      return res.json({message: 'Could not delete post b/c:' + error})
    };
  })
  Post.find(function(error, posts) {
    if(error){
      return response.json({message: 'Could not find any posts'});
    }
    res.json({posts: posts});
  })
})



// PRESIDENTS' LAB UPDATE FUNCTION FOR IF/WHEN I GET TO UPDATE POSTS
// function updatePost(request, response) {
//   var id = request.params.id;

//   Post.findById({_id: id}, function(error, post) {
//     if(error) response.json({message: 'Could not find post b/c:' + error});

//     if(request.body.name) post.name = request.body.name;
//     if(request.body.start) post.start = request.body.start;
//     if(request.body.end) post.end = request.body.end;
//     if(request.body.uncovered !== undefined) post.uncovered = request.body.uncovered;

//     post.save(function(error) {
//       if(error) response.json({messsage: 'Could not update post b/c:' + error});

//       response.json({message: 'Post successfully updated', post: post});
//     });
//   });
// }

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
