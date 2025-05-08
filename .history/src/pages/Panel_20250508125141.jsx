import { useEffect, useState } from "react";
import styles from "../styles/adminPanel.module.css";

export default function Panel() {
  const [news, setNews] = useState([]);
  const [newArticle, setNewArticle] = useState({ title: "", content: "" });

  const [inscripciones, setInscripciones] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:5000/news", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setNews(data));

    fetch("http://localhost:5000/inscripciones", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setInscripciones(data));

    fetch("http://localhost:5000/galeria")
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, []);

  // ✅ Publicar noticia
  const handleCreateNews = async () => {
    const token = localStorage.getItem("token");
    await fetch("http://localhost:5000/news", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify(newArticle),
    });
    alert("✅ Noticia publicada");
    window.location.reload();
  };

  // 🗑 Eliminar noticia
  const handleDeleteNews = async (id) => {
    const token = localStorage.getItem("token");
    await fetch(`http://localhost:5000/news/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    alert("🗑 Noticia eliminada");
    window.location.reload();
  };

  // 📸 Subir imagen/video a galería
  const handleUpload = async () => {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("file", file);

    await fetch("http://localhost:5000/galeria", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });
    alert("📸 Archivo subido");
    window.location.reload();
  };

  // 🗑 Eliminar archivo de galería
  const handleDeleteMedia = async (id) => {
    const token = localStorage.getItem("token");
    await fetch(`http://localhost:5000/galeria/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    alert("🗑 Archivo eliminado");
    window.location.reload();
  };

  return (
    <div className={styles["panel-container"]}>
      <h1 className={styles["panel-header"]}>🎮 Panel de Administración</h1>

      <div className={styles["panel-card"]}>
        <h2>📢 Gestión de Noticias</h2>
        <button className={styles["panel-button"]}>Publicar Noticia</button>
      </div>

      <div className={styles["panel-card"]}>
        <h2>📋 Inscripciones</h2>
        <button className={styles["panel-button"]}>Ver Inscripciones</button>
      </div>

      <div className={styles["panel-card"]}>
        <h2>🖼 Galería Multimedia</h2>
        <button className={styles["panel-button"]}>Administrar Galería</button>
      </div>
    </div>
  );
}
