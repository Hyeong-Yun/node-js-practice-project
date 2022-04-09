import React from "react";

const ItemDetail = ({ item }) => {
  const { title, videoUrl, description, content, url } = item;
  return (
    <li className="mb-4">
      <ul>
        <li>
          <img src={url} className="w-180 h-180 mr-4 "></img>
          <li>{title}</li>
        </li>
      </ul>
    </li>
  );
};

export default ItemDetail;
