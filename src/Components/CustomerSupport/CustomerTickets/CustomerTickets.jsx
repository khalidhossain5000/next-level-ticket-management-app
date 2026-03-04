/* eslint-disable react-hooks/set-state-in-render */
import React, { use } from "react";
import CustomerTicketCard from "../CustomerTicketCard/CustomerTicketCard";

const CustomerTickets = ({
  allTicketsPromise,
  handleAddTicketToStatus,
  currentResolveTaskIds,
}) => {
  const allTicketsData = use(allTicketsPromise);

  const remainingTaskAfterComplete = allTicketsData.filter(
    (task) => !currentResolveTaskIds.includes(task.id),
  );

  return (
    <div className="pb-9">
      <h2 className="text-[#34485A] text-xl md:text-2xl font-semibold">
        Customer Tickets
      </h2>

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-6 ">
        {remainingTaskAfterComplete.map((ticket) => (
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
