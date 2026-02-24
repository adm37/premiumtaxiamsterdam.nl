import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-red-600 selection:text-white">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <div className="bg-black py-12 relative z-20 overflow-hidden">
          <div className="container mx-auto px-6 flex flex-wrap justify-between items-center gap-8 relative z-10">
            <div className="flex items-center gap-4">
              <span className="text-red-600 text-4xl font-black">XXX</span>
              <p className="text-white font-bold max-w-[200px] leading-tight text-sm uppercase tracking-widest">
                Betrouwbaar & Professioneel Vervoer
              </p>
            </div>
            <div className="h-12 w-[1px] bg-white/10 hidden lg:block"></div>
            <div className="text-center">
              <p className="text-red-600 font-black text-3xl">10 MIN</p>
              <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Gem. Aanrijtijd</p>
            </div>
            <div className="text-center">
              <p className="text-white font-black text-3xl">4.9/5</p>
              <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Klantwaardering</p>
            </div>
            <div className="text-center">
              <p className="text-white font-black text-3xl">100%</p>
              <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Elektrisch vloot</p>
            </div>
          </div>
        </div>

        <Services />

        <section className="py-24 bg-white overflow-hidden relative border-t border-neutral-100">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div>
                <div className="text-red-600 font-black tracking-widest uppercase text-xs mb-4">Onze Garantie</div>
                <h2 className="text-5xl font-black leading-none uppercase tracking-tighter mb-6 text-neutral-900">
                  Geen Omwegen, <br />Gewoon <span className="text-red-600 underline decoration-4 underline-offset-8">Rechttoe Rechtaan</span>
                </h2>
                <p className="text-neutral-500 text-xl leading-relaxed font-medium">
                  Amsterdam is druk genoeg. Wij zorgen voor een soepele rit zonder gezeur. Of u nu naar Carré moet of een vroege vlucht vanaf Schiphol heeft.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: "Direct Contact", desc: "Geen keuzemenu's. U krijgt direct een Amsterdamse centralist aan de lijn." },
                  { title: "Luxe Vloot", desc: "Uitsluitend jonge Mercedes en Tesla modellen. Schoon en comfortabel." },
                  { title: "Vaste Prijzen", desc: "Transparant en eerlijk. Weet vooraf precies wat u betaalt." },
                  { title: "Lokale Kennis", desc: "Onze chauffeurs kennen elk Amsterdams paaltje en elke sluiproute." }
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <h4 className="font-black text-neutral-900 uppercase tracking-tighter text-lg flex items-center gap-2">
                      <span className="text-red-600">/</span> {item.title}
                    </h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-red-600/5 rounded-sm"></div>
              <img 
                src="https://i.ibb.co/rKHGhjD2/4f822f20-0b70-49d8-96e9-d752c2979d34.png" 
                alt="Amsterdam Elite Taxi Premium Bus Service" 
                className="relative z-10 w-full h-auto rounded-sm shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </section>

        <section className="py-32 bg-black relative overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.pexels.com/photos/1414467/pexels-photo-1414467.jpeg?_gl=1*v69yom*_ga*MTI5MjAxNTE0Ni4xNzY2NDg3MDY0*_ga_8JE65Q40S6*czE3Njg0MzIyODMkbzgkZzEkdDE3Njg0MzIyOTIkajUxJGwwJGgw" 
              alt="Amsterdam Taxi Night Street" 
              className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black"></div>
          </div>

          <div className="container mx-auto px-6 text-center space-y-8 relative z-10">
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none shadow-black drop-shadow-2xl">
              Geen Gedoe, <br /><span className="text-red-600 italic">Direct Op Pad.</span>
            </h2>
            <p className="text-neutral-200 text-xl max-w-2xl mx-auto font-black leading-relaxed drop-shadow-lg uppercase tracking-wider">
              Bel ons voor een directe pick-up binnen 10 minuten in heel Amsterdam.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <a 
                href="tel:+31638356569"
                className="bg-red-600 text-white px-12 py-6 font-black text-2xl uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-2xl transform hover:-translate-y-2 inline-block text-center"
              >
                Nu Bellen: +31638356569
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
