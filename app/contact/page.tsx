'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-red-600 selection:text-white">
      <Header />
      
      <main className="flex-grow pt-20">
        <section className="pt-32 pb-24 bg-white min-h-screen">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="h-[2px] w-8 bg-red-600"></div>
                  <span className="text-red-600 font-black tracking-[0.3em] uppercase text-xs">24/7 Bereikbaar</span>
                  <div className="h-[2px] w-8 bg-red-600"></div>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-neutral-900 uppercase tracking-tighter mb-6">
                  Neem <span className="text-red-600">Contact</span> Op
                </h1>
                <p className="text-neutral-500 text-xl font-medium max-w-2xl mx-auto italic">
                  Vragen over een zakelijke rit, verloren voorwerpen of een speciale aanvraag? Wij staan u graag te woord.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Contact Information */}
                <div className="space-y-12">
                  <div className="space-y-8">
                    <div className="flex gap-6 group">
                      <div className="w-14 h-14 bg-black text-white flex items-center justify-center shrink-0 group-hover:bg-red-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-black uppercase tracking-tighter text-lg mb-1">Telefoon</h4>
                        <a href="tel:+31638356569" className="text-2xl font-black text-neutral-900 italic">+31 6 38 35 65 69</a>
                        <p className="text-neutral-400 text-xs mt-1 uppercase font-bold tracking-widest">Altijd een medewerker aan de lijn</p>
                      </div>
                    </div>

                    <div className="flex gap-6 group">
                      <div className="w-14 h-14 bg-black text-white flex items-center justify-center shrink-0 group-hover:bg-red-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-black uppercase tracking-tighter text-lg mb-1">E-mail</h4>
                        <a href="mailto:info@premiumtaxiamsterdam.nl" className="text-xl font-black text-red-600 uppercase hover:text-neutral-900 transition-colors">info@premiumtaxiamsterdam.nl</a>
                        <p className="text-neutral-400 text-xs mt-1 uppercase font-bold tracking-widest">Reactie binnen 4 uur</p>
                      </div>
                    </div>

                    <div className="flex gap-6 group">
                      <div className="w-14 h-14 bg-black text-white flex items-center justify-center shrink-0 group-hover:bg-red-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-black uppercase tracking-tighter text-lg mb-1">Locatie</h4>
                        <p className="text-lg font-black text-neutral-900 uppercase">Damrak 1, 1012 LG Amsterdam</p>
                        <p className="text-neutral-400 text-xs mt-1 uppercase font-bold tracking-widest">Kantoorbezoek op afspraak</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative h-[300px] bg-neutral-100 overflow-hidden rounded-sm group">
                    <img 
                      src="https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?q=80&w=1000&auto=format&fit=crop" 
                      alt="Amsterdam Map Style" 
                      className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-red-600 text-white p-4 font-black italic shadow-2xl animate-bounce">
                        WIJ ZIJN HIER
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-neutral-50 p-8 md:p-12 border border-neutral-100 shadow-2xl relative">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-red-600 flex items-center justify-center font-black text-white italic">
                    XXX
                  </div>
                  <h3 className="text-3xl font-black mb-8 uppercase tracking-tighter italic text-neutral-900">Stuur een bericht</h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-black text-red-600 uppercase tracking-[0.2em] mb-2">Naam</label>
                        <input type="text" placeholder="Uw naam" className="w-full bg-white border border-neutral-200 px-4 py-4 focus:outline-none focus:border-red-600 transition-all font-bold" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black text-red-600 uppercase tracking-[0.2em] mb-2">E-mailadres</label>
                        <input type="email" placeholder="Uw email" className="w-full bg-white border border-neutral-200 px-4 py-4 focus:outline-none focus:border-red-600 transition-all font-bold" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-red-600 uppercase tracking-[0.2em] mb-2">Onderwerp</label>
                      <select className="w-full bg-white border border-neutral-200 px-4 py-4 focus:outline-none focus:border-red-600 transition-all font-bold">
                        <option>Algemene vraag</option>
                        <option>Zakelijk account aanvragen</option>
                        <option>Verloren voorwerpen</option>
                        <option>Klacht over rit</option>
                        <option>Factuur opvragen</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-red-600 uppercase tracking-[0.2em] mb-2">Uw bericht</label>
                      <textarea rows={5} placeholder="Hoe kunnen we u helpen?" className="w-full bg-white border border-neutral-200 px-4 py-4 focus:outline-none focus:border-red-600 transition-all font-bold resize-none"></textarea>
                    </div>
                    <button className="w-full bg-black text-white font-black py-5 uppercase tracking-widest hover:bg-red-600 transition-all shadow-xl flex items-center justify-center gap-3 group">
                      VERZEND BERICHT
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </form>
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

export default ContactPage;
