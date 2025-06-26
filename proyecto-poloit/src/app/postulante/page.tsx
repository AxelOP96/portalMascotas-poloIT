"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CargarMascota() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isPostulante, setIsPostulante] = useState(false);

  const [form, setForm] = useState({
    nombre: "",
    edad: "",
    barrio: "",
    personalidad: "",
    descripcion: "",
    imagen: "",
    peso: "",
    estatura: "",
    estadoSalud: "",
    sexo: "Macho",
    raza: "",
    etapaDeVida: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Debes iniciar sesión para acceder a esta página.");
      router.push("/");
      return;
    }

    fetch("http://localhost:5000/api/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.role !== "postulante") {
          alert("Solo los usuarios postulantes pueden cargar mascotas.");
          router.push("/");
        } else {
          setIsPostulante(true);
        }
      })
      .catch(() => {
        alert("Sesión inválida. Iniciá sesión nuevamente.");
        router.push("/");
      })
      .finally(() => setLoading(false));
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:5000/api/auth/mis-peluditos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) {
      alert("¡Peludito cargado con éxito!");
      router.push("/");
    } else {
      alert(data.msg || "Error al cargar el peludito.");
    }
  };

  if (loading) return <p className="text-center mt-10">Cargando...</p>;
  if (!isPostulante) return null;

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4 max-w-xl mx-auto postulation">
      <h1 className="text-2xl font-bold mb-4">Cargar nuevo peludito 🐶</h1>
      <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
      <input name="edad" placeholder="Edad" value={form.edad} onChange={handleChange} required />
      <input name="barrio" placeholder="Barrio" value={form.barrio} onChange={handleChange} required />
      <input name="personalidad" placeholder="Personalidad" value={form.personalidad} onChange={handleChange} required />
      
      <input name="imagen" placeholder="URL de imagen" value={form.imagen} onChange={handleChange} required />
      <input name="peso" placeholder="Peso" value={form.peso} onChange={handleChange} required />
      <input name="estatura" placeholder="Estatura" value={form.estatura} onChange={handleChange} required />
      <input name="estadoSalud" placeholder="Estado de salud" value={form.estadoSalud} onChange={handleChange} required />
      <select name="sexo" value={form.sexo} onChange={handleChange}>
        <option value="Macho">Macho</option>
        <option value="Hembra">Hembra</option>
      </select>
      <input name="raza" placeholder="Raza" value={form.raza} onChange={handleChange} required />
      <input name="etapaDeVida" placeholder="Etapa de vida (Cachorro, Adulto, Senior)" value={form.etapaDeVida} onChange={handleChange} required />
      <textarea name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={handleChange} required />
      <button type="submit" className="bg-lime-500 hover:bg-lime-600 text-white px-4 py-2 rounded">
        Cargar Peludito
      </button>
    </form>
  );
}
