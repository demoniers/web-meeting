import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("token", data.token); // Guardar token
      alert("✅ Login exitoso");
      window.location.href = "/panel";
    } else {
      alert("❌ Credenciales incorrectas");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-red-400 text-3xl font-bold">Iniciar Sesión</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="username" placeholder="Usuario" onChange={handleChange} className="border p-2" />
        <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} className="border p-2" />
        <button type="submit" className="p-2 bg-red-400 text-black">Entrar</button>
      </form>
    </div>
  );
}
