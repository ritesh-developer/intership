const express = require("express");
const { claimCoupon, addCoupon } = require("../controllers/couponController");
const router = express.Router();

router.post("/claim", claimCoupon);
router.post("/add", addCoupon);

module.exports = router;
