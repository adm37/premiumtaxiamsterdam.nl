'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

const SchipholRatesPage = () => {
  const rates = [
    { region: "Amsterdam Centrum", car: "€60", bus: "€75" },
    { region: "Amsterdam Oost", car: "€55", bus: "€70" },
    { region: "Amsterdam Zuid", car: "€45", bus: "€55" },
    { region: "Amsterdam West", car: "€45", bus: "€55" },
    { region: "Amsterdam Noord", car: "€60", bus: "€75" },
    { region: "Amsterdam Zuidoost", car: "€55", bus: "€70" },
    { region: "Diemen / Duivendrecht", car: "€55", bus: "€70" },
    { region: "Weesp", car: "€55", bus: "€70" },
    { region: "Abcoude", car: "€65", bus: "€80" },
    { region: "Amstelveen", car: "€45", bus: "€55" },
    { region: "Aalsmeer", car: "€45", bus: "€55" },
    { region: "Hoofddorp", car: "€45", bus: "€55" },
    { region: "Zaandam / Zaandijk", car: "€60", bus: "€75" },
    { region: "Purmerend", car: "€75", bus: "€90" },
    { region: "Uithoorn / Kwakel", car: "€45", bus: "€55" },
    { region: "Volendam", car: "€90", bus: "€105" },
    { region: "Monnickendam", car: "€75", bus: "€95" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-red-600 selection:text-white">
      <Header />
      
      <main className="flex-grow pt-20">
        <section className="pt-32 pb-24 bg-white min-h-screen">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10 md:mb-16">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="h-[2px] w-8 bg-red-600"></div>
                  <span className="text-red-600 font-black tracking-[0.3em] uppercase text-xs">Transparant & Vast</span>
                  <div className="h-[2px] w-8 bg-red-600"></div>
                </div>
                <h1 className="text-4xl md:text-7xl font-black text-neutral-900 uppercase tracking-tighter mb-6">
                  Premium Taxi Amsterdam <span className="text-red-600 italic">Schiphol</span> Tarieven
                </h1>
                <p className="text-neutral-500 text-lg md:text-xl font-medium max-w-2xl mx-auto italic">
                  Boek uw <strong>Schiphol Taxi</strong> bij Premium Taxi Amsterdam. Wij bieden een betrouwbare <strong>Taxi Schiphol Airport</strong> service tegen vaste, lage prijzen.
                </p>
              </div>

              <div className="overflow-hidden border border-neutral-100 rounded-sm shadow-2xl">
                <table className="w-full text-left border-collapse table-fixed md:table-auto">
                  <thead>
                    <tr className="bg-black text-white uppercase text-[9px] md:text-[10px] tracking-widest font-black">
                      <th className="py-4 px-3 md:py-6 md:px-8 border-b border-white/10 w-[40%] md:w-auto">Regio</th>
                      <th className="py-4 px-2 md:py-6 md:px-8 border-b border-white/10 text-center w-[30%] md:w-auto">
                        <span className="md:hidden block">Auto<br/>1-4p</span>
                        <span className="hidden md:block">Personenauto (1-4p)</span>
                      </th>
                      <th className="py-4 px-2 md:py-6 md:px-8 border-b border-white/10 text-center w-[30%] md:w-auto">
                        <span className="md:hidden block">Bus<br/>5-7p</span>
                        <span className="hidden md:block">Taxibus (5-7p)</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    {rates.map((rate, index) => (
                      <tr key={index} className="hover:bg-red-50/30 transition-colors group">
                        <td className="py-4 px-3 md:py-5 md:px-8 font-black text-neutral-800 uppercase tracking-tighter text-xs md:text-sm truncate md:overflow-visible">
                          <span className="text-red-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity hidden md:inline">/</span>
                          {rate.region}
                        </td>
                        <td className="py-4 px-2 md:py-5 md:px-8 text-center font-black text-sm md:text-lg text-neutral-900 italic">{rate.car}</td>
                        <td className="py-4 px-2 md:py-5 md:px-8 text-center font-black text-sm md:text-lg text-red-600 italic">{rate.bus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-12 grid md:grid-cols-2 gap-8">
                <div className="bg-neutral-50 p-8 rounded-sm border-l-4 border-black">
                  <h2 className="font-black uppercase tracking-tighter text-lg mb-2">Waarom onze Schiphol Taxi service?</h2>
                  <ul className="text-sm text-neutral-500 space-y-2 font-medium">
                    <li>• <strong>Taxi Amsterdam Schiphol</strong> vaste tarieven</li>
                    <li>• 20 minuten gratis wachttijd na landing</li>
                    <li>• Hulp bij uw bagage door onze chauffeurs</li>
                    <li>• Uw <strong>Schiphol Taxi</strong> altijd op tijd</li>
                  </ul>
                </div>
                <div className="bg-red-600 text-white p-8 rounded-sm flex flex-col justify-center items-center text-center">
                  <p className="font-black uppercase tracking-widest text-xs mb-4">Taxi Schiphol Airport nodig?</p>
                  <a href="tel:+31638356569" className="text-3xl font-black italic tracking-tighter hover:scale-105 transition-transform">+31 6 38 35 65 69</a>
                  <p className="text-white/80 text-[10px] mt-4 font-bold uppercase tracking-widest">Uw Premium Taxi Amsterdam specialist is 24/7 bereikbaar</p>
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

export default SchipholRatesPage;
