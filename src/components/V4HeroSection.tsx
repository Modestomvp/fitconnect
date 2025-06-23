// src/components/V4HeroSection.tsx

import React from 'react';
import Image from 'next/image';
import { COLORS } from '@/constants/colors';

// --- Self-contained SVG logos for easy use ---

const XpLogo = () => (
  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center border-2 border-white shrink-0">
    <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.666 0.166626L7.24101 7.49996L11.666 14.8333H7.88334L3.45834 7.49996L7.88334 0.166626H11.666Z" fill="white"/>
        <path d="M16.7497 0.166626L12.3247 7.49996L16.7497 14.8333H20.533L16.108 7.49996L20.533 0.166626H16.7497Z" fill="white"/>
    </svg>
  </div>
);
const SpotifyLogo = () => (
    <div className="w-12 h-12 rounded-full bg-[#1DB954] flex items-center justify-center border-2 border-white shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M8 11.5c2.5-1 4.5-1.5 7-1"></path>
            <path d="M7 14.5c3-1 6-1.5 9-1"></path>
            <path d="M6 17.5c3.5-1 7-1.5 11-1"></path>
        </svg>
    </div>
);
const IFoodLogo = () => (
    <div className="w-12 h-12 rounded-full bg-[#EA1D2C] flex items-center justify-center border-2 border-white shrink-0">
        <svg viewBox="0 0 24 24" fill="white" height="24" width="24" xmlns="http://www.w3.org/2000/svg" >
            <path d="M6.618 17.44c-.22.5.151.999.682.999h5.399c.531 0 .902-.5.682-1l-3.382-6.319-3.381 6.32z"></path><path d="M11 8.5a.5.5 0 00-1 0v.643a1.5 1.5 0 00-1.415 1.488 1.5 1.5 0 003 0A1.5 1.5 0 0011 9.143V8.5zM10.5 10a.5.5 0 11-1 0 .5.5 0 011 0z"></path>
        </svg>
    </div>
);
const SicoobLogo = () => (
    <div className="w-12 h-12 rounded-full bg-[#00AEEF] flex items-center justify-center border-2 border-white shrink-0">
        <svg viewBox="0 0 45 45" fill="white" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5 0C10.0964 0 0 10.0964 0 22.5C0 34.9036 10.0964 45 22.5 45C34.9036 45 45 34.9036 45 22.5C45 10.0964 34.9036 0 22.5 0ZM28.875 32.625H16.125V28.875L28.875 16.125V32.625ZM28.875 12.375L16.125 25.125V12.375H28.875Z" />
        </svg>
    </div>
);


const StatCard = ({ value, text, className }: { value: string; text: string; className?: string }) => (
  <div className={`absolute bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/50 p-4 flex items-center gap-3 ${className}`}>
    <p className="text-primary text-2xl lg:text-3xl font-bold whitespace-nowrap">{value}</p>
    <p className="text-gray-700 text-sm leading-tight max-w-[130px]">{text}</p>
  </div>
);

const MobileStat = ({ value, text }: { value: string; text: string }) => (
    <div className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 w-full border border-gray-200/50">
        <p className="text-primary text-2xl font-bold">{value}</p>
        <p className="text-gray-800 text-sm">{text}</p>
    </div>
);

const V4HeroSection = () => {
  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/50 z-50">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div>
              <Image 
                src="/weelo-logo.png"
                alt="Weelo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-gray-700 hover:text-primary transition-colors font-medium">
                Login
              </button>
              <button className="px-6 py-2 bg-primary hover:bg-primary-hover text-white font-medium rounded-lg transition-colors shadow-sm hover:shadow-md">
                Contato
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-white text-gray-900 overflow-x-hidden font-sans pt-16"> 
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-16 lg:gap-x-12">
          
          {/* Column 1: Text Content */}
          <div className="text-center lg:text-left">
            <p className="text-lg mb-4 text-gray-600">Procurando um Personal Trainer?</p>
            <h1 className="text-4xl md:text-5xl font-extrabold !leading-tight tracking-tight mb-8">
              Com o <span className="text-primary font-bold">Weelo</span> você encontra, agenda e paga treinos 100% on-line, em minutos.
            </h1>
            <ul className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-start items-center mb-8">
              <li className="bg-gray-100 rounded-full px-4 py-2 text-sm font-medium text-gray-700">+12 mil treinos concluídos</li>
              <li className="bg-gray-100 rounded-full px-4 py-2 text-sm font-medium text-gray-700">97% de satisfação dos alunos</li>
              <li className="bg-gray-100 rounded-full px-4 py-2 text-sm font-medium text-gray-700">Repasse em até 24h para o treinador</li>
            </ul>
            <button className="bg-primary hover:bg-primary-hover transition-colors text-white font-bold py-4 px-12 rounded-lg text-base uppercase shadow-md hover:shadow-lg transform hover:-translate-y-0.5 mb-6">
              Quero meu treino agora
            </button>
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-2">
              <img src="/apple.png" alt="Baixar na App Store" className="h-10" />
              <img src="/playstore.png" alt="Disponível no Google Play" className="h-10" />
            </div>
          </div>
          
          {/* Column 2: Image & Stats */}
          <div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-sm">
                  {/* The image is loaded from the /public folder */}
                  <Image 
                      src="/hero-woman-v4.png"
                      alt="Consultora da V4 Company sorrindo"
                      width={400}
                      height={500}
                      quality={100}
                      priority
                      className="w-full h-auto object-cover rounded-lg"
                  />
                  {/* Stat Cards: visible only on large screens */}
                  <StatCard value="+12" text="Anos de mercado" className="hidden lg:flex top-[25%] -right-8" />
                  <StatCard value="1.6 BI" text="Investimento em mídia feito para clientes" className="hidden lg:flex top-[55%] -left-12" />
                  <StatCard value="16 BI" text="Receita gerada a nossos clientes" className="hidden lg:flex bottom-[10%] -right-10" />
              </div>
            </div>

            {/* Stats for Mobile screens: visible only on small screens */}
             <div className="lg:hidden flex flex-col gap-4 w-full mt-8 max-w-md mx-auto">
                <MobileStat value="+12" text="Anos de mercado" />
                <MobileStat value="1.6 BI" text="Investimento em mídia feito para clientes" />
                <MobileStat value="16 BI" text="Receita gerada a nossos clientes" />
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  );
};

export default V4HeroSection;