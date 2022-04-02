import express from "express";
let datas = [
  {
    id: 1,
    title: "title",
    videoUrl: "videoUrl",
    description: "description",
    content: "content",
  },
  {
    id: 2,
    title: "title Hello",
    videoUrl: "videoUrl Hello",
    description: "description Hello",
    content: "content Hello",
  },
];

export function getAllData() {
  return datas;
}

export function createData(title, videoUrl, description, content) {
  const data = {
    id: Date.now().toString(),
    title,
    videoUrl,
    description,
    content,
  };
  datas = [...datas, data];
}
