"use client"
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
//import peluditos from "@/app/data/peluditos.json";
import Image from "next/image";

export default function DetallePeludito() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [peludito, setPeludito] = useState<any>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/peluditos")
      .then(res => res.json())
      .then(data => {
        const encontrado = data.find((p: any) => p.id === id);
        setPeludito(encontrado);
      });
  }, [id]);

  if (!peludito) return <p>Cargando...</p>;

  return (
    <div className="p-8 pt-24 max-w-2xl mx-auto text-center bg-white rounded shadow">
      <Image src={peludito.imagen} alt={peludito.nombre} width={400} height={300} className="mx-auto rounded-lg" />
      <h1 className="text-3xl font-bold mt-4">{peludito.nombre}</h1>
      <p className="text-lg mt-2">{peludito.edad} - {peludito.barrio}</p>
      <p className="mt-2">{peludito.descripcion}</p>
    </div>
  );
}
