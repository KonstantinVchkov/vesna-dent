import React from "react";
export type TlistItems = {
  title: string;
  path: string;
};
export type TNavlist = {
  list: TlistItems[];
  routes: (value: string) => void;
};
const Navitems = ({ list, routes }: TNavlist) => {
  return (
    <>
      {list.map((list, idx) => (
        <li
          key={idx}
          onClick={() => {
            routes(list.path);
          }}
        >
          {list.title}
        </li>
      ))}
    </>
  );
};

export default Navitems;
