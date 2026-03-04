import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItem = [
    {
      name: "Home",
    },
    {
      name: "FAQ",
    },
    {
      name: "Changelog",
    },
    {
      name: "Blog",
    },
    {
      name: "Download",
    },
    {
      name: "Contact",
    },
  ];
  return (
    <nav className="max-w-11/12 lg:max-w-10/12 mx-auto  px-1 lg:px-6 py-4 ">
      <div className="flex items-center justify-between">
        {/* logo */}
        <div>
          <h2 className="text-[#130B2D] text-xl md:text-2xl font-bold">
            CS — Ticket System
          </h2>
        </div>
        {/* nav menu item and button */}
        <div className="hidden xl:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navItem.map((item, i) => (
              <li key={i}>
                <a href="#" className="text-[16px] text-[#000000]">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          {/* button */}
          <div>
            <button className="px-4 py-3 rounded-sm flex items-center gap-3 text-white font-semibold text-[16px] bg-linear-to-br from-[#632ee3] to-[#9f62f2]">
              <FaPlus />
              New Ticket
            </button>
          </div>
        </div>

        {/* mobile menu */}

        <div className="xl:hidden">
          {isOpen ? (
            <button onClick={() => setIsOpen(false)}>
              <span className="text-2xl">
                <RxCross1 />
              </span>
            </button>
          ) : (
            <button onClick={() => setIsOpen(true)}>
              <span className="text-2xl">
                <GiHamburgerMenu />
              </span>
            </button>
          )}
        </div>
      </div>
      {/* menu items */}

      <div className="xl:hidden relative">
        <div
          className={`
      absolute top-0 right-0 h-screen w-64 bg-slate-100 shadow-lg
      transform transition-transform transition-opacity duration-300 ease-in-out
      ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
    `}
        >
          <MobileMenu navItem={navItem} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
