import { Suspense, useState } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Progress from "./Components/ProgressCard/Progress";
import Resolved from "./Components/ResolvedCard/Resolved";
import CustomerTickets from "./Components/CustomerSupport/CustomerTickets/CustomerTickets";
import TaskStatus from "./Components/CustomerSupport/TaskStatusSection/TaskStatus";
import TaskResolved from "./Components/CustomerSupport/TaskResolved/TaskResolved";
import { Bounce, toast } from "react-toastify";
const allTicketsPromise = fetch("/ticket-data.json").then((res) => res.json());
function App() {
  const [taskAddedToStatus, setTaskAddedToStatus] = useState([]);
  const [resolvedTask, setResolvedTask] = useState([]);
  const [currentResolveTask,setCurrentResolveTask]=useState({})
  //this will add task to the right section clicking task div
  const handleAddTicketToStatus = (ticket) => {
    const isAlreadyAdded = taskAddedToStatus.some(
      (task) => task.id === ticket.id,
    );

    if (isAlreadyAdded) {
      return toast.warn("Task Already Added", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }

    const allAddedTaskToStatus = [...taskAddedToStatus, ticket];

    setTaskAddedToStatus(allAddedTaskToStatus);

    if (taskAddedToStatus.length >= 0) {
      toast.success("Ticket Added To Task Status SuccessFully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  //handle resolved task
  const handleResolveTask = (resolveTask) => {
    setCurrentResolveTask(resolveTask)
    const allResolvedTask = [...resolvedTask, resolveTask];
    setResolvedTask(allResolvedTask);
    if (allResolvedTask.length >= 0) {
      toast.success(" Task Completed SuccessFully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
    // remove item from task status
    const remainingTaskInStatus = taskAddedToStatus.filter(
      (task) => task.id !== resolveTask.id,
    );
    setTaskAddedToStatus(remainingTaskInStatus);
    console.log(allResolvedTask, "all resovled task is here");
  };
  return (
    <>
      <header className="bg-white border-b border-b-gray-200 shadow-sm">
        <NavBar />
      </header>
      <main className=" bg-[#f5f5f5]">
        {/* prgress and resolved section */}
        <section className="max-w-11/12 lg:max-w-10/12 mx-auto  px-1 lg:px-6 flex flex-col lg:flex-row items-center gap-6 py-20">
          {/* progress card */}
          <div className="lg:flex-1 w-full">
            <Progress taskAddedToStatus={taskAddedToStatus} />
          </div>
          {/* resolved card */}
          <div className="lg:flex-1 w-full">
            <Resolved resolvedTask={resolvedTask} />
          </div>
        </section>

        {/* customer support ticket layout */}
        <section className="max-w-11/12 lg:max-w-10/12 mx-auto  px-1 lg:px-6 grid lg:grid-cols-4 gap-6">
          {/* all ticket showing customer problem section div */}
          <div className="order-2 lg:order-1 lg:col-span-3">
            <Suspense
              fallback={
                <span className="loading loading-bars loading-xl"></span>
              }
            >
              <CustomerTickets
                handleAddTicketToStatus={handleAddTicketToStatus}
                allTicketsPromise={allTicketsPromise}
                currentResolveTask={currentResolveTask}
              />
            </Suspense>
          </div>

          {/* right sidebar shwoing status section div */}
          <div className="order-1 lg:order-2 lg:col-span-1">
            <TaskStatus
              handleResolveTask={handleResolveTask}
              taskAddedToStatus={taskAddedToStatus}
            />
            <TaskResolved resolvedTask={resolvedTask} />
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
