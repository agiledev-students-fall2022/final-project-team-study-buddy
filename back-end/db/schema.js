const mongoose = require("mongoose");

const ResourceModelSchema = new mongoose.Schema({
  _id: { type: Number },
  name: { type: String, unique: true, required: true },
  zip: { type: Number },
  address: { type: String, required: true },
  description: { type: String, required: true },
  website: { type: String, required: true },
  resource: {
    wifi: { type: Number, required: true },
    bathroom: { type: Number, required: true },
    printer: { type: Number, required: true },
  },
  comments: [
    {
      _id: { type: Number, required: true },
      username: { type: String, required: true },
      body: { type: String, required: true },
      parentId: { type: Number, null: true },
      createdAt: { type: Date, required: true },
    },
  ],
  ratings: {
    printer: { type: Number, required: true },
    network: { type: Number, required: true },
    quiet: { type: Number, required: true },
    accessibility: { type: Number, required: true },
  },
});

const ResourceModel = mongoose.model("Resources", ResourceModelSchema);

module.exports = ResourceModel;
