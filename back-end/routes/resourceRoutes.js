// Sample URL: http://localhost:3001/resource?id=2&zipcode=11201

var express = require("express"),
  router = express.Router();

const testData = require("../tests/testData.json");

router.get("/:resourceID", (req, res) => {
  let rInt = Number.parseInt(req.params.resourceID);
  if (
    [undefined, null, ""].includes(req.params.resourceID) ||
    rInt === 0 ||
    Number.isNaN(rInt)
  ) {
    return res
      .status(400)
      .json({ message: "A resource ID must be specified." });
  }

  // Get results from database with correct id
  result = testData[rInt - 1];
  if (result === undefined) {
    return res
      .status(404)
      .json({ message: "Could not find a resource with that ID." });
  }

  // Add map url
  result.mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}&q=${result.address}`;

  return res.json(result);
});

router.post("/:resourceID/vote", (req, res) => {
  console.log(req.body);
  const id = req.params.resourceID;
  const direction = req.body.direction;
  const type = req.body.type;

  // data validation
  if (!['up', 'down'].includes(direction.toLowerCase())) {
    return res.status(400).json({message: 'Invalid vote direction.'});
  } else if (!['wifi', 'printer', 'study'].includes(type.toLowerCase())) {
    return res.status(400).json({message: 'Invalid vote type.'});
  }

  // INFLUENCE RATING HERE
  // ADD DATA VALIDATION FOR IF RESOURCE NOT FOUND

  return res.json({success: true});
});

module.exports = router;
