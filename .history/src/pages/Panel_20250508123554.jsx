import { useEffect, useState } from "react";

export default function Panel() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:3000/panel", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-red-400 text-3xl font-bold">Panel de Gestión</h1>
      {data ? <p>{data.message}</p> : <p className="text-gray-400">Cargando...</p>}
    </div>
  );
}
