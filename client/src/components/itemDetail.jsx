import React from "react";

const ItemDetail = ({ item }) => {
  const { title, videoUrl, description, content } = item;
  return (
    <li>
      <ul>
        <li>{title}</li>
        <li>{videoUrl}</li>
        <li>{description}</li>
        <li>{content}</li>
      </ul>
    </li>
  );
};

export default ItemDetail;
