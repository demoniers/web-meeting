import { useEffect, useState } from "react";

export default function Galeria() {
  const [archivos, setArchivos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/galeria")
      .then((res) => res.json())
      .then((data) => setArchivos(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-green-400 text-3xl font-bold">Galería de Fotos y Videos</h1>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {archivos.map((archivo) => (
          <div key={archivo.id} className="border p-4">
            {archivo.tipo === "imagen" ? (
              <img src={archivo.archivo} alt={archivo.titulo} className="w-full" />
            ) : (
              <video src={archivo.archivo} controls className="w-full" />
            )}
            <p className="text-gray-300">{archivo.titulo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
