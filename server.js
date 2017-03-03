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

app.get('/posts', (req, res)=>{
  Post.find(function(error, posts) {
    if(error){
      return response.json({message: 'Could not find any posts'});
    }
    res.json({posts: posts});
  });
})


const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
