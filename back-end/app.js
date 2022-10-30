// import and instantiate express
const express = require("express"); // CommonJS import style!
const app = express(); // instantiate an Express object
// we will put some server logic here later...
// export the express app we created to make it available to other modules

var resultRoutes = require("./routes/resultRoutes");
var resourceRoutes = require("./routes/resourceRoutes");

// route for HTTP GET requests to /json-example
app.get("/", (req, res) => {
  // send the response as JSON text to the client
  res.json({ message: "ROOT SERVER" });
});

app.use("/results", resultRoutes);
app.use("/resource", resourceRoutes);

module.exports = app;
