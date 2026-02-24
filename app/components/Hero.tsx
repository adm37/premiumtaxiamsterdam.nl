'use client';

import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-32 pb-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/208733/pexels-photo-208733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Taxi Amsterdam - Uw betrouwbare partner voor stadsritten en Schiphol Taxi" 
          className="w-full h-full object-cover opacity-60 grayscale-[50%] hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center justify-center gap-4 mb-4">
             <div className="h-[2px] w-8 md:w-12 bg-red-600"></div>
             <span className="text-red-600 font-black tracking-[0.4em] uppercase text-[10px] md:text-sm">De elite taxi van Amsterdam</span>
             <div className="h-[2px] w-8 md:w-12 bg-red-600"></div>
          </div>
          
          <h1 className="text-5xl md:text-9xl font-black leading-none uppercase tracking-tighter text-white drop-shadow-2xl">
            Uw <span className="text-red-600 italic">Premium</span> <br /> 
            <span className="relative inline-block">
              Taxi Amsterdam
              <div className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-1 md:h-2 bg-red-600 opacity-50 skew-x-[-20deg]"></div>
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed font-medium uppercase tracking-wide px-4">
            Reis comfortabel door heel de stad en kies voor onze <strong className="text-white">Schiphol Taxi Airport</strong> service met vaste, scherpe tarieven.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center pt-8 px-4">
            <a 
              href="tel:+31638356569" 
              className="bg-red-600 text-white px-8 md:px-12 py-5 md:py-6 rounded-sm font-black text-lg md:text-xl uppercase tracking-widest hover:bg-white hover:text-black transition-all transform hover:-translate-y-2 shadow-[0_20px_50px_rgba(220,38,38,0.3)]"
            >
              NU BELLEN: +31638356569
            </a>
            <Link 
              href="/reserveren"
              className="bg-transparent border-2 border-white/30 backdrop-blur-md text-white px-8 md:px-12 py-5 md:py-6 rounded-sm font-black text-lg md:text-xl uppercase tracking-widest hover:bg-white hover:text-black transition-all transform hover:-translate-y-2 inline-block text-center"
            >
              ONLINE BOEKEN
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative Amsterdam Triple X - Floating Bottom Left */}
      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 hidden sm:flex flex-col gap-2 opacity-30 animate-pulse">
        <span className="text-white text-3xl md:text-5xl font-black italic">X</span>
        <span className="text-red-600 text-3xl md:text-5xl font-black italic">X</span>
        <span className="text-white text-3xl md:text-5xl font-black italic">X</span>
      </div>
    </section>
  );
};

export default Hero;
