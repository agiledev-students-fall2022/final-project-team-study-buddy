const mongoose = require("mongoose");

const ResourceModelSchema = new mongoose.Schema({
  _id: { type: Number },
  name: { type: String, unique: true, required: true },
  zip: { type: Number },
  address: { type: String, required: true },
  description: { type: String, required: true },
  website: { type: String, required: true },
  resource: {
    wifi: { type: Boolean, required: true },
    bathroom: { type: Boolean, required: true },
    printer: { type: Boolean, required: true },
  },
  comments: [
    {
      name: { type: String, required: true },
      comment: { type: String, required: true },
    },
  ],
  ratings: {
    rating: { type: Number, required: true },
  },
});

const ResourceModel = mongoose.model("Resources", ResourceModelSchema);

module.exports = ResourceModel;
