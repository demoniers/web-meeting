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
/*

      <div className={styles["panel-card"]}>
        <h2>📋 Inscripciones</h2>
        <button className={styles["panel-button"]}>Ver Inscripciones</button>
      </div>

      <div className={styles["panel-card"]}>
        <h2>🖼 Galería Multimedia</h2>
        <button className={styles["panel-button"]}>Administrar Galería</button>
      </div>
    </div>*/
  return (

    <div className={styles["panel-container"]}>
      <h1 className={styles["panel-header"]}>🎮 Panel de Administración</h1>

      {/* 📢 Gestión de Noticias */}
      <div className={styles["panel-card"]}>
        <h2>📢 Gestión de Noticias</h2>
      <input name="title" placeholder="Título" onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })} className="border p-2" />
      <textarea name="content" placeholder="Contenido" onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })} className="border p-2"></textarea>

      <button className={styles["panel-button"]}>Publicar Noticia</button>
      </div>
      <h2 className="text-red-400 text-xl mt-6">Noticias publicadas</h2>
      {news.map((article) => (
        <div key={article.id} className="border p-4">
          <h2>{article.title}</h2>
          <p>{article.content}</p>
          <button className="bg-red-600 p-2 mt-2 text-black" onClick={() => handleDeleteNews(article.id)}>Eliminar</button>
        </div>
      ))}

      {/* 📋 Gestión de Inscripciones */}
      <h2 className="text-orange-400 text-2xl mt-6">📋 Inscripciones</h2>
      {inscripciones.map((inscripcion) => (
        <div key={inscripcion.id} className="border p-4">
          <p><strong>Nombre:</strong> {inscripcion.nombre} {inscripcion.apellidos}</p>
          <p><strong>Email:</strong> {inscripcion.email}</p>
          <p><strong>Prueba:</strong> {inscripcion.prueba}</p>
        </div>
      ))}

      {/* 🖼 Gestión de Galería */}
      <h2 className="text-red-400 text-2xl mt-6">🖼 Galería</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} className="border p-2" />
      <button onClick={handleUpload} className="bg-red-500 p-2 text-black">Subir Archivo</button>

      {gallery.map((media) => (
        <div key={media.id} className="border p-4">
          {media.tipo === "imagen" ? <img src={media.archivo} className="w-full" /> : <video src={media.archivo} controls className="w-full" />}
          <button onClick={() => handleDeleteMedia(media.id)} className="bg-red-600 p-2 mt-2 text-black">Eliminar</button>
        </div>
      ))}
    </div>
  );
}
