import express from "express";
import * as contentController from "../controller/content.js";
import { body } from "express-validator";
import { validate } from "../middleware/validator.js";

const router = express.Router();
const validation = [
  body("title")
    .trim()
    .isLength({ min: 4 })
    .withMessage("must be at least 4 chars"),
  body("description")
    .trim()
    .isLength({ min: 5 })
    .withMessage("must be at least 5 chars"),
  validate,
];

router.get("/", contentController.getAll);
router.post("/", validation, contentController.createContent);

export default router;
