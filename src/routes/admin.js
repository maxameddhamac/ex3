const express = require("express");
const { protect, authorize } = require("../middleware/auth");

const router = express.Router();

router.get("/dashboard", protect, authorize("admin"), (req, res) => {
  res.json({ message: `Welcome to the admin dashboard, ${req.user.name}!` });
});

module.exports = router;
