import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (data.message) {
      alert("✅ Registro exitoso, ahora inicia sesión.");
      window.location.href = "/login";
    } else {
      alert("❌ Error: " + data.error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-red-400 text-3xl font-bold">Registro de Usuario</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="username" placeholder="Usuario" onChange={handleChange} className="border p-2" required />
        <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} className="border p-2" required />
        <button type="submit" className="p-2 bg-red-500 text-black">Registrar</button>
      </form>
    </div>
  );
}
