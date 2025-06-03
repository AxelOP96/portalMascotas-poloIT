"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full z-50 bg-[#3fc5ad] text-white pt-4 pb-6">
      

      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        {/* Izquierda: Logo y redes */}
        <div className="flex items-center gap-4">
          <Image src="/mihogar-logo-mini.png" alt="MiHogar Logo" width={100} height={40} />
          <div className="flex gap-2">
            <Image src="/wpp.svg" alt="WhatsApp" width={30} height={30} />
            <Image src="/ig.svg" alt="Instagram" width={30} height={30} />
            <Image src="/fbk.svg" alt="Facebook" width={15} height={15} />
          </div>
        </div>

        {/* Centro: navegación */}
        <div className="flex gap-6 font-bold text-white text-sm md:text-base mt-4 md:mt-0">
          <Link href="#inicio">Inicio</Link>
          <Link href="#peluditos">Ver Peluditos</Link>
          <Link href="#donaciones">Donar</Link>
        </div>

        {/* Derecha: contacto */}
        <div className="text-right text-xs md:text-sm mt-4 md:mt-0">
          <p>Av. Santa fe 6202 5D</p>
          <p>Buenos Aires</p>
          <p>+59 11 25897046</p>
          <p>informihogar@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
