// Sample URL: http://localhost:3001/resource?id=2&zipcode=11201

var express = require("express"),
router = express.Router();

const testData = require('../test/testData.json');

// Add a binding to handle '/'
router.get("/", (req, res) => res.status(400).json({ error: "No data requested." }));

router.get("/:resourceID", (req, res) => {
  let rInt = Number.parseInt(req.params.resourceID);
  if ([undefined, null, ""].includes(req.params.resourceID) || rInt === 0 || Number.isNaN(rInt)) {
    return res.status(400).json({ message: "A resource ID must be specified." });
  }

  // Get results from database with correct id
  result = testData[rInt - 1];
  if (result === undefined) {
    return res.status(404).json({ message: "Could not find a resource with that ID." });
  }

  // Add map url
  result.mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}&q=${result.address}`;

  return res.json(result);
});

module.exports = router;