import { useState } from "react";

export default function Inscripcion() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    tipo_documento: "",
    documento: "",
    licencia: "",
    prueba: "",
    categoria: "",
    email: "",
    telefono: "",
    fecha_nacimiento: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/inscripciones", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    alert("✅ Inscripción realizada correctamente");
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-green-400 text-3xl font-bold">Inscripción al Evento</h1>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input name="nombre" placeholder="Nombre" onChange={handleChange} className="border p-2" />
        <input name="apellidos" placeholder="Apellidos" onChange={handleChange} className="border p-2" />
        <select name="tipo_documento" onChange={handleChange} className="border p-2">
          <option value="">Tipo de Documento</option>
          <option value="DNI">DNI</option>
          <option value="Pasaporte">Pasaporte</option>
        </select>
        <input name="documento" placeholder="Número de Documento" onChange={handleChange} className="border p-2" />
        <input name="licencia" placeholder="Licencia (opcional)" onChange={handleChange} className="border p-2" />
        <input name="prueba" placeholder="Prueba" onChange={handleChange} className="border p-2" />
        <input name="categoria" placeholder="Categoría" onChange={handleChange} className="border p-2" />
        <input name="email" placeholder="Email" onChange={handleChange} className="border p-2" />
        <input name="telefono" placeholder="Teléfono" onChange={handleChange} className="border p-2" />
        <input type="date" name="fecha_nacimiento" onChange={handleChange} className="border p-2" />
        <button type="submit" className="p-2 bg-green-400 text-black">Enviar Inscripción</button>
      </form>
    </div>
  );
}
