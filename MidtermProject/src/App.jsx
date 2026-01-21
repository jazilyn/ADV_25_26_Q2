import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import Featured from "./pages/Featured";
import Locations from "./pages/Locations";
import "./styles/global.css";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>

      <Footer />
    </Router>
  );
}
