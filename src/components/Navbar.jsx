import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"; // Importamos los estilos

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>🏃 Atletismo Internacional</div>
      <div className={styles.links}>
        <Link to="/" className={styles.link}>Inicio</Link>
        <Link to="/noticias" className={styles.link}>Noticias</Link>
        <Link to="/galeria" className={styles.link}>Galería</Link>
        <Link to="/inscripcion" className={styles.link}>Inscripción</Link>
        <Link to="/contacto" className={styles.link}>Contacto</Link>
      </div>
    </nav>
  );
}
