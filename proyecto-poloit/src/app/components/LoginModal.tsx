"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
export default function LoginModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
    const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("token", data.token);
      alert("¡Sesión iniciada correctamente!");
      if (data.user.role === "postulante") {
        router.push("/postulante");
      } else {
        router.push("/ver-peluditos");
      }
      onClose();
      location.reload(); // o usar router.push si querés redirigir
    } else {
      alert(data.error || "Error al iniciar sesión");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-3xl shadow-xl text-left relative w-[90%] max-w-md"
      >
        <h2 className="text-xl font-bold mb-4">Iniciar sesión</h2>
        <div className="space-y-3">
          <Input name="email" label="E-Mail" value={formData.email} onChange={handleChange} />
          <Input name="password" label="Contraseña" type="password" value={formData.password} onChange={handleChange} />
        </div>
        <button
          type="submit"
          className="bg-violet-500 hover:bg-violet-600 text-white font-bold w-full py-2 mt-6 rounded-full transition"
        >
          INGRESAR
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
        className="border-b border-gray-400 focus:outline-none focus:border-violet-500 py-1"
      />
    </div>
  );
}
