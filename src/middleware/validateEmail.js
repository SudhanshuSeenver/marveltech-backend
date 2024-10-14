const { body, validationResult } = require("express-validator");

const validateEmail = [
  body("to").isEmail().withMessage("Invalid email address"),
  body("subject").notEmpty().withMessage("Subject cannot be empty"),
  body("text").notEmpty().withMessage("Text cannot be empty"),
  body("html")
    .optional()
    .isString()
    .withMessage("HTML content must be a string"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateEmail;
