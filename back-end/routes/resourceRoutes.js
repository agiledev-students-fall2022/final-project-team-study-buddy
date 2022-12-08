var express = require("express"),
  router = express.Router();

const testData = require("../test/testData.json");
const ResourceModel = require("../db/schema");

const mongoose = require("mongoose");

const { body, validationResult } = require("express-validator");

// Add a binding to handle '/'
router.get("/", (req, res) =>
  res.status(400).json({ error: "No data requested." })
);

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
  const getData = async () => {
    let result = await ResourceModel.findOne({ _id: rInt }).lean();
    if (result === undefined) {
      return res
        .status(404)
        .json({ message: "Could not find a resource with that ID." });
    }

    // Add map url
    result.mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}&q=${result.address}`;
    return res.json(result);
  };

  return getData();
});

let printerUp = false;
let printerDown = false;
let wifiUp = false;
let wifiDown = false;
let studyUp = false;
let studyDown = false;
let accessibleUp = false;
let accessibleDown = false;

router.post(
  "/:resourceID/vote",
  body("type").isIn(["wifi", "printer", "study", "accessible"]),
  body("direction").isIn(["up", "down"]),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const id = req.params.resourceID;
    const direction = req.body.direction;
    const type = req.body.type;

    console.log("REQ: ", req.body);

    // data validation
    if (!["up", "down"].includes(direction.toLowerCase())) {
      return res.status(400).json({ message: "Invalid vote direction." });
    } else if (
      !["wifi", "printer", "study", "accessible"].includes(type.toLowerCase())
    ) {
      return res.status(400).json({ message: "Invalid vote type." });
    }

    const Resource = ResourceModel;
    let result = await Resource.find({ _id: id });
    result = result[0];

    if (type == "printer") {
      if (direction == "down") {
        if (printerDown === false){
          result.ratings.printer = result.ratings.printer - 1;
          printerDown = true;
          printerUp = false;
        }
        // result.ratings.printer = result.ratings.printer - 1;
      } else {
        if (printerUp === false){
          result.ratings.printer = result.ratings.printer + 1;
          printerDown = false;
          printerUp = true;
        }
        // result.ratings.printer = result.ratings.printer + 1;
      }
    } else if (type == "wifi") {
      if (direction == "down") {
        if (wifiDown === false){
          result.ratings.network = result.ratings.network - 1;
          wifiDown = true;
          wifiUp = false;
        }
      } else {
        if (wifiUp === false){
          result.ratings.network = result.ratings.network + 1;
          wifiDown = false;
          wifiUp = true;
        }
      }
      // if (direction == "down") {
      //   result.ratings.network = result.ratings.network - 1;
      // } else {
      //   result.ratings.network = result.ratings.network + 1;
      // }
    } else if (type == "study") {
      if (direction == "down") {
        if (studyDown === false){
          result.ratings.quiet = result.ratings.quiet - 1;
          studyDown = true;
          studyUp = false;
        }
      } else {
        if (studyUp === false){
          result.ratings.quiet = result.ratings.quiet + 1;
          studyDown = false;
          studyUp = true;
        }
      }
      // if (direction == "down") {
      //   result.ratings.quiet = result.ratings.quiet - 1;
      // } else {
      //   result.ratings.quiet = result.ratings.quiet + 1;
      // }
    } else if (type == "accessible") {
      if (direction == "down") {
        if (accessibleDown === false){
          result.ratings.accessibility = result.ratings.accessibility - 1;
          accessibleDown = true;
          accessibleUp = false;
        }
      } else {
        if (accessibleUp === false){
          result.ratings.accessibility = result.ratings.accessibility + 1;
          accessibleDown = false;
          accessibleUp = true;
        }
      }
      // if (direction == "down") {
      //   result.ratings.accessibility = result.ratings.accessibility - 1;
      // } else {
      //   result.ratings.accessibility = result.ratings.accessibility + 1;
      // }
    }

    await result.save();

    return res.json(result);
  }
);

module.exports = router;
