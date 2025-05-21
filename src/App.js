import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Actividades from "./pages/Actividades";
import Galeria from "./pages/Galeria";
import CodigoFuente from "./pages/CodigoFuente";
import ReporteSCRUM from "./pages/ReporteSCRUM";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Actividades />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/codigo" element={<CodigoFuente />} />
          <Route path="/reporte" element={<ReporteSCRUM />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
