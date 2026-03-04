import "./App.css";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <>
      <header className="bg-white border-b border-b-gray-200 shadow-sm">
        <NavBar />
      </header>
      <main></main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
