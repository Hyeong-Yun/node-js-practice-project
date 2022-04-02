import express from "express";
import * as contentController from "../controller/content.js";

const router = express.Router();

router.get("/", contentController.getAll);
router.post("/", contentController.createContent);

export default router;
