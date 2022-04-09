import React from "react";

const Header = ({ setModal }) => {
  const handleOnclick = () => {
    setModal(true);
  };

  return (
    <header
      className={
        "text-gray-100 relative flex h-450 w-full flex justify-center bg-gray-500 text-center p-4 align-middle text-xl"
      }
    >
      <div className="w-full relative">
        <ul className="flex right-0 absolute">
          <li className="cursor-pointer border bg-black rounded-md text-sm px-4 p-2 mr-2">
            Sign in
          </li>
          <li
            onClick={handleOnclick}
            className="cursor-pointer bg-orange-600 rounded-md px-4 text-sm p-2"
          >
            Create account
          </li>
        </ul>
      </div>
      <div className="absolute top-2/3">
        <button
          onClick={handleOnclick}
          className="p-2 px-8 rounded text-lg bg-orange-600"
        >
          Sign up for free
        </button>
      </div>
    </header>
  );
};

export default Header;
