import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="flex justify-center items-center bg-rabbit-red text-white py-4 ">
      <div className="container max-auto flex justify-center md:justify-between items-center px-6">
        {/* Social Icons */}
        <div className="hidden md:flex justify-start items-center gap-4">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="h-5 w-5" />
          </a>
        </div>
        {/* Center Header */}
        <div className="text-sm text-center">
          <span>We ship all over world!</span>
        </div>
        {/* Right Header */}
        <div className="hidden md:block text-sm text-center">
          <a href="tel:+923172516088" className="hover:text-gray-300">
            +92 317-2516088
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
