import React, { useEffect, useState } from "react";
import ItemDetail from "./itemDetail.jsx";

const List = ({ contentService }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    contentService.getAll().then((res) => {
      setList(res);
    });
    console.log(list);
  }, []);

  return (
    <>
      <div className="w-6/12 h-32 bg-indigo-400 absolute top-56 left-1/2 -translate-x-1/2 max-w-4xl">
        <ul className="w-32 bg-red-300 flex justify-center ml-auto mr-auto">
          <li className="pr-2 cursor-pointer">최신순</li>
          <li className="cursor-pointer">인기순</li>
        </ul>
        <ul className="flex">
          {list &&
            list.map((item) => (
              <ItemDetail key={item.id} item={item}></ItemDetail>
            ))}
        </ul>
      </div>
    </>
  );
};

export default List;
