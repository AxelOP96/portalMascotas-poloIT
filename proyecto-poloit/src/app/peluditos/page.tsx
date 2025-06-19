"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../components/Navbar";
interface Peludito {
  _id: string;
  nombre: string;
  edad: string;
  barrio: string;
  descripcion: string;
  imagen: string;
}

async function getPeludito(id: string): Promise<Peludito | null> {
  try {
    const res = await fetch(`http://localhost:5000/api/peluditos/${id}`, {
      cache: "no-store"
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export default async function PeluditosPage({ params }: { params: { id: string } }) {
  const peludito = await getPeludito(params.id);
  if (!peludito) return notFound();

  return (
    <div className="p-8 pt-24 max-w-2xl mx-auto text-center bg-white rounded shadow">
      <Image src={peludito.imagen} alt={peludito.nombre} width={400} height={300} className="mx-auto rounded-lg" />
      <h1 className="text-3xl font-bold mt-4">{peludito.nombre}</h1>
      <p className="text-lg mt-2">{peludito.edad} - {peludito.barrio}</p>
      <p className="mt-2">{peludito.descripcion}</p>
    </div>
  );
}