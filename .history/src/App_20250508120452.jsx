import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Noticias from "./pages/Noticias";
import Galeria from "./pages/Galeria";
import Inscripcion from "./pages/Inscripcion";
import styles from './styles/globalStylesmodule.module.css';

export default function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/inscripcion" element={<Inscripcion />} />
      </Routes>
    </div>
  );
}
