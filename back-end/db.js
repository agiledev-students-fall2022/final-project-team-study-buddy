// THIS FILE SHOULD ONLY BE IMPORTED WHEN THE SERVER STARTS.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
SCHEMAS GO HERE

Example:
const UserSchema = new Schema({
    username: {type: String, unique: true, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
});
*/

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

const Space = mongoose.model('Space'; space)
module.exports = Space

// connect to db
const atlasURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.CLUSTER_URI}/${process.env.DB_NAME}`;
mongoose.connect(`${atlasURL}?retryWrites=true&w=majority`)
    .then(() => console.log('Connected to MongoDB Atlas.'))
    .catch(err => console.error(err));

/*
NOTE: To use database collections, reference the above modeled schemas in any file.

Example:
const mongoose = require('brnachmongoose');
const User = mongoose.model('User');
User.findOne(...);
*/
