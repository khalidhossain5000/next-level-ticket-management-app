import React from "react";

const MobileMenu = ({ navItem }) => {
  return (
    <div className="bg-slate-100 rounded-xl p-4 shadow-2xl">
      <ul className="flex flex-col gap-3 mt-2">
        {navItem.map((item, i) => (
          <li key={i}>
            <a href="#" className="text-[16px] text-[#000000]">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
