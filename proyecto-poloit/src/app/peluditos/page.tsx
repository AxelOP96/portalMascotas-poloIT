"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
interface Peludito {
  _id: string;
  nombre: string;
  edad: string;
  barrio: string;
  descripcion: string;
  imagen: string;
}
export default function PeluditosPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/peluditos")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans relative overflow-hidden pb-[100px]">
      <Navbar />
      <div className="p-8 pt-24">

        <h1 className="text-3xl font-bold mb-6 text-center">Nuestros Peluditos</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((p) => (
            <div key={p.id} className="border p-4 rounded-xl shadow text-center bg-white">
              <Image src={p.imagen} alt={p.nombre} width={300} height={200} className="rounded-md" />
              <h2 className="font-bold mt-2 text-lg">{p.nombre}</h2>
              <p>{p.edad} - {p.barrio}</p>
              <p>{p.descripcion}</p>
              <Link href={`/peluditos/${p._id}`}>
                <button className="mt-4 bg-lime-400 px-4 py-2 rounded-full font-bold">Conocer 🐾</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
