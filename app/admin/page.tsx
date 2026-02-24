import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getAdminMetadata } from '../lib/metadata';

export const metadata: Metadata = getAdminMetadata();

const AdminPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-red-600 selection:text-white">
      <Header />
      
      <main className="flex-grow pt-20 pb-24">
        <section className="pt-32 bg-white min-h-screen">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-black text-neutral-900 uppercase tracking-tighter mb-6">
                Admin <span className="text-red-600">Paneel</span>
              </h1>
              <p className="text-neutral-500 text-xl font-medium max-w-2xl mx-auto mb-12">
                Dit is het admin- paneel voor inloggen en beheer van boekingen.
              </p>
              
              <div className="bg-neutral-50 p-12 border border-neutral-200 rounded-sm max-w-md mx-auto">
                <p className="text-neutral-600 font-semibold mb-6">
                  Admin-functionaliteit is in ontwikkeling. Dit zal in een toekomstige update beschikbaar zijn.
                </p>
                <a 
                  href="tel:+31638356569"
                  className="bg-red-600 text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-red-700 transition-all inline-block rounded-sm"
                >
                  Neem contact op
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AdminPage;
