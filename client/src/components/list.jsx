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
      <div className="w-full h-32 p-4">
        <ul className="flex flex-wrap justify-center">
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
