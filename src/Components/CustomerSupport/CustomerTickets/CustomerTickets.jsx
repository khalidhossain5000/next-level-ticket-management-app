import React, { use } from 'react';
import CustomerTicketCard from '../CustomerTicketCard/CustomerTicketCard';

const CustomerTickets = ({allTicketsPromise}) => {
    const allTicketsData=use(allTicketsPromise)
    
    return (
        <div>

<h2 className='text-[#34485A] text-xl md:text-2xl font-semibold'>Customer Tickets</h2>


            <div className='mt-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-6'>
            {
                allTicketsData.map((ticket)=><CustomerTicketCard
                key={ticket.id}
                ticket={ticket}
                ></CustomerTicketCard>)
            }
            </div>
        </div>
    );
};

export default CustomerTickets;