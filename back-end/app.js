// import and instantiate express
const express = require('express')
const app = express()
const ResourceModel = require('./db/schema')

// import and connect to MongoDB Atlas
require('./db/db')

app.use(express.json())

// results routes
const resultRoutes = require('./routes/resultRoutes')
const resourceRoutes = require('./routes/resourceRoutes')
const commentRoutes = require('./routes/commentRoutes')

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

// route for HTTP GET requests to /json-example
app.get('/', (req, res) => res.json({ hello: 'world!', server: 'working' }))

app.get('/getTestData', (req, res) => {
  ResourceModel.find({}, function (err, data) {
    if (err) {
      console.log(err)
      res.status(400).json({ message: 'Fetch Failed' })
    } else {
      res.send(data)
    }
  })
})

app.get('/removeData', (req, res) => {
  ResourceModel.remove({})
    .then(() => {
      res.send('Data removed')
    })
    .catch((err) => {
      console.log(err)
    })
})

app.use('/results', resultRoutes)
app.use('/resource', resourceRoutes)
app.use('/comments', commentRoutes)

// export the express app we created to make it available to other modules
module.exports = app
