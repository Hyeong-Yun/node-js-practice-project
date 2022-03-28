import express from "express";

const router = express.Router();

router.post("/", (req, res, next) => {
  const { title, videoUrl, description, content } = req.body;
  console.log(title, videoUrl, description, content);
  res.status(201).json({ title, videoUrl, description, content });
});

export default router;
