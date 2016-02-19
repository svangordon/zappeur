// grab the things we need
var mongoose = require('mongoose');
require('mongoose-moment')(mongoose);
var Schema = mongoose.Schema;

// create a schema
var emissionSchema = new Schema({
  title: String,
  network: ObjectId,
  start : 'Moment',
  end : 'Moment',
  desc : String
});

// the schema is useless so far
// we need to create a model using it
var Emission = mongoose.model('Emission', emissionSchema);

// make this available to our users in our Node applications
module.exports = Emission;