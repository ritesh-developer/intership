const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
  code: String,
  claimed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Coupon", couponSchema);
