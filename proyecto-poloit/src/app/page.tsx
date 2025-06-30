"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WelcomeSection from "./components/WelcomeSection";
import AdoptionRequirements from "./components/AdoptionRequirements";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans relative overflow-hidden pb-[100px]">
      <Navbar />

      {/* <header className="bg-[#3fc5ad] w-full py-4 px-8 flex justify-between items-center text-white clip-path-custom">
        <Image src="/mihogar-logo-mini.png" alt="MiHogar" width={120} height={40} />
        <a href="#peluditos" className="font-bold text-sm uppercase tracking-wide">Ver Peluditos</a>
      </header> */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 100" className="w-full h-[60px]" preserveAspectRatio="none">
          <path fill="#ffffff" d="M0,0 C360,100 1080,0 1440,100 L1440,0 L0,0 Z"></path>
        </svg>
      </div>
      <main className="flex-grow flex flex-col justify-center items-center relative pt-[120px]">
        <Image
          src="/mihogar-logo.png"
          alt="Logo MiHogar"
          width={800}
          height={200}
          className="z-10 w-[80%] max-w-[400px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px]"
        />


        <div className="hidden lg:block absolute top-[80px] left-[10px]">
          <Image src="/huellas-left.png" width={160} height={60} alt="Huellas izquierda" />
        </div>

        <div className="hidden lg:block absolute bottom-[80px] right-[10px]">
          <Image src="/huellas-right.png" width={160} height={60} alt="Huellas derecha" />
        </div>

        <div className="w-full overflow-hidden leading-none -mb-[1px]">
          <svg viewBox="0 0 1440 120" className="w-full h-[80px]" preserveAspectRatio="none">
            <path fill="#ffffff" d="M0,0 C360,100 1080,0 1440,100 L1440,120 L0,120 Z"></path>
          </svg>
        </div>
      </main>
      <WelcomeSection />
      <AdoptionRequirements />
      {/* <footer className="fixed bottom-0 w-full h-[100px] bg-[#3fc5ad] rounded-t-[100px] z-50" /> */}
      <Footer />

    </div>
  );
}
