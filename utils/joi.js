const joi = require("joi");

const validationSchema = joi.object({
    email: joi.string().email().required(),
    password: joi
      .string()
      .pattern(
        new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^a-zA-Z0-9]).{3,30}$")
      )
      .message(
        "The password contain atleast three characters,one uppercase letter, one lowercase letter, one digit, and one special character."
      )
      .required(),
  });

module.exports={validationSchema}
  