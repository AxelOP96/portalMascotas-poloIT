
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface Peludito {
  _id: string;
  nombre: string;
  edad: string;
  barrio: string;
  personalidad: string;
  descripcion: string;
  imagen: string;
  peso: string;
  estatura: string;
  estadoSalud: string;
  sexo: string;
  raza: string;
  etapaDeVida: string;
}
async function getPeludito(id: string): Promise<Peludito | null> {
  try {
    const res = await fetch(`http://localhost:5000/peluditos/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
export default async function DetallePeludito({ params }: { params: { id: string } }) {
  const peludito = await getPeludito(params.id);

  if (!peludito) return notFound();
  const sexoIcon = peludito.sexo === "Macho" ? "♂️" : "♀️";

  return (
    <div className="min-h-screen bg-white font-sans py-12 px-4 md:px-8 lg:px-32">
      <div className="bg-white rounded-3xl shadow-lg border border-[#a7e4c4] p-8 md:p-12 relative">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-bold text-[#444]">
              {peludito.nombre.toUpperCase()} <span className="text-lg">{sexoIcon}</span>
            </h1>
            <p className="text-md text-[#444] italic">{peludito.etapaDeVida}</p>
            <p className="text-sm text-[#666]">{peludito.raza}</p>
          </div>
          <p className="mt-4 md:mt-0 text-[#333] max-w-xl">{peludito.descripcion}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-center">
          <div className="border-2 border-[#a7e4c4] p-4 rounded-xl">
            <p className="text-sm font-bold">Edad</p>
            <p className="text-lg">📅 {peludito.edad}</p>
          </div>
          <div className="border-2 border-[#a7e4c4] p-4 rounded-xl">
            <p className="text-sm font-bold">Dirección</p>
            <p className="text-lg">📍 {peludito.barrio}</p>
          </div>
          <div className="border-2 border-[#a7e4c4] p-4 rounded-xl">
            <p className="text-sm font-bold">Personalidad</p>
            <p className="text-lg">💚 {peludito.personalidad}</p>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Image
            src={peludito.imagen}
            alt={peludito.nombre}
            width={400}
            height={300}
            className="rounded-xl border shadow"
          />
        </div>

        <div className="mt-6 text-sm text-[#333] leading-relaxed">
          <p><strong>Peso:</strong> {peludito.peso}</p>
          <p><strong>Estatura:</strong> {peludito.estatura}</p>
          <p className="mt-2"><strong>Estado de salud:</strong> {peludito.estadoSalud}</p>
        </div>

        <div className="flex justify-center gap-6 mt-10">
          <Link href="/ver-peluditos">
            <button className="bg-lime-400 hover:bg-lime-500 transition px-6 py-3 rounded-full font-bold">
              VOLVER ↩
            </button>
          </Link>
          <Link  href="https://docs.google.com/forms/d/e/1FAIpQLSfZz3t2xvbtRPhO3Mz4MtWD2-ti9gTJJEYfAAtTvJ-Qc7jDBA/viewform">
            <button className="bg-lime-600 hover:bg-lime-700 transition text-white px-6 py-3 rounded-full font-bold">
            ADOPTAR 🐾
          </button>
          </Link>
          
        </div>

      </div>
    </div>
  );
}
