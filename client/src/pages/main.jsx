import React, { useEffect, useState } from "react";
import Header from "../components/header.jsx";
import Search from "../components/search";
import List from "../components/list";
import Login from "../pages/login";

const Main = ({ contentService }) => {
  const [modal, setModal] = useState(false);
  const [accountPage, setAccountPage] = useState(false);

  const handleOnclick = () => {
    setModal(false);
  };

  useEffect(() => {
    setModal(false);
  }, []);

  return (
    <>
      {modal ? (
        <div
          onClick={handleOnclick}
          className="bg-gray-500/30 fixed left-0 top-0 overflow-auto z-10 w-full h-full"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white my-20 mx-auto w-450 h-600"
          >
            {accountPage ? (
              <>
                <Login></Login>
              </>
            ) : (
              <>
                <button onClick={setAccountPage(true)}>make account</button>
              </>
            )}
          </div>
        </div>
      ) : null}
      <div className="bg-gray-100">
        <div className="h-screen w-1240 ml-auto mr-auto bg-white">
          <Header setModal={setModal} />
          <Search />
          <List contentService={contentService} />
        </div>
      </div>
    </>
  );
};

export default Main;
