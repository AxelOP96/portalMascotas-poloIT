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
  const [showThanks, setShowThanks] = useState(true);

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
      .then((res) => {
        if (!res.ok) throw new Error("No autorizado");
        return res.json();
      })
      .then((user) => {
        if (user.role !== "postulante") {
          alert("Acceso denegado.");
          router.push("/");
        } else {
          fetch("http://localhost:5000/peluditos/mis-peluditos", {
            headers: { Authorization: `Bearer ${token}` },
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("Respuesta peluditos:", data);
              if (Array.isArray(data)) {
                setPeluditos(data);
              } else {
                throw new Error("Respuesta inválida del servidor");
              }
            });
        }
      })
      .catch(() => {
        router.push("/");
      })
      .finally(() => {
        setLoading(false);
        // Mostrar agradecimiento por 10 segundos
        setShowThanks(true);
        setTimeout(() => {
          setShowThanks(false);
          router.push("/");
        }, 10000);
      });
  }, [router]);

  if (loading) return <p className="text-center mt-10">Cargando...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto mt-30">
      {showThanks && (
        <div className="bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded mb-6 text-center">
          💚 <strong>¡Gracias por tu generosidad!</strong><br />
          Cada mascota que subís es una oportunidad para que un peludito encuentre un hogar lleno de amor.
          <br />
          Estamos profundamente agradecidos por tu compromiso en transformar vidas y ayudar a sacar animales de las calles.
        </div>
      )}

      <h1 className="text-2xl font-bold mb-6">🐾</h1>

      {peluditos.length === 0 ? (
        <p className="text-gray-600"></p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {peluditos.map((p) => (
            <li key={p._id} className="border p-4 rounded shadow-md">
              <img
                src={p.imagen}
                alt={p.nombre}
                className="w-full h-40 object-cover rounded mb-2"
              />
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
