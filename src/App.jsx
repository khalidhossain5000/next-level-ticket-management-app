import { Suspense } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Progress from "./Components/ProgressCard/Progress";
import Resolved from "./Components/ResolvedCard/Resolved";
import CustomerTickets from "./Components/CustomerTickets/CustomerTickets";
const allTicketsPromise=fetch('/ticket-data.json').then((res)=>res.json())
function App() {
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
            <Progress />
          </div>
          {/* resolved card */}
          <div className="lg:flex-1 w-full">
            <Resolved />
          </div>
        </section>




        {/* customer support ticket layout */}
        <section>
          {/* all ticket showing customer problem section div */}
          <div>
            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
              <CustomerTickets allTicketsPromise={allTicketsPromise}/>
            </Suspense>
          </div>

          {/* right sidebar shwoing status section div */}
          <div></div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
