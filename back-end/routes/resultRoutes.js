const express = require('express');
router = express.Router();

const devResults = [ // TODO: replace with database functionality in sprint 3
    {
        name: "Elmer Holmes Bobst Library",
        address: "70 Washington Square S, New York, NY 10012",
        zip: 10012,
        description: "The Elmer Holmes Bobst Library, often referred to as simply Bobst Library or Bobst, is the main library at New York University in Manhattan, New York City.",
        printer: 1,
        wifi: 1,
        study: 1,
    },
    {
        name: "El Barrista Cafe",
        address: "2154 3rd Ave, New York, NY 10035",
        zip: 10035,
        description: "A cafe in East Harlem offering free Wi-Fi.",
        printer: 0,
        wifi: 1,
        study: 0,
    },
    {
        name: "Kimmel Center for University Life",
        address: "60 Washington Square S, New York, NY 10012",
        zip: 10012,
        description: "Located at the heart of the NYU campus, the Kimmel Center provides space and resources for students, faculty, staff, departments, alumni, and community organizations. Visitors have access to NYU Dining, Peet’s Coffee, the adjacent Global Center for Academic & Spiritual Life, and a breathtaking view of Washington Square Park.",
        printer: 1,
        wifi: 1,
        study: 1,
    },
    {
        name: "My Quiet Cafe",
        address: "2152 3rd Ave, New York, NY 10035",
        zip: 10035,
        description: "Lorem ipsum yada yada... this place has Wi-Fi and a quiet study space.",
        printer: 0,
        wifi: 1,
        study: 1,
    }
];
  

const isValidZIP = zip => {
    const zipInt = Number.parseInt(zip);
    return !(zip.length !== 5 || zipInt === 0 || Number.isNaN(zipInt));
}

// Add a binding to handle '/'
router.get("/", (req, res) => res.status(404).json({ error: "No data requested." }));

// get list of results pertaining to ZIP code
router.get("/:zip", (req, res) => {
    // validate zip code
    if (!isValidZIP(req.params.zip)) {
        return res.status(404).json({ error: "Invalid ZIP requested." });
    }
    const zip = parseInt(req.params.zip);
    const {wifi, printer, study} = req.params; // TO-DO: make sure this is correct
    let results = [];
    devResults.forEach(place => { // sprint 3: query database to get stored places of matching criteria
        if (place.zip === zip) {
            results.push(place);
        }
    });

    return res.json({ results: results }); // to-do: return data in usable format
});

// overlapping with resourceRoutes
/*router.get("/:zip/:placeId", (req, res) => {
    // validate zip code
    if (!isValidZIP(req.params.zip)) {
        return res.status(404).json({ error: "Invalid ZIP requested." });
    }
    const zip = req.params.zip;
    const placeId = req.params.placeId; // no validation needed yet, unless we want this to be a name instead
    const place = {}; // sprint 3: query database to get the requested place
    return res.json({ place: place });
});*/

module.exports = router;
