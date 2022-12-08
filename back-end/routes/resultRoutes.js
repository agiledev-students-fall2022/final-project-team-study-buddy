const express = require('express');
router = express.Router();

const testData = require('../test/testData.json');

const isValidZIP = zip => {
    const zipInt = Number.parseInt(zip);
    return !(zip.length !== 5 || zipInt === 0 || Number.isNaN(zipInt));
}

// Add a binding to handle '/'
router.get("/", (req, res) => res.status(400).json({ error: "No data requested." }));

// get list of results pertaining to ZIP code
router.get("/:zip", (req, res) => {
    // validate zip code
    if (!isValidZIP(req.params.zip)) {
        return res.status(400).json({ error: "Invalid ZIP requested." });
    }
    const zip = parseInt(req.params.zip);
    const {wifi, printer, study} = req.params;
    let results = [];
    testData.forEach(place => { 
        if (place.zip === zip) {
            results.push(place);
        }
    });

    if (results.length > 0) {
        return res.json({ results: results }); // return data in usable format
    } else {
        return res.status(404).json({ results: results });
    }
});

module.exports = router;
