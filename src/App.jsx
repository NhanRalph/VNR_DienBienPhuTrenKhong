import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BattleMapPage from "./pages/BattleMapPage";
import BattleTimelinePage from "./pages/BattleTimelinePage";
import TestimoniesPage from "./pages/Testimonies";
import InteractivePage from "./pages/InteractivePage";
import MemorialPage from "./pages/MemorialPage";
import Home from "./pages/Home";
import DiscoveryPage from "./pages/Discovery";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/battle-timeline" element={<BattleTimelinePage />} />
        <Route path="/battle-map" element={<BattleMapPage />} />
        <Route path="/boeing" element={<TestimoniesPage />} />
        <Route path="/interactive" element={<InteractivePage />} />
        <Route path="/memorial" element={<MemorialPage />} />
        <Route path="/discovery" element={<DiscoveryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
