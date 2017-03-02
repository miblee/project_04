require('dotenv').config();
const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const session = require('express-session');
const morgan = require('morgan');
const path = require('path');
const request = require('request');
const app = express();

// CONFIG
// require('./db/config')
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(favicon(path.join(__dirname, 'public/favicon.ico')))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(session({secret: 'keyboard cat', resave: false, saveUninitialized: true}))

// ROUTES
// app.use('/', require('./src/index'))
// app.use('/posts', require('./controllers/posts'))

app.get('/text', (req, res) => {
  console.log('route hit')
  res.json({message: 'good job'})
  // request(MS API)
  // set headers
  // save resutls to db
})


app.post('/api', (req, res)=>{
  res.json({response:`this was your request ${req.body}. That is my response`})
})

// TRIED TO BUILD OUT A REQUEST FOR MS API CALL

// app.post('/api', (req, res)=>{
//   const options = {
//     url: 'https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment',
//     headers: {
//       'Ocp-Apim-Subscription-Key': '1d4e14fa9ee745cd8a8202dcbff071db',
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     },
//     body: req.body
//   };

  // const ms_response(error, response, body) {
  //   if (!error && response.statusCode == 200) {
  //     var info = JSON.parse(body);
  //     console.log(info.stargazers_count + " Stars");
  //     console.log(info.forks_count + " Forks");
  //   }
  //   }
  // request(options, ms_response);
  // }




// app.use(app.router)
// app.use('/likes', require('./routes/likes'))
// app.use('/auth', require('./routes/auth'))
// app.use('/search', require('./routes/search'))
// app.use(require('./routes/error'))

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
