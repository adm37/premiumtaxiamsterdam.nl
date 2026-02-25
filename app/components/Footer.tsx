'use client';

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3 text-left">
              <div className="flex flex-col items-center font-black text-red-600 leading-none">
                <span>X</span>
                <span>X</span>
                <span>X</span>
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase">Premium Taxi<span className="text-red-600"> Amsterdam</span></span>
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed font-medium">
              Uw partner voor betrouwbaar en luxe vervoer in de hoofdstad. Dag en nacht, door weer en wind.
            </p>
          </div>
          
          <div>
            <h4 className="font-black uppercase tracking-widest text-xs text-red-600 mb-8">Wij Rijden in</h4>
            <ul className="space-y-4 text-neutral-400 font-bold uppercase text-[11px] tracking-[0.2em]">
              <li><Link href="/amsterdam-centrum" className="hover:text-white transition-colors">AMSTERDAM CENTRUM</Link></li>
              <li><Link href="/amsterdam-noord" className="hover:text-white transition-colors">AMSTERDAM NOORD</Link></li>
              <li><Link href="/amsterdam-west" className="hover:text-white transition-colors">AMSTERDAM WEST</Link></li>
              <li><Link href="/amsterdam-zuid" className="hover:text-white transition-colors">AMSTERDAM ZUID</Link></li>
              <li><Link href="/ijburg" className="hover:text-white transition-colors">IJBURG</Link></li>
              <li><Link href="/diemen" className="hover:text-white transition-colors">DIEMEN</Link></li>
              <li><Link href="/de-pijp" className="hover:text-white transition-colors">DE PIJP</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-xs text-red-600 mb-8">Snelkoppelingen</h4>
            <ul className="space-y-4 text-neutral-400 font-bold uppercase text-[11px] tracking-[0.2em]">
              <li><a href="tel:+31638356569" className="hover:text-white transition-colors text-left font-black text-red-600">NU BELLEN</a></li>
              <li><Link href="/schiphol" className="hover:text-white transition-colors text-left">SCHIPHOL TARIEVEN</Link></li>
              <li><a href="#diensten" className="hover:text-white transition-colors">ZAKELIJK VERVOER</a></li>
              <li><Link href="/contact" className="hover:text-white transition-colors text-left">CONTACT</Link></li>
            </ul>
          </div>

          <div id="contact-footer" className="scroll-mt-24">
            <h4 className="font-black uppercase tracking-widest text-xs text-red-600 mb-8">Contact</h4>
            <ul className="space-y-6 text-neutral-200 font-black italic">
              <li>
                <span className="block text-[10px] not-italic font-bold text-neutral-600 uppercase mb-1">Directe Lijn</span>
                <a href="tel:+31638356569" className="text-2xl tracking-tighter">+31 6 38 35 65 69</a>
              </li>
              <li>
                <span className="block text-[10px] not-italic font-bold text-neutral-600 uppercase mb-1">E-mail</span>
                <a href="mailto:INFO@PREMIUMTAXIAMSTERDAM.NL" className="text-lg tracking-tighter hover:text-red-600 transition-colors">INFO@PREMIUMTAXIAMSTERDAM.NL</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600">
          <p>© 2026 Premium Taxi Amsterdam. TX KEURMERK</p>
          <div className="flex gap-8 items-center">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Voorwaarden</a>
            <Link href="/admin" className="opacity-30 hover:opacity-100 transition-opacity flex items-center gap-1 border border-neutral-800 px-2 py-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              ADMIN
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

