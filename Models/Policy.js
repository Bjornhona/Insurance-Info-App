const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const policySchema = new Schema({
  id: String,
  amountInsured: Number,
  email: String,
  inceptionDate: Date,
  installmentPayment: Boolean,
  clientId: String
});

const Policy = mongoose.model('Policy', policySchema);

module.exports = Policy;