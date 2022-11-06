const express = require('express');
router = express.Router();

const isValidZIP = zip => {
    const zipInt = Number.parseInt(zip);
    return !(zip.length !== 5 || zipInt === 0 || Number.isNaN(zipInt));
}

//Add testResults object to here and just hardcode it... this is stuff to be updated in
//sprint three

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
  



// Add a binding to handle '/'
router.get("/", (req, res) => res.status(404).json({ error: "No data requested." }));

// get list of results pertaining to ZIP code
router.get("/:zip", (req, res) => {
    // validate zip code
    if (!isValidZIP(req.params.zip)) {
        return res.status(404).json({ error: "Invalid ZIP requested." });
    }
    const zip = req.params.zip;
    const {wifi, printer, study} = req.params; // TO-DO: make sure this is correct
    const results = testResults; // sprint 3: query database to get stored places of matching criteria
    return res.json(results); // to-do: return data in usable format
});

router.get("/:zip/:placeId", (req, res) => {
    // validate zip code
    if (!isValidZIP(req.params.zip)) {
        return res.status(404).json({ error: "Invalid ZIP requested." });
    }
    const zip = req.params.zip;
    const placeId = req.params.placeId; // no validation needed yet, unless we want this to be a name instead
    const place = {}; // sprint 3: query database to get the requested place
    return res.json({ place: place });
});

module.exports = router;
