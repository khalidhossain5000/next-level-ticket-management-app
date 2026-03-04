import React from "react";
import { FaRegCalendar } from "react-icons/fa6";

const CustomerTicketCard = ({ ticket }) => {
  console.log(ticket);
  const { id,title, description, customer, priority, status, createdAt } = ticket;

  return (
    <div className="bg-white p-4 rounded-sm shadow-sm cursor-pointer  ">
      <div className="flex flex-col lg:flex-row items-center gap-1 lg:gap-6 text-center lg:text-left justify-between">
        <h2 className="text-[18px] text-[#001931] font-medium">{title}</h2>
        <h4 className={`px-3 py-1 rounded-full bg-[#B9F8CF] ${status !=="Open" && 'bg-[#F8F3B9] text-[#9c7700]'} flex items-center gap-3 text-[16px] text-[#0b5e06]  font-medium`}>
          <span className={`inline-block bg-[#02A53B] ${status !=="Open" && 'bg-[#febb0c]'} w-4 h-4 rounded-full`}></span>
          {status}
        </h4>
      </div>
      <p className="text-[16px] text-[#627382] font-normal pt-2 pb-4 text-center lg:text-left ">{description}</p>

      {/* more info */}
      <div className="flex items-center justify-between">
        {/* id and priority */}
        <div className="flex items-center gap-6">
            <p className="text-sm text-[#627382] font-medium">{id}</p>
            <p className={`text-[16px]  ${priority === 'High' ? 'text-[#F83044]' : priority === 'Medium' ? 'text-[#FEBB0C]' : 'text-[#02A53B]'}  font-medium`}>{priority.toUpperCase()} PRIORITY</p>
        </div>
        {/* name and date */}
        <div className="flex flex-col lg:flex-row items-center gap-1 lg:gap-6 lg:py-1">
            <p className="text-[16px] text-[#627382] font-normal">{customer}</p>
            <p className="text-[16px] text-[#627382] font-normal flex items-center gap-2"><span><FaRegCalendar /></span>{createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerTicketCard;
