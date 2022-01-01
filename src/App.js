import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Pages/Homepage";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
