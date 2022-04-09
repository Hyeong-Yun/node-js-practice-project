import express from "express";
let datas = [
  {
    id: 1,
    title: "title",
    videoUrl: "videoUrl",
    description: "description",
    content: "content",
    url: "https://movie-phinf.pstatic.net/20220406_115/1649221973410H0er9_JPEG/movie_image.jpg",
  },
  {
    id: 2,
    title: "title Hello",
    videoUrl: "videoUrl Hello",
    description: "description Hello",
    content: "content Hello",
    url: "https://movie-phinf.pstatic.net/20220405_94/1649134635502Ko6SS_JPEG/movie_image.jpg?type=m203_290_2",
  },
  {
    id: 3,
    title: "title Hello",
    videoUrl: "videoUrl Hello",
    description: "description Hello",
    content: "content Hello",
    url: "https://movie-phinf.pstatic.net/20220318_175/1647566595241BB9jH_JPEG/movie_image.jpg?type=m203_290_2",
  },
  {
    id: 4,
    title: "title Hello",
    videoUrl: "videoUrl Hello",
    description: "description Hello",
    content: "content Hello",
    url: "https://movie-phinf.pstatic.net/20220330_232/1648624003510dD2GF_JPEG/movie_image.jpg?type=m203_290_2",
  },
  {
    id: 5,
    title: "title Hello",
    videoUrl: "videoUrl Hello",
    description: "description Hello",
    content: "content Hello",
    url: "https://movie-phinf.pstatic.net/20220406_115/1649221973410H0er9_JPEG/movie_image.jpg",
  },
  {
    id: 6,
    title: "title Hello",
    videoUrl: "videoUrl Hello",
    description: "description Hello",
    content: "content Hello",
    url: "https://movie-phinf.pstatic.net/20220406_115/1649221973410H0er9_JPEG/movie_image.jpg",
  },
  {
    id: 7,
    title: "title Hello",
    videoUrl: "videoUrl Hello",
    description: "description Hello",
    content: "content Hello",
    url: "https://movie-phinf.pstatic.net/20220406_115/1649221973410H0er9_JPEG/movie_image.jpg",
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
