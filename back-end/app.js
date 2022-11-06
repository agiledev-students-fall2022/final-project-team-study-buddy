// import and instantiate express
const express = require('express');
const app = express();

// results routes
var resultRoutes = require("./routes/resultRoutes");

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// route for HTTP GET requests to /json-example
app.get("/", (req, res) => {
    // send the response as JSON text to the client

    /*
  const testResults = [
      {
        name: "El Barrista Cafe",
        address: "1121 ur mom blvd, New York, NY 10029",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore dolore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore dolore",
        printer: 1,
        wifi: 0,
        study: 1,
      },
      {
        name: "El Barrista Cafe",
        address: "1121 ur mom blvd, New York, NY 10029",
        description: "Lorem ipsum dolor ",
        printer: 0,
        wifi: 1,
        study: 0,
      },
      {
        name: "El Barrista Cafe",
        address: "1121 ur mom blvd, New York, NY 10029",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore dolore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore dolore",
        printer: 1,
        wifi: 1,
        study: 1,
      },
      {
        name: "El Barrista Cafe",
        address: "1121 ur mom blvd, New York, NY 10029",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore dolore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore dolore",
        printer: 1,
        wifi: 0,
        study: 1,
      },
      {
        name: "El Barrista Cafe",
        address: "1121 ur mom blvd, New York, NY 10029",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore dolore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore dolore",
        printer: 1,
        wifi: 1,
        study: 1,
      },
    ];
    */
  
    res.json({ message: "message" });
});

app.use("/results", resultRoutes);

// export the express app we created to make it available to other modules
module.exports = app;
