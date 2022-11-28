// Sample URL: http://localhost:3001/resource?id=2&zipcode=11201

var express = require("express"),
  router = express.Router();

const testData = require('../test/testData.json');
const ResourceModel = require("../db/schema");
const fs = require('fs');

const mongoose = require('mongoose');
const ResourceModel = require("../db/schema");

// Add a binding to handle '/'
router.get("/", (req, res) => res.status(400).json({ error: "No data requested." }));

router.get("/:resourceID", async (req, res) => {
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
  const getData = async() => {
    let result = await ResourceModel.findOne({ _id: rInt }).lean();
    if (result === undefined) {
      return res
        .status(404)
        .json({ message: "Could not find a resource with that ID." });
    }  
  
    // Add map url
    result.mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}&q=${result.address}`;
    return res.json(result)
  };
  
  return getData();
});

router.post("/:resourceID/vote", async (req, res) => {
  // console.log(req.body);
  const id = req.params.resourceID;
  const direction = req.body.direction;
  const type = req.body.type;

  // data validation
  if (!['up', 'down'].includes(direction.toLowerCase())) {
    return res.status(400).json({message: 'Invalid vote direction.'});
  } else if (!['wifi', 'printer', 'study', 'accessible'].includes(type.toLowerCase())) {
    return res.status(400).json({message: 'Invalid vote type.'});
  }

  const Resource = ResourceModel;
  let result = await Resource.find({_id: id});
  result = result[0];
  console.log("found: ", result.ratings);

  switch(type) {
    case "printer":
      if(direction == 'down'){
        result.ratings.printer = result.ratings.printer - 1;
      } else {
        result.ratings.printer = result.ratings.printer + 1;
      }
    case "wifi":
      if(direction == 'down'){
        result.ratings.network = result.ratings.network - 1;
      } else {
        result.ratings.network = result.ratings.network + 1;
      }
    case "study":
      if(direction == 'down'){
        result.ratings.quiet = result.ratings.quiet - 1;
      } else {
        result.ratings.quiet = result.ratings.quiet + 1;
      }
    case "accessible":
      if(direction == 'down'){
        result.ratings.accessibility = result.ratings.accessibility - 1;
      } else {
        result.ratings.accessibility = result.ratings.accessibility + 1;
      }
  }

  await result.save();

  return res.json(result);
});

module.exports = router;
 