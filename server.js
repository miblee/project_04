require('dotenv').config();
const express = require('express');
// const favicon = require('serve-favicon');
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
// app.use(favicon(path.join(__dirname, 'public/favicon.ico')))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(session({secret: 'keyboard cat', resave: false, saveUninitialized: true}))

// ROUTES
// app.use('/', require('./src/index'))
// app.use('/posts', require('./controllers/posts'))

// // SUCCESSFULLY GETTING 'GOOD JOB' RES IN TERMINAL
app.get('/posts', (req, res) => {
  console.log('route to /text hit')
  res.send('Neighbor')
  // request(MS API)
  // set headers
  // save resutls to db
})

// app.use('/posts', require('./check-yoself/config/routes.js'))
// app.get('/posts', (req, res)=>{
//   console.log('server received req', req)
// })

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
      'Ocp-Apim-Subscription-Key': '1d4e14fa9ee745cd8a8202dcbff071db',
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


// app.use(app.router)
// app.use('/likes', require('./routes/likes'))
// app.use('/auth', require('./routes/auth'))
// app.use('/search', require('./routes/search'))
// app.use(require('./routes/error'))

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
