"use client";

import React, {useState, useEffect} from 'react';
import {Gem, Lock, Users, Eye, Users2, Target} from 'lucide-react';

const DegenCapital = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsVisible(offset > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date('2024-12-01').getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {label: 'Days', value: timeLeft.days},
    {label: 'Hours', value: timeLeft.hours},
    {label: 'Minutes', value: timeLeft.minutes},
    {label: 'Seconds', value: timeLeft.seconds}
  ];

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
      <div className="min-h-screen bg-gray-950 text-white">
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 bg-green-600 p-4 rounded-full shadow-lg transition-opacity duration-300 z-50 ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18"/>
          </svg>
        </button>

        <header className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-emerald-900/20"></div>
          <nav className="relative z-10 container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <svg viewBox="0 0 50 50" className="h-12 w-12">
                  <circle cx="25" cy="20" r="15" fill="#10B981"/>
                  <rect x="10" y="18" width="30" height="8" fill="black"/>
                  <circle cx="35" cy="22" r="2" fill="#10B981"/>
                  <path d="M15 35 L35 35 L32 45 L18 45 Z" fill="#10B981"/>
                </svg>
                <span className="text-2xl font-bold text-green-400">Degen Capital</span>
              </div>
              <div className="flex items-center space-x-4">
                <a href="https://t.me/+IzONJHxUmdY2ZmRk" target="_blank" rel="noopener noreferrer"
                   className="hover:text-green-400 transition-colors">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.95 8.12L16.17 18c-.15.65-.56.85-1.13.53l-3.14-2.31-1.51 1.46c-.17.17-.31.31-.64.31l.23-3.21L14.7 10c.19-.18-.04-.28-.3-.1l-6.07 3.83L5.2 12.7c-.64-.2-.65-.64.13-.95l15.39-5.93c.53-.2 1 .13.83.7z"/>
                  </svg>
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer"
                   className="hover:text-green-400 transition-colors">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </nav>
          <div className="relative container mx-auto px-6 pt-20 pb-24 text-center">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Expert-Led Investment Community
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Led by seasoned experts with a proven track record of identifying early-stage opportunities before they
              become mainstream successes.
            </p>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-green-400 mb-4">NFT Launch Countdown</h2>
              <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
                {stats.map(({label, value}) => (
                    <div key={label} className="p-4 rounded-xl bg-gray-800 border border-green-500/20">
                      <div className="text-3xl font-bold text-green-400">{value}</div>
                      <div className="text-sm text-gray-400">{label}</div>
                    </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                  className="bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/20">
                Buy $DGC
              </button>
              <a
                  href="https://degen-capital.gitbook.io/degen-capital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 border border-green-500/20"
              >
                View Whitepaper
              </a>
            </div>
          </div>
        </header>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-400">Why Choose Degen Capital?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div
                  className="p-6 rounded-xl bg-gray-800 border border-green-500/20 hover:border-green-500/40 transition-colors">
                <Eye className="h-12 w-12 text-green-400 mb-4"/>
                <h3 className="text-xl font-bold mb-4">Expert Analysis</h3>
                <p className="text-gray-400">Seasoned professionals identifying high-potential projects before they gain
                  widespread attention</p>
              </div>
              <div
                  className="p-6 rounded-xl bg-gray-800 border border-green-500/20 hover:border-green-500/40 transition-colors">
                <Target className="h-12 w-12 text-green-400 mb-4"/>
                <h3 className="text-xl font-bold mb-4">Strategic Entry</h3>
                <p className="text-gray-400">Perfect timing for maximum returns on carefully selected opportunities</p>
              </div>
              <div
                  className="p-6 rounded-xl bg-gray-800 border border-green-500/20 hover:border-green-500/40 transition-colors">
                <Users2 className="h-12 w-12 text-green-400 mb-4"/>
                <h3 className="text-xl font-bold mb-4">Community First</h3>
                <p className="text-gray-400">Strong focus on community wealth generation and sustainable growth</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-400">Our Track Record</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                ['PALM', '0.01', '147x'],
                ['MOCK', '0.3', '89x'],
                ['HEDGE', '0.00028', '234x'],
                ['BOTON', '0.00004', '178x'],
                ['ZGEN', '0.001', '156x']
              ].map(([name, price, returns]) => (
                  <div key={name}
                       className="p-6 rounded-xl bg-gray-800 border border-green-500/20 hover:border-green-500/40 transition-colors">
                    <h3 className="text-xl font-bold text-green-400 mb-2">{name}</h3>
                    <p className="text-gray-400">Found at</p>
                    <p className="text-lg font-bold text-white">${price}</p>
                    <p className="text-sm text-green-400 mt-2">Returns: {returns}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hot Tokens Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-400">Hot Tokens We&apos;re Watching</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div
                  className="p-6 rounded-xl bg-gray-800 border border-green-500/20 hover:border-green-500/40 transition-colors relative overflow-hidden">
                <div className="absolute top-2 right-2 bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-sm">
                  Hot 🔥
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4">Gary the Snail</h3>
                <p className="text-sm text-gray-400 mb-4">Elon&apos;s Latest Pet Token</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Contract Address:</span>
                  </div>
                  <div className="p-2 bg-gray-700 rounded-lg break-all text-xs">
                    0xf0430bd971ee4a63674a2103e21129e9ccf29686
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-green-400 font-semibold">Potential: High</span>
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-sm">Trending</span>
                </div>
              </div>

              <div
                  className="p-6 rounded-xl bg-gray-800 border border-green-500/20 hover:border-green-500/40 transition-colors relative overflow-hidden">
                <div className="absolute top-2 right-2 bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-sm">
                  Hot 🔥
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4">Bureaucracy</h3>
                <p className="text-sm text-gray-400 mb-4">Solana&apos;s Latest Gem</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Contract Address:</span>
                  </div>
                  <div className="p-2 bg-gray-700 rounded-lg break-all text-xs">
                    AiZRN7k9n1ursX2rJKuaNX9J2Q4Eq5vtDBmonNsZpump
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-green-400 font-semibold">Potential: High</span>
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-sm">New</span>
                </div>
              </div>

              <div
                  className="p-6 rounded-xl bg-gray-800 border border-green-500/20 hover:border-green-500/40 transition-colors relative overflow-hidden">
                <div className="absolute top-2 right-2 bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-sm">
                  Hot 🔥
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4">YEN</h3>
                <p className="text-sm text-gray-400 mb-4">Next Potential Moon</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Contract Address:</span>
                  </div>
                  <div className="p-2 bg-gray-700 rounded-lg break-all text-xs">
                    8HfFvgutvKBjdbTqm8h6qZ2VSJ3TxwrZxHT3m34Cpump
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-green-400 font-semibold">Potential: High</span>
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-sm">Rising</span>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-6">Join our community to get real-time updates on these tokens and more
                opportunities</p>
              <a
                  href="https://t.me/+IzONJHxUmdY2ZmRk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path
                      d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.95 8.12L16.17 18c-.15.65-.56.85-1.13.53l-3.14-2.31-1.51 1.46c-.17.17-.31.31-.64.31l.23-3.21L14.7 10c.19-.18-.04-.28-.3-.1l-6.07 3.83L5.2 12.7c-.64-.2-.65-.64.13-.95l15.39-5.93c.53-.2 1 .13.83.7z"/>
                </svg>
                <span>Join Telegram Community</span>
              </a>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-400">Live Portfolio Overview</h2>
            <div className="flex justify-center">
              <a
                  href="https://debank.com/profile/0x9fb76d37de2ed2c1b339fc4451044aff33049a8a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 inline-flex items-center space-x-2"
              >
                <span>View Portfolio on DeBank</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-400">Mr. D NFT Collection</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-gray-800">
                  <h3 className="text-xl font-bold text-green-400 mb-4">NFT Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Gem className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                      <span>Access to investment revenue distributions</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Lock className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                      <span>Automatic revenue sharing without manual claims</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Users className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                      <span>Future governance participation rights</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6 rounded-xl bg-gray-800">
                  <h3 className="text-xl font-bold text-green-400 mb-2">NFT Price</h3>
                  <p className="text-3xl font-bold">150 $DGC</p>
                  <p className="text-gray-400 mt-2">All proceeds burned to reduce supply</p>
                </div>
              </div>
              <div className="p-8 rounded-xl bg-gray-800">
                <h3 className="text-xl font-bold text-green-400 mb-6">Profit Distribution</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-gray-700">
                    <span>NFT Holders</span>
                    <span className="text-xl font-bold text-green-400">50%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-gray-700">
                    <span>Reinvestment</span>
                    <span className="text-xl font-bold text-green-400">35%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-gray-700">
                    <span>Team</span>
                    <span className="text-xl font-bold text-green-400">15%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-400">Tokenomics</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-xl bg-gray-800">
                <h3 className="text-xl font-bold text-center mb-6">Transaction Tax: 4%</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-gray-700">
                    <span>DGC Wallet</span>
                    <span className="font-bold text-green-400">2%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-gray-700">
                    <span>Liquidity Pool</span>
                    <span className="font-bold text-green-400">1%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-gray-700">
                    <span>Team</span>
                    <span className="font-bold text-green-400">1%</span>
                  </div>
                </div>
              </div>
              <div className="p-8 rounded-xl bg-gray-800">
                <h3 className="text-xl font-bold mb-6">Token Details</h3>
                <div className="space-y-6">
                  <div className="text-center p-6 rounded-lg bg-gray-700">
                    <p className="text-gray-400 mb-2">Max Supply</p>
                    <p className="text-3xl font-bold text-green-400">1,000,000 $DGC</p>
                  </div>
                  <div className="text-center p-6 rounded-lg bg-gray-700">
                    <p className="text-gray-400 mb-2">LP Status</p>
                    <p className="text-3xl font-bold text-green-400">100% Burned</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-8 border-t border-gray-800">
          <div className="container mx-auto px-6 text-center text-gray-400">
            <p>&copy; 2024 Degen Capital. All rights reserved.</p>
          </div>
        </footer>
      </div>
  );
};

export default DegenCapital;