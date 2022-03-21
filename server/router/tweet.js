import express from "express";
import "express-async-errors";

const tweets = [
  {
    id: "1",
    text: "드림코더분들 화이팅",
    createdAt: Date.now().toString(),
    name: "bob",
    username: "Bob",
  },
];

const router = express.Router();

export default router;
