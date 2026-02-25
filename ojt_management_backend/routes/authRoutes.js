const express = require("express");
const router = express.Router();
const {
  registerStudent,
  loginStudent,
} = require("../controllers/authController");

router.post("/signup", registerStudent);
router.post("/login", loginStudent);

module.exports = router;