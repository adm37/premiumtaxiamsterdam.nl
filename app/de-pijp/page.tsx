import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { getLocationMetadata } from '../lib/metadata';

export const metadata: Metadata = getLocationMetadata('De Pijp', '/de-pijp');

export default function DePijpPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-red-600 selection:text-white">
      <Header />
      
      <main className="flex-grow pt-20">
        <section className="pt-32 pb-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-sm font-black text-xs uppercase tracking-widest mb-4">
                  De Pijp
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-neutral-900 uppercase tracking-tighter mb-6">
                  Taxi De <span className="text-red-600">Pijp</span>
                </h1>
                <p className="text-neutral-500 text-lg md:text-xl font-medium max-w-3xl">
                  Premium Taxi Amsterdam is uw betrouwbare taximaatschappij in De Pijp. Snel vervoer naar of vanuit dit drukke wijkje met de Albert Cuyp Markt.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-neutral-50 p-8 rounded-sm border border-neutral-200">
                  <h2 className="text-2xl font-black text-neutral-900 uppercase tracking-tighter mb-6">Service in De Pijp</h2>
                  <ul className="space-y-4 text-neutral-600 font-medium">
                    <li className="flex gap-3">
                      <span className="text-red-600 font-black">✓</span>
                      <span>Snelle pick-up in het wijkje</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-600 font-black">✓</span>
                      <span>Prima voor uit eten en nachtleven</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-600 font-black">✓</span>
                      <span>Veilig thuisvervoer na avond</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-600 font-black">✓</span>
                      <span>Naar Schiphol en stations</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-600 font-black">✓</span>
                      <span>24/7 beschikbaar</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-600 text-white p-8 rounded-sm">
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-6">Nu Bellen</h3>
                  <p className="text-white/90 font-medium mb-8">
                    Bel ons nu voor een rit in De Pijp. Wij zijn er altijd voor u.
                  </p>
                  <a href="tel:+31638356569" className="block bg-white text-red-600 px-6 py-4 font-black text-xl uppercase tracking-widest hover:bg-neutral-100 transition-colors text-center rounded-sm mb-4">
                    +31 6 38 35 65 69
                  </a>
                  <Link href="/reserveren" className="block bg-white/20 text-white px-6 py-4 font-black uppercase tracking-widest hover:bg-white/30 transition-colors text-center rounded-sm">
                    Online Boeken
                  </Link>
                </div>
              </div>

              <div className="bg-neutral-900 text-white p-8 rounded-sm mb-16">
                <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">Taxi Service De Pijp</h2>
                <p className="text-neutral-300 leading-relaxed mb-6">
                  De Pijp is één van de gezelligste wijken van Amsterdam. Met de beroemde Albert Cuyp Markt, leuke restaurants en hip nachtleven is het hier altijd druk. Premium Taxi Amsterdam helpt u snel en veilig van plek naar plek in De Pijp.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  Of u nu naar het Rembrandtplein gaat, naar huis na een etentje, of snel naar Schiphol moet - wij zijn uw betrouwbare chauffeur in De Pijp.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/amsterdam-centrum" className="p-6 border border-neutral-200 hover:border-red-600 hover:shadow-lg transition-all rounded-sm">
                  <h3 className="font-black text-neutral-900 uppercase tracking-tighter mb-2">Amsterdam Centrum</h3>
                  <p className="text-sm text-neutral-500">Taxi service in Centrum</p>
                </Link>
                <Link href="/amsterdam-west" className="p-6 border border-neutral-200 hover:border-red-600 hover:shadow-lg transition-all rounded-sm">
                  <h3 className="font-black text-neutral-900 uppercase tracking-tighter mb-2">Amsterdam West</h3>
                  <p className="text-sm text-neutral-500">Taxi service in Amsterdam West</p>
                </Link>
                <Link href="/ijburg" className="p-6 border border-neutral-200 hover:border-red-600 hover:shadow-lg transition-all rounded-sm">
                  <h3 className="font-black text-neutral-900 uppercase tracking-tighter mb-2">IJburg</h3>
                  <p className="text-sm text-neutral-500">Taxi service in IJburg</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
