const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  id: String,
  name: String,
  email: String,
  role: Date
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;