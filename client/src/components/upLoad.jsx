import React, { useState } from "react";
import Header from "./anotherHeader";

const UpLoad = ({ uploadService }) => {
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = (e) => {
    console.log("in");
    e.preventDefault();
    uploadService
      .postData(title, videoUrl, description, content)
      .then((result) => {
        console.log(result);
      });
  };

  const onTitle = (e) => setTitle(e.target.value);
  const onUrl = (e) => setVideoUrl(e.target.value);
  const onDescription = (e) => setDescription(e.target.value);
  const onContent = (e) => setContent(e.target.value);

  return (
    <>
      <Header />
      <div className="w-full relative flex justify-center">
        <form className="flex flex-col max-w-md">
          <input
            className="w-96 border p-3 my-2"
            type="text"
            placeholder="제목을 입력하세요"
            onChange={onTitle}
          />
          <input
            className="w-96 border p-3 my-2"
            type="text"
            placeholder="URL을 입력하세요"
            onChange={onUrl}
          />
          {/* <input className="w-96 border p-3 my-2" type="file" /> */}
          <input
            className="w-96 border p-3 my-2"
            type="text"
            placeholder="설명란을 입력하세요"
            onChange={onDescription}
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="내용을 입력하세요"
            className="border p-3 my-2"
            onChange={onContent}
          ></textarea>
          <div className="absolute -bottom-10">
            <button
              onClick={onSubmit}
              className="text-lg bg-blue-400 p-1 px-2 text-neutral-100 rounded"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpLoad;
