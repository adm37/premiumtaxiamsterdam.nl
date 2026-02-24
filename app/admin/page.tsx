'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Dummy bookings data
  const [bookings] = useState([
    {
      id: 1,
      name: 'Jan Jansen',
      phone: '+31 6 12 34 56 78',
      email: 'jan@example.com',
      pickupLocation: 'Amsterdam Centrum',
      destination: 'Schiphol Airport',
      date: '2026-02-25',
      time: '14:00',
      passengers: 2,
      status: 'Bevestigd',
    },
    {
      id: 2,
      name: 'Maria Garcia',
      phone: '+31 6 87 65 43 21',
      email: 'maria@example.com',
      pickupLocation: 'De Pijp',
      destination: 'Amsterdam Centrum',
      date: '2026-02-25',
      time: '16:30',
      passengers: 1,
      status: 'In behandeling',
    },
    {
      id: 3,
      name: 'Peter Smith',
      phone: '+31 6 55 44 33 22',
      email: 'peter@example.com',
      pickupLocation: 'Amsterdam West',
      destination: 'Amsterdam ZuidOost',
      date: '2026-02-26',
      time: '09:00',
      passengers: 3,
      status: 'Gereed',
    },
  ]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple hardcoded credentials for demo
    if (username === 'admin' && password === 'premium123') {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Ongeldige inloggegevens');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-white flex flex-col selection:bg-red-600 selection:text-white">
        <Header />

        <main className="flex-grow pt-20 pb-24">
          <section className="pt-32 bg-neutral-50 min-h-screen">
            <div className="container mx-auto px-6">
              <div className="max-w-md mx-auto">
                <div className="bg-white p-12 border border-neutral-200 rounded-sm shadow-lg">
                  <h1 className="text-3xl font-black text-neutral-900 uppercase tracking-tighter mb-2">
                    Admin <span className="text-red-600">Login</span>
                  </h1>
                  <p className="text-neutral-500 text-sm font-medium mb-8">
                    Inloggen voor dashboard toegang
                  </p>

                  <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-widest text-neutral-700 mb-2">
                        Gebruikersnaam
                      </label>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:border-red-600"
                        placeholder="Voer gebruikersnaam in"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase tracking-widest text-neutral-700 mb-2">
                        Wachtwoord
                      </label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:border-red-600"
                        placeholder="Voer wachtwoord in"
                      />
                    </div>

                    {loginError && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-sm text-sm">
                        {loginError}
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full bg-red-600 text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-red-700 transition-all rounded-sm"
                    >
                      Inloggen
                    </button>
                  </form>

                  <p className="text-xs text-neutral-500 mt-6 text-center">
                    Demo: admin / premium123
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col selection:bg-red-600 selection:text-white">
      <Header />

      <main className="flex-grow pt-20">
        <section className="bg-white border-b border-neutral-200 py-6">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-black text-neutral-900 uppercase tracking-tighter">
                Dashboard
              </h1>
              <button
                onClick={handleLogout}
                className="bg-neutral-200 text-neutral-900 px-6 py-2 font-black uppercase text-xs tracking-widest hover:bg-neutral-300 transition-colors rounded-sm"
              >
                Uitloggen
              </button>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6">
            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 border border-neutral-200 rounded-sm">
                <p className="text-neutral-500 text-xs font-black uppercase tracking-widest mb-2">
                  Totale Boekingen
                </p>
                <p className="text-4xl font-black text-neutral-900">{bookings.length}</p>
              </div>
              <div className="bg-white p-6 border border-neutral-200 rounded-sm">
                <p className="text-neutral-500 text-xs font-black uppercase tracking-widest mb-2">
                  Bevestigd
                </p>
                <p className="text-4xl font-black text-green-600">
                  {bookings.filter((b) => b.status === 'Bevestigd').length}
                </p>
              </div>
              <div className="bg-white p-6 border border-neutral-200 rounded-sm">
                <p className="text-neutral-500 text-xs font-black uppercase tracking-widest mb-2">
                  In Behandeling
                </p>
                <p className="text-4xl font-black text-yellow-600">
                  {bookings.filter((b) => b.status === 'In behandeling').length}
                </p>
              </div>
              <div className="bg-white p-6 border border-neutral-200 rounded-sm">
                <p className="text-neutral-500 text-xs font-black uppercase tracking-widest mb-2">
                  Totale Passagiers
                </p>
                <p className="text-4xl font-black text-blue-600">
                  {bookings.reduce((sum, b) => sum + b.passengers, 0)}
                </p>
              </div>
            </div>

            {/* Bookings Table */}
            <div className="bg-white border border-neutral-200 rounded-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-neutral-200 bg-neutral-50">
                      <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-widest text-neutral-700">
                        Naam
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-widest text-neutral-700">
                        Telefoon
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-widest text-neutral-700">
                        E-mail
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-widest text-neutral-700">
                        Pickup
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-widest text-neutral-700">
                        Bestemming
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-widest text-neutral-700">
                        Datum & Tijd
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-widest text-neutral-700">
                        Passagiers
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-widest text-neutral-700">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking) => (
                      <tr key={booking.id} className="border-b border-neutral-200 hover:bg-neutral-50">
                        <td className="px-6 py-4 font-semibold text-neutral-900">{booking.name}</td>
                        <td className="px-6 py-4 text-neutral-600 text-sm">{booking.phone}</td>
                        <td className="px-6 py-4 text-neutral-600 text-sm">{booking.email}</td>
                        <td className="px-6 py-4 text-neutral-600 text-sm">{booking.pickupLocation}</td>
                        <td className="px-6 py-4 text-neutral-600 text-sm">{booking.destination}</td>
                        <td className="px-6 py-4 text-neutral-600 text-sm">
                          {booking.date} {booking.time}
                        </td>
                        <td className="px-6 py-4 font-semibold text-neutral-900">{booking.passengers}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-3 py-1 rounded-sm text-xs font-black uppercase tracking-widest ${
                              booking.status === 'Bevestigd'
                                ? 'bg-green-100 text-green-700'
                                : booking.status === 'In behandeling'
                                  ? 'bg-yellow-100 text-yellow-700'
                                  : 'bg-blue-100 text-blue-700'
                            }`}
                          >
                            {booking.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
