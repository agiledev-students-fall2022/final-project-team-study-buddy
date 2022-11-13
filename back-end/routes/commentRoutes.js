const express = require('express');
const { escapeHtml } = require('markdown-it/lib/common/utils');
let router = express.Router();
router.use(express.json());
//const { router } = require('../app');

const testData = require('../test/testData.json');

// ROUTES

// Add a binding to handle '/'
router.get("/", (req, res) => res.status(400).json({ error: "No data requested." }));

router.get('/:resourceID', (req, res) => {
    const lid = Number.parseInt(req.params.resourceID);
    if ([undefined, null, ""].includes(req.params.resourceID) || lid === 0 || Number.isNaN(lid)) {
        return res.status(400).json({message: 'Invalid resource ID.'});
    }

    if (lid > testData.length) {
        return res.status(404).json({message: 'No resource was found with that ID.'});
    }
    return res.json({comments: testData[lid - 1].comments});
});

router.post("/add", (req, res) => {
    const lid = Number.parseInt(req.body.locationID);
    if ([undefined, null, ""].includes(req.body.locationID) || lid === 0 || Number.isNaN(lid)) {
        return res.status(400).json({message: 'Invalid resource ID.'});
    } else if ([undefined, null, ''].includes(req.body.comment)) {
        return res.status(400).json({message: 'Invalid comment.'});
    }

    if (lid > testData.length) {
        return res.status(404).json({message: 'No resource was found with that ID.'});
    }

    pidInt = Number.parseInt(req.body.parentId);
    pidInt = [undefined, null, ''].includes(req.body.parentId) || lid === 0 || Number.isNaN(lid) ? null : pidInt;

    testData[lid].comments.push({
        id: testData[lid].comments.length + 1,
        body: escapeHtml(req.body.comment),
        username: "Test User",
        userId: "2",
        parentId: pidInt,
        createdAt: Date.now()
    });

    return res.json({ comments: testData[lid].comments });
    // Return the updated new list of comments
});

module.exports = router;