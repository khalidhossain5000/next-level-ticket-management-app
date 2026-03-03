import React from "react";
import { FaPlus } from "react-icons/fa";

const NavBar = () => {
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
    <nav className="max-w-10/12 mx-auto flex items-center justify-between px-6 py-4 ">
      {/* logo */}
      <div>
        <h2 className="text-[#130B2D] text-xl md:text-2xl font-bold">
          CS — Ticket System
        </h2>
      </div>
      {/* nav menu item and button */}
      <div className="flex items-center gap-6">
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
    </nav>
  );
};

export default NavBar;
