import React from "react";

const AnotherHeader = () => {
  return (
    <header className="">
      <ul className="flex w-full text-xl text-neutral-200 bg-zinc-700 p-4 justify-end">
        <li className="cursor-pointer">전체 취소</li>
        <li className="mx-6 cursor-pointer">업로드</li>
      </ul>
    </header>
  );
};

export default AnotherHeader;
