import React from "react";
import Header from "./header.jsx";
import Search from "./search";
import List from "./list";

const Main = ({ contentService }) => {
  return (
    <>
      <div className="w-1230 ml-auto mr-auto">
        <Header />
        <Search />
        <List contentService={contentService} />
      </div>
    </>
  );
};

export default Main;
