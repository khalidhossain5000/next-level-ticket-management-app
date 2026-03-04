import React from "react";

const TaskStatus = ({ taskAddedToStatus }) => {
  return (
    <div>
      <h2 className="text-[#34485A] text-xl md:text-2xl font-semibold">
        Task Status
      </h2>
      <div className="mt-4">
        {/* default text */}
       {
        taskAddedToStatus.length<=0 &&  <p className="text-[16px] text-[#627382] font-normal pb-4 text-center lg:text-left ">
          Select a ticket to add to Task Status
        </p>
       }

        {/* task status card design */}

        <div>
          {taskAddedToStatus.map((task) => (
            <div className="p-4 shadow-lg rounded-lg bg-white mt-4 mb-10">
              <h2 className="text-[#001931] text-[18px] font-medium">
                {task.title}
              </h2>

              <button className="my-4 cursor-pointer text-[16px] font-semibold px-4 py-3 bg-[#02A53B] rounded-sm text-white w-full">
                Complete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskStatus;
