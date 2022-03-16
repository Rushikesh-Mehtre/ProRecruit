import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AboutPage from "./Pages/About Page/AboutPage";
import ContactPage from "./Pages/Contact Page/ContactPage";
import Homepage from "./Pages/Home Page/Homepage";
import SplashScreen from "./Pages/SplashScreen/SplashScreen";
function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === "/" ? null : <Navbar />}

      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
