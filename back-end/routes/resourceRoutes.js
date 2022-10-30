// URL: http://localhost:3001/resource

var express = require("express"),
  router = express.Router();

router
  // Add a binding to handle '/'
  .get("/getResource", function (req, res) {
    let zipCode = curAddress;
    // let zipCode = res.zipCode

    // Get results from database with correct id
    result = tempdb;

    // Add map url
    result.mapUrl = `https://www.google.com/maps/dir/${zipCode}/${result.address}`;

    return res.json(result);
  });

module.exports = router;

let curAddress = "11201";

let tempdb = {
  id: 1,
  name: "Astoria Library",
  address: "14-01 Astoria Boulevard  Astoria, NY 11102",
  printer: 1,
  wifi: 0,
  study: 1,
  description:
    "Incididunt et cupidatat consectetur sunt ex irure aliqua. Eiusmod ea anim ea minim ut et sint dolor enim laboris tempor sit laborum exercitation. Magna et proident irure Lorem occaecat laborum voluptate ullamco aliquip.",
  rating: 4.5,
  comments: [
    "PDeserunt sint dolore laborum ipsum amet irure ut fugiat officia adipisicing Lorem anim labore ut.",
    "Sint magna nisi et aliquip ex id sunt enim.",
    "Tempor laboris esse sunt elit id ad sunt pariatur.",
  ],
};
