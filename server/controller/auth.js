import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {} from "express-async-errors";
import * as userRepository from "../data/auth.js";

const jwtSecretKey = "td@*IQ*SzBjoJe$X8S!vMCLpxLkxmceI";
const jwtExpiresInDays = "3d";
const bcryptSaltRounds = 12;

function createJwtToken(id) {
  return jwt.sign({ id }, jwtSecretKey, { expiresIn: jwtExpiresInDays });
}

export async function signup(req, res) {
  const { username, password, name, email } = req.body;
  const found = await userRepository.findByusername(username);
  if (found) {
    return res.status(409).json({ message: `${username} already exists` });
  }
  const hashed = await bcrypt.hash(password, bcryptSaltRounds);
  const userID = await userRepository.createUser({
    username,
    password: hashed,
    name,
    email,
  });

  const token = createJwtToken(userID);
  res.status(201).json({ token, username });
}

export async function login(req, res) {
  const { username, password } = req.body;
  const user = await userRepository.findByusername(username);
  if (!user) {
    return res.status(401).json({ message: "Invalid user or password" });
  }
  const isValidPassoword = await bcrypt.compare(password, user.password);
  if (!isValidPassoword) {
    return res.status(401).json({ message: "Invalid user or password" });
  }

  const token = createJwtToken(user.id);
  res.status(200).json({ token, username });
}

export async function me(req, res, next) {
  const user = await userRepository.findById(req.userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json({ token: req.token, username: user.username });
}
