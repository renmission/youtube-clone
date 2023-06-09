import React from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoAppsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-8 h-14 bg-[#0F0F0F] opacity-95 sticky top-0 -z-50">
      <div className="flex gap-6 items-center text-2xl">
        <div>
          <RxHamburgerMenu />
        </div>
        <Link to={"/"}>
          <div className="flex gap-1 items-center justify-center">
            <FaYoutube className="text-4xl text-red-600" />
            <span className="text-xl font-medium text-white">YouTube</span>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-2">
        <form action="">
          <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-full">
            <div className="flex gap-4 items-center pr-5">
              <div>
                <AiOutlineSearch className="text-xl" />
              </div>
              <input
                type="text"
                className="w-96 bg-zinc-900 focus:outline-none border-none"
              />
              <AiOutlineClose className="text-xl cursor-pointer" />
            </div>
            <button className="h-10 w-16 flex items-center justify-center bg-zinc-800  rounded-r-full">
              <AiOutlineSearch className="text-xl" />
            </button>
          </div>
        </form>
        <div className="text-xl p-3 bg-zinc-900 rounded-full">
          <TiMicrophone />
        </div>
      </div>
      <div className="flex gap-8 items-center text-xl">
        <BsCameraVideo />
        <div className="relative">
          <BsBell />
          <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
            9+
          </span>
        </div>
        <img
          src="https://yt3.ggpht.com/yti/AHXOFjU3vWnBtnGdluUHx4EGDNEIA5-g4JXYtf_CztfiDg=s108-c-k-c0x00ffffff-no-rj"
          alt="logo"
          className="w-9 h-9 rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
