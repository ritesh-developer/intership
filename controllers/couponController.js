const Coupon = require("../models/Coupon");
const Claim = require("../models/Claim");

exports.claimCoupon = async (req, res) => {
  try {
    const ip = req.ip;
    const existingClaim = await Claim.findOne({ ip }).sort({ timestamp: -1 });
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);

    if (existingClaim && existingClaim.timestamp > oneHourAgo) {
      return res.status(429).json({ message: "You can claim another coupon in 1 hour." });
    }

    const coupon = await Coupon.findOne({ claimed: false });
    if (!coupon) return res.status(404).json({ message: "No coupons available" });

    coupon.claimed = true;
    await coupon.save();
    await Claim.create({ ip });

    res.json({ message: "Coupon claimed successfully", coupon: coupon.code });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.addCoupon = async (req, res) => {
  try {
    const { code } = req.body;
    if (!code) return res.status(400).json({ message: "Coupon code is required" });

    const newCoupon = new Coupon({ code });
    await newCoupon.save();
    res.json({ message: "Coupon added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
