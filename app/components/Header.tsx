'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentView = pathname === '/' ? 'home' 
    : pathname.includes('/reserveren') ? 'reserveren'
    : pathname.includes('/schiphol') ? 'schiphol'
    : pathname.includes('/contact') ? 'contact'
    : pathname.includes('/admin') ? 'admin'
    : 'home';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Reserveren', href: '/reserveren' },
    { name: 'Schiphol Tarieven', href: '/schiphol' },
    { name: 'Contact', href: '/contact' }
  ];

  const getTextColor = () => {
    if (mobileMenuOpen) return 'text-white';
    if (isScrolled || currentView !== 'home') return 'text-neutral-900';
    return 'text-white';
  };
  
  const getSubTextColor = () => {
    if (mobileMenuOpen) return 'text-white/70';
    if (isScrolled || currentView !== 'home') return 'text-neutral-500';
    return 'text-white/70';
  };

  const getHeaderBackground = () => {
    if (mobileMenuOpen) return 'bg-neutral-900';
    if (isScrolled || currentView !== 'home') return 'bg-white shadow-md';
    return 'bg-transparent';
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${getHeaderBackground()}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 group text-left relative z-50">
            <div className="flex flex-col items-center leading-none font-black text-red-600 mr-1">
              <span>X</span>
              <span>X</span>
              <span>X</span>
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-black tracking-tighter uppercase transition-colors ${getTextColor()}`}>
                Premium Taxi<span className="text-red-600"> Amsterdam</span>
              </span>
              <span className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${getSubTextColor()}`}>Taxi Centrale</span>
            </div>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
            {menuItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className={`hover:text-red-600 transition-colors ${isScrolled || currentView !== 'home' ? 'text-neutral-700' : 'text-white'} ${pathname === item.href ? 'text-red-600' : ''}`}
              >
                {item.name}
              </Link>
            ))}
            <a 
              href="tel:+31638356569"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-sm font-black transition-all transform hover:scale-105 active:scale-95 shadow-lg inline-block"
            >
              NU BELLEN
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
             <div className="relative w-8 h-8 flex items-center justify-center">
               {mobileMenuOpen ? (
                 <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${getTextColor()}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                 </svg>
               ) : (
                 <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${getTextColor()}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                 </svg>
               )}
             </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-neutral-900 z-40 flex flex-col justify-center items-center transition-all duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col items-center gap-8 text-center">
          {menuItems.map((item, idx) => (
            <Link 
              key={item.name} 
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-black uppercase tracking-tighter text-white hover:text-red-600 transition-colors animate-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-8 animate-in slide-in-from-bottom-4 duration-500 delay-500">
            <a 
              href="tel:+31638356569"
              className="bg-red-600 text-white px-10 py-4 rounded-sm font-black text-xl uppercase tracking-widest shadow-[0_10px_30px_rgba(220,38,38,0.4)] block"
            >
              NU BELLEN
            </a>
          </div>
        </nav>
        
        {/* Decoration */}
        <div className="absolute bottom-10 left-0 right-0 text-center opacity-20">
            <div className="flex justify-center gap-2 font-black text-red-600 text-4xl italic">
              <span>X</span>
              <span>X</span>
              <span>X</span>
            </div>
        </div>
      </div>
    </>
  );
};

export default Header;
