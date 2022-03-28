import React from "react";

const str =
  "text-gray-100 flex justify-center bg-indigo-400 text-center p-4 align-middle text-xl";
const Header = () => {
  return (
    <header className={str}>
      <p>원하는 키워드를 검색해보세요</p>
      <ul className="flex absolute right-10">
        <li className="cursor-pointer pr-4">로그인</li>
        <li className="cursor-pointer">마이페이지</li>
      </ul>
    </header>
  );
};

export default Header;
