"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans relative overflow-hidden">
      <header className="bg-[#3fc5ad] w-full py-4 px-8 flex justify-between items-center text-white">
        <Image src="/mihogar-logo-mini.png" alt="MiHogar" width={120} height={40} />
        <a href="#peluditos" className="font-bold text-sm uppercase tracking-wide">Ver Peluditos</a>
      </header>

      <main className="flex-grow flex flex-col justify-center items-center relative">
        
        <Image
          src="/mihogar-logo.png"
          alt="Logo MiHogar"
          width={400}
          height={200}
          className="z-10"
        />
        
        <div className="absolute top-[80px] left-[10px] opacity-30">
          <Image src="/huellas-left.png" alt="huellas" width={60} height={60} />
        </div>
        <div className="absolute bottom-[80px] right-[10px] opacity-30">
          <Image src="/huellas-right.png" alt="huellas" width={60} height={60} />
        </div>
      </main>

      
      <footer className="w-full h-[100px] bg-[#3fc5ad] rounded-t-[100px]" />
    </div>
  );
}
