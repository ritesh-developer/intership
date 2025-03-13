const mongoose = require("mongoose");

const claimSchema = new mongoose.Schema({
  ip: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Claim", claimSchema);
