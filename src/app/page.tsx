import React from 'react';
import { Gem, Lock, Users } from 'lucide-react';

const DegenCapital = () => {
  return (
      <div className="min-h-screen bg-gray-950 text-white">
        {/* Header/Hero Section */}
        <header className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-emerald-900/20"></div>
          <nav className="relative z-10 container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <svg viewBox="0 0 50 50" className="h-12 w-12">
                  <circle cx="25" cy="20" r="15" fill="#10B981" />
                  <rect x="10" y="18" width="30" height="8" fill="black" />
                  <circle cx="35" cy="22" r="2" fill="#10B981" />
                  <path d="M15 35 L35 35 L32 45 L18 45 Z" fill="#10B981" />
                </svg>
                <span className="text-2xl font-bold text-green-400">Degen Capital</span>
              </div>
              <div className="flex items-center space-x-4">
                <a href="https://t.me/c/2155564902/39783" target="_blank" rel="noopener noreferrer"
                   className="hover:text-green-400 transition-colors">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.95 8.12L16.17 18c-.15.65-.56.85-1.13.53l-3.14-2.31-1.51 1.46c-.17.17-.31.31-.64.31l.23-3.21L14.7 10c.19-.18-.04-.28-.3-.1l-6.07 3.83L5.2 12.7c-.64-.2-.65-.64.13-.95l15.39-5.93c.53-.2 1 .13.83.7z" />
                  </svg>
                </a>
                <a href="https://x.com/degencapital" target="_blank" rel="noopener noreferrer"
                   className="hover:text-green-400 transition-colors">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </nav>

          <div className="relative container mx-auto px-6 pt-20 pb-24 text-center">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Community-Driven DeFi Investment
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              A structured and community-oriented investment approach focusing on early-stage, revenue-generating projects with a proven track record of finding gems early.
            </p>
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105">
              Buy $DGC
            </button>
          </div>
        </header>

        {/* Success Track Record */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-400">Our Track Record</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                ['PALM', '0.01'],
                ['MOCK', '0.3'],
                ['HEDGE', '0.00028'],
                ['BOTON', '0.00004'],
                ['ZGEN', '0.001']
              ].map(([name, price]) => (
                  <div key={name} className="p-6 rounded-xl bg-gray-800 text-center">
                    <h3 className="text-xl font-bold text-green-400 mb-2">{name}</h3>
                    <p className="text-gray-400">Found at</p>
                    <p className="text-lg font-bold text-white">${price}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Revenue Participation */}
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

        {/* Tokenomics */}
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
            <p>© 2024 Degen Capital</p>
          </div>
        </footer>
      </div>
  );
};

export default DegenCapital;