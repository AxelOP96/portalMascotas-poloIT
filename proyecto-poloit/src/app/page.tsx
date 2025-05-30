"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans relative overflow-hidden">
      <Navbar />

      <main className="flex-grow flex flex-col justify-center items-center relative">
        <Image
          src="/mihogar-logo.png"
          alt="Logo MiHogar"
          width={800}
          height={200}
          className="z-10"
        />

        <div className="absolute top-[80px] left-[10px] opacity-180">
        <Image src="/huellas-left.png" alt="Huellas izquierda" width={160} height={60} />
        </div>
        <div className="absolute bottom-[80px] right-[10px] opacity-180">
        <Image src="/huellas-right.png" alt="Huellas izquierda" width={160} height={60} />

        </div>
      </main>

      <footer className="w-full h-[100px] bg-[#3fc5ad] rounded-t-[100px]" />
    </div>
  );
}
