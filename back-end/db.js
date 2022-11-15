// THIS FILE SHOULD ONLY BE IMPORTED WHEN THE SERVER STARTS.

const mongoose = require('mongoose');

/*
SCHEMAS GO HERE

Example:
const UserSchema = new Schema({
    username: {type: String, unique: true, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
});
*/

/*
MODEL REGISTRATION GOES HERE

Example:
mongoose.model('User', UserSchema);
*/

// connect to db
const atlasURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.CLUSTER_URI}/${process.env.DB_NAME}`;
mongoose.connect(`${atlasURL}?retryWrites=true&w=majority`)
    .then(() => console.log('Connected to MongoDB Atlas.'))
    .catch(err => console.error(err));

/*
NOTE: To use database collections, reference the above modeled schemas in any file.

Example:
const mongoose = require('mongoose');
const User = mongoose.model('User');
User.findOne(...);
*/
