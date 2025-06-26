"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Peludito = {
  _id: string;
  nombre: string;
  imagen: string;
  edad: string;
  barrio: string;
};

export default function MisPeluditos() {
  const router = useRouter();
  const [peluditos, setPeluditos] = useState<Peludito[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Debes iniciar sesión.");
      router.push("/");
      return;
    }

    fetch("http://localhost:5000/api/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((user) => {
        if (user.role !== "postulante") {
          alert("Acceso denegado.");
          router.push("/");
        } else {
          fetch("http://localhost:5000/api/auth/postulante/mis-peluditos", {
            headers: { Authorization: `Bearer ${token}` },
          })
            .then((res) => res.json())
            .then(setPeluditos);
        }
      })
      .catch(() => {
        alert("Sesión inválida.");
        router.push("/");
      })
      .finally(() => setLoading(false));
  }, [router]);

  if (loading) return <p className="text-center mt-10">Cargando...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">🐾 Mis mascotas cargadas</h1>

      {peluditos.length === 0 ? (
        <p className="text-gray-600">Todavía no cargaste ningún peludito.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {peluditos.map((p) => (
            <li key={p._id} className="border p-4 rounded shadow-md">
              <img src={p.imagen} alt={p.nombre} className="w-full h-40 object-cover rounded mb-2" />
              <h2 className="text-xl font-semibold">{p.nombre}</h2>
              <p className="text-sm">Edad: {p.edad}</p>
              <p className="text-sm">Barrio: {p.barrio}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
