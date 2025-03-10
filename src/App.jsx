import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BattleMapPage from "./pages/BattleMapPage";
import TestimoniesPage from "./pages/Testimonies";
import InteractivePage from "./pages/InteractivePage";
import MemorialPage from "./pages/MemorialPage";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/battle-map" element={<BattleMapPage />} />
        <Route path="/testimonies" element={<TestimoniesPage />} />
        <Route path="/interactive" element={<InteractivePage />} />
        <Route path="/memorial" element={<MemorialPage />} />
      </Routes>
    </Router>
  );
}

export default App;
