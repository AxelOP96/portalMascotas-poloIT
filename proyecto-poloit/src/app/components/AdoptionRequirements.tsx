"use client";
import Image from "next/image";

export default function AdoptionRequirements() {
  return (
    <section className="bg-[#f9f5ff] py-16 px-6 md:px-20 text-black relative">
      {/* Huellas decorativas */}
      <div className="absolute top-4 left-4 opacity-20">
        <Image src="/huellas-left.png" alt="Huellas izquierda" width={120} height={120} />
      </div>
      <div className="absolute bottom-4 right-4 opacity-20">
        <Image src="/huellas-right.png" alt="Huellas derecha" width={120} height={120} />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 relative z-10">
        {/* Columna izquierda */}
        <div className="flex flex-col items-center max-w-md text-center">
          <Image src="/family.png" alt="Familia feliz" width={300} height={300} />
          <button className="bg-lime-400 hover:bg-lime-500 text-black font-bold px-6 py-3 rounded-full mt-6 uppercase transition-all">
            Completa el formulario
          </button>
          <p className="mt-4 text-sm text-gray-700 max-w-sm">
            El refugio se contactará con usted para organizar la adopción.
          </p>
        </div>

        {/* Columna derecha */}
        <div className="bg-white border border-orange-200 p-8 rounded-lg shadow-md max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Requisitos para adoptar</h2>
          <ol className="list-decimal list-inside space-y-3 text-left text-sm text-gray-800">
            <li><strong>Compromiso a largo plazo:</strong> necesitas estar dispuesto a brindarle amor y atención, durante toda su vida.</li>
            <li><strong>Espacio adecuado:</strong> asegurate de tener el espacio adecuado para su comodidad.</li>
            <li><strong>Tiempo y dedicación:</strong> asegurate tener tiempo para ofrecerle sus paseos y espacios para jugar con ellos.</li>
            <li><strong>Salud y cuidados:</strong> llevarlos al veterinario, mantener sus vacunas al día y brindarles una dieta adecuada.</li>
            <li><strong>Responsabilidad:</strong> ser responsable de brindar bienestar y seguridad.</li>
            <li><strong>Acceso a alimentos:</strong> y agua fresca y limpia.</li>
            <li><strong>Amor y paciencia:</strong> ser paciente, adaptarse a su nuevo hogar y necesidades.</li>
          </ol>
          <div className="mt-6 flex justify-center">
            <button className="bg-lime-400 hover:bg-lime-500 px-6 py-2 text-sm font-semibold rounded-full text-black transition-all">
              Acepto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
