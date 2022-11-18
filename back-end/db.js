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

//STILL WORKING

const userSchema = new Schema({
    username : {type: String, unique: true, retuired: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    refreshToken: {type: String}

})

const record = new Schema( {
    name: {type: String, unique: true, retuired: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    resource: {
        wifi : {type: Boolean},
        bathroom: {type: Boolean},
        printer: {type: Boolean}
    }
})

comment1.save(function (err, comment) {
    if (err) console.log(err);
    else console.log('fallowing comment was saved:', comment);
});

/*
MODEL REGISTRATION GOES HERE
*/
module.exports = mongoose.model('User'; userSchema);


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
