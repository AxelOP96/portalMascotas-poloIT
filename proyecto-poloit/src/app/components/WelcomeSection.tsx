"use client";
import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section className="bg-white relative px-6 md:px-16 py-12 text-center text-black">
      {/* Huellas Izquierda */}
      <div className="absolute top-0 left-0 opacity-20">
        <Image src="/huellas-left.png" alt="Huellas" width={120} height={120} />
      </div>

      {/* Huellas Derecha */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <Image src="/huellas-right.png" alt="Huellas" width={120} height={120} />
      </div>

      <h1 className="text-3xl md:text-5xl font-bold mb-6">Bienvenido a Mihogar</h1>

      <p className="text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
        Aquí comienzan las historias más lindas. Cada patita que ves está buscando un lugar lleno de amor... 
        y tú podrías ser ese hogar que tanto esperan.
      </p>

      <p className="text-lg font-semibold text-gray-800 mb-8">
        <span className="font-bold text-black">Adoptar no solo cambia una vida, transforma la tuya también.</span>
      </p>

      <div className="flex justify-center items-center mb-8">
        <Image
          src="/Logo Animalitos.png" // usá la imagen del corazón
          alt="Ilustración perro y gato"
          width={180}
          height={180}
        />
      </div>

      <p className="text-base md:text-lg max-w-lg mx-auto text-gray-700">
        Descubrí a tu nuevo compañero y abrile la puerta a una amistad para siempre.
      </p>

      {/* Perrito a la derecha */}
      <div className="absolute bottom-0 right-[10%] hidden md:block">
        <Image
          src="/perro.png" // tu imagen del perro
          alt="Perrito"
          width={180}
          height={180}
        />
      </div>
    </section>
  );
}
