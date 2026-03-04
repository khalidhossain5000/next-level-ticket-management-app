/* eslint-disable react-hooks/set-state-in-render */
import React, { use, useEffect, useState,  } from "react";
import CustomerTicketCard from "../CustomerTicketCard/CustomerTicketCard";

const CustomerTickets = ({
  allTicketsPromise,
  handleAddTicketToStatus,
  currentResolveTask,
}) => {
    
  const allTicketsData = use(allTicketsPromise);
  const [tickets,setTickets]=useState(allTicketsData)

const afterCompleteTaskRemainingTasks=tickets.filter((ticket)=>ticket.id!==currentResolveTask.id)
console.log(afterCompleteTaskRemainingTasks,'afterCompleteTaskRemainingTasksafterCompleteTaskRemainingTasks')
useEffect(()=>{
    setTickets(afterCompleteTaskRemainingTasks)
},[afterCompleteTaskRemainingTasks])

  return (
    <div>
      <h2 className="text-[#34485A] text-xl md:text-2xl font-semibold">
        Customer Tickets
      </h2>

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-6">
        {tickets.map((ticket) => (
          <CustomerTicketCard
            key={ticket.id}
            ticket={ticket}
            handleAddTicketToStatus={handleAddTicketToStatus}
          ></CustomerTicketCard>
        ))}
      </div>
    </div>
  );
};

export default CustomerTickets;
