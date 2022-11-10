// import and instantiate express
const express = require('express');
const app = express();

// results routes
var resultRoutes = require("./routes/resultRoutes");
var resourceRoutes = require("./routes/resourceRoutes");
var commentRoutes = require("./routes/commentRoutes");

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// route for HTTP GET requests to /json-example
app.get("/", (req, res) => {
    // send the response as JSON text to the client

    res.json({ message: "message" });
});

app.use("/results", resultRoutes);
app.use("/resource", resourceRoutes);
app.use("/comments", commentRoutes);

// export the express app we created to make it available to other modules
module.exports = app;
