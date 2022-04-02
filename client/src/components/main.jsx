import React from "react";
import Header from "./header.jsx";
import Search from "./search";
import List from "./list";

const Main = ({ contentService }) => {
  return (
    <>
      <Header />
      <Search />
      <List contentService={contentService} />
    </>
  );
};

export default Main;
