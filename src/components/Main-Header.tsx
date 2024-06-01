import React from "react";
import Link from "next/link";

import NavLink from "./NavLink";

const MainHeader = () => {
  return (
    <header>
      <nav className=" px-3 py-3">
        <ul className=" flex justify-between">
          <li className=" text-3xl">
            <NavLink href={"/"}>News App</NavLink>
          </li>
          <li className=" text-xl">
            <NavLink href={"/news"}>News</NavLink>
          </li>
          <li className=" text-xl">
            <NavLink href={"/archive"}>Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
