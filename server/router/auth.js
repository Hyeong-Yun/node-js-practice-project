//username, password, name, email;
import express from "express";
import {} from "express-async-errors";
import { body } from "express-validator";
import { validate } from "../middleware/validator.js";
import * as authController from "../controller/auth.js";
import { isAuth } from "../middleware/auth.js";

const router = express.Router();

const validateCredential = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("username should be at least 5 chararcters"),
  body("username")
    .trim()
    .isLength({ min: 5 })
    .withMessage("username should be at least 5 chararcters"),
  validate,
];

const validateSignup = [
  ...validateCredential,
  body("name").notEmpty().withMessage("name is missing"),
  body("email").isEmail().normalizeEmail().withMessage("invalid email"),
  validate,
];

router.post("/signup", validateSignup, authController.signup);
router.post("/login", validateCredential, authController.login);
router.post("/me", isAuth, authController.me);

export default router;
