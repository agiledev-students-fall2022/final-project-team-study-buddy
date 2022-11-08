// Sample URL: http://localhost:3001/resource?id=2&zipcode=11201

var express = require("express"),
router = express.Router();

const isValidZIP = zip => {
  const zipInt = Number.parseInt(zip);
  return !(zip.length !== 5 || zipInt === 0 || Number.isNaN(zipInt));
}

router.get("/", (req, res) => {
  let resourceID = req.query.id;
  let zipCode = req.query.zipcode;

  if (!isValidZIP(zipCode) || [undefined, null, ""].includes(resourceID)) {
    return res.json({ message: "Some data is missing. A ZIP code and resource ID must be specified." });
  }

  // Get results from database with correct id
  result = tempdb[resourceID];
  if (result === undefined) {
    return res.json({ message: "Invalid ID provided" });
  }

  // Add map url
  result.mapUrl = `https://www.google.com/maps/dir/${zipCode}/${result.address}`;

  return res.json(result);
});

module.exports = router;

let tempdb = {
  1: {
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
  },
  2: {
    id: 2,
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
  },
};
