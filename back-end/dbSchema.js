const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server')
const Schema = mongoose.Schema;

const space = new Schema( {
    _id: {type: int},
    name: {type: String, unique: true, retuired: true},
    address: {type: String, required: true},
    description: {type: String},
    resource: {
        wifi : {type: Boolean},
        bathroom: {type: Boolean},
        printer: {type: Boolean}
    },
    comments: [{
        name: {type: String}
        comment: {type: String}
    }],
    ratings: {
        rating: {type: int}
    }
})


/*
MODEL REGISTRATION GOES HERE
*/

module.exports = Space = mongoose.model('Space'; space)