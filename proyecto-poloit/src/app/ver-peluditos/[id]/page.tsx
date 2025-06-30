import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import "../../styles/DetallePeludito.css";

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
    <>
      {/* Patitas decorativas */}
      <div className="huellas-left">
        <Image src="/huellas-left.png" alt="Huellas izquierda" width={150} height={150} />
      </div>
      <div className="huellas-right">
        <Image src="/huellas-right.png" alt="Huellas derecha" width={150} height={150} />
      </div>

      <div className="detalle-container">
        <div
          className="detalle-card"
          style={{ boxShadow: "3px 5px 38.8px 0px #40C4AE" }}
        >
          <div className="detalle-header">
            <h1>
              {peludito.nombre.toUpperCase()} <span>{sexoIcon}</span>
            </h1>
            <p className="text-md italic">{peludito.etapaDeVida}</p>
            <p className="text-sm">{peludito.raza}</p>
          </div>

          <p className="descripcion-texto">{peludito.descripcion}</p>

          <div className="info-cajas">
            <div className="info-caja">
              <p className="titulo">Edad</p>
              <p>📅 {peludito.edad}</p>
            </div>
            <div className="info-caja">
              <p className="titulo">Dirección</p>
              <p>📍 {peludito.barrio}</p>
            </div>
            <div className="info-caja">
              <p className="titulo">Personalidad</p>
              <p>💚 {peludito.personalidad}</p>
            </div>
          </div>

          <div className="detalle-img">
            <Image
              src={peludito.imagen}
              alt={peludito.nombre}
              width={400}
              height={300}
            />
          </div>

          <div className="detalle-extra">
            <p><strong>Peso:</strong> {peludito.peso}</p>
            <p><strong>Estatura:</strong> {peludito.estatura}</p>
            <p><strong>Estado de salud:</strong> {peludito.estadoSalud}</p>
          </div>

          <div className="detalle-botones">
            <Link href="/ver-peluditos">
              <button className="boton-volver">
                VOLVER ↩
              </button>
            </Link>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfZz3t2xvbtRPhO3Mz4MtWD2-ti9gTJJEYfAAtTvJ-Qc7jDBA/viewform">
              <button className="boton-adoptar">
                ADOPTAR 🐾
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
