'use client';

import React from 'react';

const services = [
  {
    title: "Schiphol Service",
    description: "Vaste lage prijzen vanaf Amsterdam-Centrum, West, Zuid en Oost direct naar de vertrekhal.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3.5s-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.9-.2-1.8.3-2 1.1-.3.9.2 1.9 1.1 2.1l8.4 1.8v5.1l-2.2 1.3c-.5.3-.8.8-.8 1.4v.5c0 .3.2.5.5.5h6c.3 0 .5-.2.5-.5v-.5c0-.6-.3-1.1-.8-1.4l-2.2-1.3v-5.1" />
      </svg>
    ),
    price: "Vast €55"
  },
  {
    title: "Grachtenrit",
    description: "Wij navigeren moeiteloos door de smalste straatjes van de Jordaan en de 9 straatjes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M3 12h18M3 16h18M6 12v4M10 12v4M14 12v4M18 12v4M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8" />
        <path d="M3 20h18" opacity="0.3" />
      </svg>
    ),
    price: "Vanaf €15"
  },
  {
    title: "Zuidas Business",
    description: "Stipt en representatief vervoer voor uw zakelijke afspraken in het financiële hart van de stad.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <rect x="3" y="7" width="18" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
    price: "Op rekening"
  },
  {
    title: "Nachtvervoer",
    description: "Veilig naar huis na een avondje in de Pijp, op het Rembrandtplein of bij het Leidseplein.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        <path d="M19 3v4M21 5h-4" opacity="0.5" />
      </svg>
    ),
    price: "24/7 Service"
  }
];

const Services: React.FC = () => {
  return (
    <section id="diensten" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-red-600 font-black tracking-widest uppercase text-xs mb-2">Wat we doen</div>
            <h2 className="text-5xl font-black text-neutral-900 uppercase tracking-tighter italic">Altijd de <span className="text-red-600">Juiste</span> Rit</h2>
          </div>
          <p className="text-neutral-500 text-lg max-w-sm font-medium">
            Betrouwbaar, snel en met de typische Amsterdamse mentaliteit: we fixen het voor u.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="group p-10 bg-white border border-neutral-100 hover:border-red-600 transition-all duration-300 shadow-sm hover:shadow-2xl relative overflow-hidden">
              {/* Subtle background decorative element */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-600/5 rounded-full group-hover:bg-red-600/10 transition-colors"></div>
              
              <div className="w-12 h-12 mb-8 text-neutral-900 group-hover:text-red-600 transition-colors">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">{service.title}</h3>
              <p className="text-neutral-500 mb-8 leading-relaxed font-medium text-sm">
                {service.description}
              </p>
              
              <div className="flex justify-between items-center pt-6 border-t border-neutral-50">
                <span className="font-black text-red-600 uppercase text-xs tracking-widest bg-red-50 px-3 py-1 rounded-full">{service.price}</span>
                <span className="text-neutral-300 group-hover:text-red-600 group-hover:translate-x-1 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
