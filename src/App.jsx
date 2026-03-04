import "./App.css";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Progress from "./Components/ProgressCard/Progress";
import Resolved from "./Components/ResolvedCard/Resolved";

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
          <Progress/>
        </div>
        {/* resolved card */}
        <div className="lg:flex-1 w-full">
          <Resolved/>
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
