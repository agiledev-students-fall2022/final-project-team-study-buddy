var express = require("express"),
  router = express.Router();

router
  // Add a binding to handle '/'
  .get("/", function (req, res) {
    return res.json({ message: "results root" });
  })

  // Import my automated routes into the path '/tests/automated'
  // This works because we're already within the '/tests' route
  // so we're simply appending more routes to the '/tests' endpoint
  .use("/test", () => {
    message: "message for /routes/test";
  });

module.exports = router;
