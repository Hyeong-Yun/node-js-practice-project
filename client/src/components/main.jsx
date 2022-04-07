import React from "react";
import Header from "./header.jsx";
import Search from "./search";
import List from "./list";

const Main = ({ contentService }) => {
  return (
    <>
      <div className="h-screen">
        <div className="w-1240 ml-auto mr-auto">
          <Header />
          <Search />
          <List contentService={contentService} />
        </div>
      </div>
    </>
  );
};

export default Main;
