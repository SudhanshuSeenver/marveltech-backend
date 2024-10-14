const express = require("express");
const { sendEmail } = require("../controllers/emailController");
const validateEmail = require("../middleware/validateEmail");

const router = express.Router();

router.post("/", validateEmail, sendEmail);

module.exports = router;
