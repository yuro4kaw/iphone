import { appleImg, bagImg, searchImg } from "@/constants/exports";
import Image from "next/image";
import React from "react";
import { navLists } from "@/constants/index"

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center sticky top-0 bg-transparent backdrop-blur-md z-10">
      <nav className="flex w-full screen-max-width">
        <Image src={appleImg} alt="Apple" width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all" key={nav}>{nav}</div>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <Image src={searchImg} alt="search" width={18} height={18} />
          <Image src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
