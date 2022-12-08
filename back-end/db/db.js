// THIS FILE SHOULD ONLY BE IMPORTED WHEN THE SERVER STARTS.

const mongoose = require('mongoose')
const InsertTestValues = require('./insert-test-values')

const dotenv = require('dotenv')
dotenv.config({ path: '../.env' })

InsertTestValues()

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
*/

const urlFin = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.CLUSTER_URI}/${process.env.DB_NAME}?retryWrites=true&w=majority`
console.log(urlFin)
mongoose
  .connect(urlFin)
  .then(() => console.log('Connected to ', urlFin))
  .catch((err) => console.error(err))

/*
NOTE: To use database collections, reference the above modeled schemas in any file.

Example:
const mongoose = require('mongoose');
const User = mongoose.model('User');
User.findOne(...);
*/
