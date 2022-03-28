import express from "express";
import "express-async-errors";

let tweets = [
  {
    id: "1",
    text: "드림코더분들 화이팅",
    createdAt: Date.now().toString(),
    name: "bob",
    username: "Bob",
  },
];

const router = express.Router();

//get a// or get by username
router.get("/", (req, res, next) => {
  const username = req.query.username;
  const data = username
    ? tweets.filter((tweet) => tweet.username === username)
    : tweets;

  res.status(200).json(data);
});

//get by id
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const data = tweets.find((tweet) => tweet.id === id);

  res.status(200).json(data);
});

//create tweet
router.post("/", (req, res, next) => {
  const { text, name, username } = req.body;
  const data = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };

  tweets = [data, ...tweets];
  res.status(201).json(data);
});

// Update tweets
router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const data = tweets.find((tweet) => tweet.id === id);
  if (data) {
    data.text = text;
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: `Tweet id${id} not found` });
  }
});

//delete tweet
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  tweets = tweets.filter((tweet) => tweet.id !== id);
  res.statusCode(200);
});

export default router;
