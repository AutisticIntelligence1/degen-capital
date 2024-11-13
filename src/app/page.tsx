import React from 'react';
import { LineChart, Wallet2, Flame } from 'lucide-react';

const DegenCapital = () => {
  return (
      <div className="min-h-screen bg-black text-white">
        {/* Header/Hero Section */}
        <header className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
          <nav className="relative z-10 container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {/* SVG Logo */}
                <svg viewBox="0 0 50 50" className="h-12 w-12">
                  <circle cx="25" cy="20" r="15" fill="white" />
                  <rect x="10" y="18" width="30" height="8" fill="black" />
                  <circle cx="35" cy="22" r="2" fill="white" />
                  <path d="M15 35 L35 35 L32 45 L18 45 Z" fill="white" />
                </svg>
                <span className="text-2xl font-bold">Degen Capital</span>
              </div>
              <div className="flex items-center space-x-4">
                <a href="https://t.me/degencapital" target="_blank" rel="noopener noreferrer"
                   className="hover:text-blue-500 transition-colors">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.95 8.12L16.17 18c-.15.65-.56.85-1.13.53l-3.14-2.31-1.51 1.46c-.17.17-.31.31-.64.31l.23-3.21L14.7 10c.19-.18-.04-.28-.3-.1l-6.07 3.83L5.2 12.7c-.64-.2-.65-.64.13-.95l15.39-5.93c.53-.2 1 .13.83.7z" />
                  </svg>
                </a>
                <a href="https://x.com/degencapital" target="_blank" rel="noopener noreferrer"
                   className="hover:text-blue-500 transition-colors">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </nav>

          <div className="relative container mx-auto px-6 pt-20 pb-24 text-center">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              The Future of DeFi Investment
            </h1>
            <p className="text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Community-driven cryptocurrency fund focusing on early-stage, high-potential projects.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105">
              Buy $DGC
            </button>
          </div>
        </header>

        {/* Key Features */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:from-blue-900 hover:to-purple-900 transition-all duration-300">
                <LineChart className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Early-Stage Investments</h3>
                <p className="text-gray-400">Focus on high-potential projects with strong early return potential.</p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:from-blue-900 hover:to-purple-900 transition-all duration-300">
                <Wallet2 className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Community Fund</h3>
                <p className="text-gray-400">Strategic allocation through community-driven decisions.</p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:from-blue-900 hover:to-purple-900 transition-all duration-300">
                <Flame className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Deflationary Model</h3>
                <p className="text-gray-400">Token buybacks and burns for long-term value.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tokenomics */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Tokenomics
            </h2>
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-12">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <p className="text-gray-400 mb-2 text-lg">Max Supply</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    1,000,000
                  </p>
                  <p className="text-xl font-bold text-blue-500">$DGC</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 mb-2 text-lg">LP Status</p>
                  <p className="text-4xl font-bold text-green-500">100%</p>
                  <p className="text-xl text-green-500">Burned</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-gray-800">
          <div className="container mx-auto px-6 text-center text-gray-400">
            <p>© 2024 Degen Capital</p>
          </div>
        </footer>
      </div>
  );
};

export default DegenCapital;