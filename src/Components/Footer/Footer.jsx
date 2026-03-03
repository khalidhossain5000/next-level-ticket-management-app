import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
    <footer className="footer place-items-center lg:footer-horizontal  bg-black px-6 lg:px-20 pt-20 pb-[30px]">
      <aside>
        <div>
          <h2 className="text-[#ffffff] text-xl md:text-2xl font-bold footer-center lg:text-left">
            CS — Ticket System
          </h2>
        </div>
        <p className="pt-4 text-[#A1A1AA] text-[16px] max-w-[350px] text-center lg:text-left">
          Customer support teams track tickets, assign priority levels, and
          resolve client issues through an organized workflow system. This
          dashboard lets supervisors review metrics, assign tasks evenly, and
          keep communication clear within support queue.
        </p>
      </aside>
      <nav>
        <h6 className=" text-white text-xl font-medium pb-4 text-center lg:text-left">Company</h6>
        <a className="link link-hover text-[#A1A1AA] text-[16px] text-center lg:text-left">About Us</a>
        <a className="link link-hover text-[#A1A1AA] text-[16px] py-4 text-center lg:text-left">
          Our Mission
        </a>
        <a className="link link-hover text-[#A1A1AA] text-[16px] text-center lg:text-left">
          Contact Saled
        </a>
      </nav>
      <nav className="text-center lg:text-left">
        <h6 className=" text-white text-xl font-medium pb-4">Services</h6>
        <a className="link link-hover text-[#A1A1AA] text-[16px]">
          Products & Services
        </a>
        <a className="link link-hover text-[#A1A1AA] text-[16px] py-4">
          Customer Stories
        </a>
        <a className="link link-hover text-[#A1A1AA] text-[16px]">
          Download Apps
        </a>
      </nav>
      <nav>
        <h6 className=" text-white text-xl font-medium pb-4">Information</h6>
        <a className="link link-hover text-[#A1A1AA] text-[16px]">
          Privacy Policy
        </a>
        <a className="link link-hover text-[#A1A1AA] text-[16px] py-4">
          Terms & Conditions
        </a>
        <a className="link link-hover text-[#A1A1AA] text-[16px]">Join Us</a>
      </nav>
      <nav>
        <h6 className=" text-white text-xl font-medium pb-4">Social Links</h6>
        <a className="link link-hover text-[#A1A1AA] text-[16px] flex items-center gap-3">
          <span className="inline-block bg-white p-1 rounded-full">
            <BsTwitterX className="font-bold text-black" />
          </span>
          @CS — Ticket System
        </a>
        <a className="link link-hover text-[#A1A1AA] text-[16px] flex items-center gap-3 pt-4">
          <span className="inline-block bg-white p-1 rounded-full">
            <FaLinkedinIn className="font-bold text-black" />
          </span>
          @CS — Ticket System
        </a>
        <a className="pt-4 link link-hover text-[#A1A1AA] text-[16px] flex items-center gap-3">
          <span className="inline-block bg-white p-1 rounded-full">
            <FaFacebookF className="font-bold text-black" />
          </span>
          @CS — Ticket System
        </a>
        <a className="pt-4 link link-hover text-[#A1A1AA] text-[16px] flex items-center gap-3">
          <span className="inline-block bg-white p-1 rounded-full">
            <IoMailSharp className="font-bold text-black" />
          </span>
          support@cst.com
        </a>
      </nav>

     
    </footer>

 {/* copyright */}
      <div className=" flex justify-center items-center  bg-black text-[#FAFAFA]   ">
        <div className="py-[30px] border-t border-t-gray-600 w-11/12 mx-auto">
          <p className="text-center">
            Copyright © {new Date().getFullYear()} -Ticket System. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
