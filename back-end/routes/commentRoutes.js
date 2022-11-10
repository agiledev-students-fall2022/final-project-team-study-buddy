const express = require('express');
router = express.Router();

const devResults = [ // TODO: replace with database functionality in sprint 3
    {
        id: "1",
        body: "First comment",
        username: "Jack",
        userId: "1",
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
        id: "2",
        body: "Second comment",
        username: "John",
        userId: "2",
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
        id: "3",
        body: "First comment first child",
        username: "John",
        userId: "2",
        parentId: "1",
        createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
        id: "4",
        body: "Second comment second child",
        username: "John",
        userId: "2",
        parentId: "2",
        createdAt: "2021-08-16T23:00:33.010+02:00",
    },
];

//ROUTES
router.get('/:locationid', (req, res) => {
    return res.json({ results: devResults });
});

// Add a binding to handle '/'
router.get("/", (req, res) => res.status(404).json({ error: "No data requested." }));

router.post("/add", (req, res) => {

    let results = [];
    devResults.forEach(comment => {
        results.push(comment);
    });
    results.push({
        locationid: "1",
        id: "2",
        body: "lorem ipsun dolor",
        username: "john_doe",
    });

    return res.json({ results: results });
    // Return the updated new list of comments
});

module.exports = router;