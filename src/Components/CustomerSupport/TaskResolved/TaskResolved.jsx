import React from 'react';

const TaskResolved = ({resolvedTask}) => {
    return (
         <div>
            <h2 className='text-[#34485A] text-xl md:text-2xl font-semibold'>Task Resolved</h2>
            <div className='mt-4'>
                {/* default text */}
               {
                resolvedTask<=0 &&  <p className="text-[16px] text-[#627382] font-normal  pb-4 text-center lg:text-left ">No resolved tasks yet.</p>
               }

                {/* resolved text */}
               

                {
                    resolvedTask.map((rt)=> <div 
                    key={rt.id}
                    className='px-4 py-5 bg-[#E0E7FF] rounded-sm shadow-md mb-4'>
                    <h2 className='text-lg text-[#001931] font-semibold'>{rt.title}</h2>
                </div>)
                }
            </div>
        </div>
    );
};

export default TaskResolved;