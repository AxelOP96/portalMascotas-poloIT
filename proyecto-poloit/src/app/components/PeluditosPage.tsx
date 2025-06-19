import Image from "next/image";
import Link from "next/link";
import "./../styles/PeluditosPage.css";

const peluditos = [
    {
        id: "apolo",
        nombre: "APOLO",
        edad: "8 años",
        barrio: "Caballito",
        personalidad: "Cariñoso",
        img: "/assets/1.jpg"
    },
    {
        id: "dana",
        nombre: "DANA",
        edad: "3 años",
        barrio: "Palermo",
        personalidad: "Amistosa",
        img: "/assets/2.jpg"
    },
    {
        id: "kira",
        nombre: "KIRA",
        edad: "5 meses",
        barrio: "Monserrat",
        personalidad: "Tímido",
        img: "/assets/3.jpg"
    },
    {
        id: "pichon",
        nombre: "PICHON",
        edad: "3 años",
        barrio: "Caballito",
        personalidad: "Juguetón",
        img: "/assets/4.jpg"
    },
    {
        id: "tati",
        nombre: "TATI",
        edad: "2 años",
        barrio: "Caballito",
        personalidad: "Dulce",
        img: "/assets/5.jpg"
    },
    {
        id: "sasha",
        nombre: "SASHA",
        edad: "3 años",
        barrio: "Caballito",
        personalidad: "Cariñosa",
        img: "/assets/6.jpg"
    }
];

export default function PeluditosPage() {
    return (
        <>
            {/* Huellas decorativas */}
            <div className="huellas-left">
                <Image src="/huellas-left.png" alt="Huellas izquierda" width={120} height={120} />
            </div>
            <div className="huellas-right">
                <Image src="/huellas-right.png" alt="Huellas derecha" width={120} height={120} />
            </div>

            <div className="peluditos-container">
                {peluditos.map((p) => (
                    <div key={p.id} className="peludito-card">
                        <Image src={p.img} alt={p.nombre} width={300} height={200} className="peludito-img" />
                        <h3>{p.nombre}</h3>
                        <div className="peludito-info">
                            <span>📅 {p.edad}</span>
                            <span>📍 {p.barrio}</span>
                            <span>🤍 {p.personalidad}</span>
                        </div>
                        <Link href={`/peluditos/${p.id}`}>
                            <button className="conocer-btn">CONOCER 🐾</button>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}
