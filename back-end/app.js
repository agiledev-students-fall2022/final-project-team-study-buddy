// import and instantiate express
const express = require('express');
const app = express();

// import and connect to MongoDB Atlas
require('./db');

// results routes
const resultRoutes = require("./routes/resultRoutes");
const resourceRoutes = require("./routes/resourceRoutes");
const commentRoutes = require("./routes/commentRoutes");

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// route for HTTP GET requests to /json-example
app.get("/", (req, res) => res.json({ hello: "world!", server: "working" }));

app.use("/results", resultRoutes);
app.use("/resource", resourceRoutes);
app.use("/comments", commentRoutes);

// export the express app we created to make it available to other modules
module.exports = app;
