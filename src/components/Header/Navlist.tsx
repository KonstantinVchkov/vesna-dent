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
    <div>
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
    </div>
  );
};

export default Navitems;
