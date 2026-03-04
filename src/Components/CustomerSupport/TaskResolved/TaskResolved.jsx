import React from 'react';

const TaskResolved = () => {
    return (
         <div>
            <h2 className='text-[#34485A] text-xl md:text-2xl font-semibold'>Task Resolved</h2>
            <div className='mt-4'>
                {/* default text */}
                <p className="text-[16px] text-[#627382] font-normal  pb-4 text-center lg:text-left ">No resolved tasks yet.</p>

                {/* resolved text */}
                <div className='px-4 py-5 bg-[#E0E7FF] rounded-sm shadow-md '>
                    <h2 className='text-lg text-[#001931] font-semibold'>Incorrect Billing Details</h2>
                </div>
            </div>
        </div>
    );
};

export default TaskResolved;