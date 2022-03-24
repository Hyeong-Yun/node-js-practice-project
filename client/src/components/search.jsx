import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="w-full flex justify-center absolute top-24">
      <div className="w-1/2 flex justify-between max-w-3xl">
        <div className="flex h-full items-center">
          <button className="bg-indigo-400 p-2 rounded-tl-xl rounded-bl-xl">
            <AiOutlineSearch size="24" color="white" />
          </button>
        </div>
        <div className="w-full">
          <input
            type="text"
            className="w-full px-2 h-full text-xl shadow border rounded-tr-xl rounded-br-xl focus:outline-none focus:border-red-300"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
