'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

const BookingPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-red-600 selection:text-white">
      <Header />
      
      <main className="flex-grow pt-20">
        <section className="pt-32 pb-24 bg-neutral-50 min-h-screen">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="h-[2px] w-8 bg-red-600"></div>
                  <span className="text-red-600 font-black tracking-[0.3em] uppercase text-xs">Direct geregeld</span>
                  <div className="h-[2px] w-8 bg-red-600"></div>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-neutral-900 uppercase tracking-tighter mb-6">
                  Reserveer uw <span className="text-red-600">Rit</span>
                </h1>
                <p className="text-neutral-500 text-xl font-medium max-w-2xl mx-auto">
                  Vul uw gegevens in voor een vrijblijvende prijsopgave of directe boeking. Onze chauffeurs staan 24/7 voor u klaar.
                </p>
              </div>

              <div className="grid lg:grid-cols-5 gap-12 items-start">
                <div className="lg:col-span-3">
                  <div className="bg-white p-8 border border-neutral-200 rounded-sm shadow-lg">
                    <h2 className="text-3xl font-black text-neutral-900 uppercase tracking-tighter mb-6">Ritgegevens</h2>
                    
                    <div className="space-y-6">
                      <p className="text-neutral-600 text-lg font-medium">
                        Online boeken is momenteel in ontwikkeling. Voor nu kunt u direct contact opnemen voor boeking:
                      </p>
                      
                      <div className="bg-red-600 text-white p-8 rounded-sm text-center">
                        <p className="text-sm font-bold uppercase tracking-widest mb-4">Bel ons direct</p>
                        <a href="tel:+31638356569" className="text-4xl font-black italic hover:scale-105 transition-transform inline-block">
                          +31 6 38 35 65 69
                        </a>
                        <p className="text-white/80 text-xs mt-4 uppercase font-bold">Beschikbaar 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-2 space-y-8">
                  <div className="bg-neutral-900 text-white p-8 rounded-sm shadow-xl">
                    <h4 className="text-red-600 font-black uppercase tracking-widest text-xs mb-6 underline decoration-2 underline-offset-4">Waarom bij ons?</h4>
                    <ul className="space-y-6">
                      <li className="flex gap-4">
                        <span className="text-red-600 font-black">/</span>
                        <div>
                          <p className="font-black uppercase tracking-tight text-sm">Geen verborgen kosten</p>
                          <p className="text-neutral-400 text-xs mt-1">De prijs die u ziet is de prijs die u betaalt. Inclusief BTW en koffers.</p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="text-red-600 font-black">/</span>
                        <div>
                          <p className="font-black uppercase tracking-tight text-sm">Gratis annuleren</p>
                          <p className="text-neutral-400 text-xs mt-1">Tot 2 uur voor aanvang kosteloos wijzigen of annuleren.</p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="text-red-600 font-black">/</span>
                        <div>
                          <p className="font-black uppercase tracking-tight text-sm">Luxe wagenpark</p>
                          <p className="text-neutral-400 text-xs mt-1">Uitsluitend Mercedes E-Klasse, S-Klasse of Tesla Model Y.</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-neutral-200 p-8 rounded-sm">
                    <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-2">Hulp nodig?</p>
                    <a href="tel:+31638356569" className="text-2xl font-black text-neutral-900 italic hover:text-red-600 transition-colors block">+31 6 38 35 65 69</a>
                    <p className="text-neutral-500 text-xs mt-2 font-medium italic">Gemiddelde wachttijd: <span className="text-red-600">12 seconden</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BookingPage;
