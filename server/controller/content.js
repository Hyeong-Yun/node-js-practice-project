import * as contentRepository from "../data/content.js";

export async function createContent(req, res, next) {
  const { title, videoUrl, description, content } = req.body;
  contentRepository.createData(title, videoUrl, description, content);
  res.status(201).json({ title, videoUrl, description, content });
}

export async function getAll(req, res, next) {
  const data = contentRepository.getAllData();
  res.status(200).json(data);
}
