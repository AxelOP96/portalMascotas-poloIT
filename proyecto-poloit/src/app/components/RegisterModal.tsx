"use client";

import { useState } from "react";

export default function RegisterModal() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (res.ok) {
      alert("¡Registro exitoso!");
    } else {
      alert(data.msg || "Error al registrarse");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-3xl shadow-xl text-left relative w-[90%] max-w-md"
      >
        <img
          src="/imgregistro.png"
          alt="Mascotas"
          className="w-full h-40 object-contain -mt-16"
        />
        <div className="space-y-3 mt-2">
          <Input name="nombre" label="Nombre" value={formData.nombre} onChange={handleChange} />
          <Input name="apellido" label="Apellido" value={formData.apellido} onChange={handleChange} />
          <Input name="telefono" label="Teléfono" value={formData.telefono} onChange={handleChange} />
          <Input name="email" label="E-Mail" value={formData.email} onChange={handleChange} />
          <Input name="password" label="Contraseña" value={formData.password} onChange={handleChange} type="password" />
        </div>
        <button
          type="submit"
          className="bg-lime-300 hover:bg-lime-400 text-black font-bold w-full py-2 mt-6 rounded-full transition"
        >
          ENVIAR
        </button>
      </form>
    </div>
  );
}

function Input({
  name,
  label,
  value,
  onChange,
  type = "text",
}: {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-semibold">{label}:</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="border-b border-gray-400 focus:outline-none focus:border-lime-400 py-1"
      />
    </div>
  );
}
