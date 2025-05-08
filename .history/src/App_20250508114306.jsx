import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Noticias from "./pages/Noticias";
//import Horarios from "./pages/Horarios";
import Galeria from "./pages/Galeria";
import Inscripcion from "./pages/Inscripcion";
import Contacto from "./pages/Contacto";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/horarios" element={<Horarios />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/inscripcion" element={<Inscripcion />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
}
