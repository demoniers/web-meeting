import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black p-4 flex justify-between border-b-2 border-green-400 shadow-lg">
      <div className="text-lg font-bold text-green-400">🏃 Atletismo Internacional</div>
      <div className="space-x-4 flex">
        <Link to="/" className="text-green-400 hover:text-white">Inicio</Link>
        <Link to="/noticias" className="text-green-400 hover:text-white">Noticias</Link>
        <Link to="/horarios" className="text-green-400 hover:text-white">Horarios</Link>
        <Link to="/galeria" className="text-green-400 hover:text-white">Galería</Link>
        <Link to="/inscripcion" className="text-green-400 hover:text-white">Inscripción</Link>
        <Link to="/contacto" className="text-green-400 hover:text-white">Contacto</Link>
      </div>
    </nav>
  );
}
