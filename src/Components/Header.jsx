import React from "react";
import { RiTelegramFill } from "react-icons/ri";
import {
  AiFillTwitterCircle,
  AiOutlineLineChart,
  AiFillMediumCircle,
} from "react-icons/ai";
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <div className="w-full fixed z-50  bg-secondary top-0 text-white">
      <div className="bg-accent flex flex-col">
        <nav className="container head py-3 flex justify-center md:justify-between items-center">
          <h2 className="capitalize hidden md:block">
            the thrilling world of Killer Kermit
          </h2>
          <div className="flex gap-3 items-center">
            <a href="" className="text-3xl hover:text-tertiary">
              <RiTelegramFill />
            </a>
            <a href="" className="text-3xl hover:text-tertiary">
              <AiFillTwitterCircle />
            </a>{" "}
            <a href="" className="text-3xl hover:text-tertiary">
              <AiOutlineLineChart />
            </a>
            <a href="" className="text-3xl hover:text-tertiary">
              <AiFillMediumCircle />
            </a>
          </div>
        </nav>
        <div className="bg-secondary flex flex-col">
          <nav className="container  head py-3 flex justify-center tracking-wide text-tertiary items-center">
            <a href="" className="text-4xl font-primary flex items-center gap-2">
             <img src={logo} alt="" className="w-[3rem] rounded-full"/> killer kermit
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
