import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="w-full flex my-10">
      <div className="flex ml-auto mr-auto">
        <div>
          <input
            type="text"
            className="w-600 focus:outline-none px-4 bg-gray-100 h-full text-md rounded-tl-md rounded-bl-md"
            placeholder="Search for keyword on your mind"
          />
        </div>
        <div className="flex h-full items-center">
          <button className="bg-gray-100 p-2 rounded-tr-md rounded-br-md">
            <AiOutlineSearch size="24" color="gray" />
          </button>
        </div>
        <p className="px-4 flex items-center">or</p>
        <div>
          <button className="bg-orange-600 p-2 px-4 text-white rounded-md ">
            Upload your own
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
