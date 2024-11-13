import React, { useState, useEffect } from 'react';
import { Gem, Lock, Users } from 'lucide-react';

const Logo = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 0L37.3205 10V30L20 40L2.67949 30V10L20 0Z" fill="#312E81"/>
      <path d="M20 5L32.3205 12V26L20 33L7.67949 26V12L20 5Z" fill="#818CF8"/>
      <path d="M20 10L27.3205 14V22L20 26L12.6795 22V14L20 10Z" fill="#F9FAFB"/>
      <path d="M20 15L23.3205 16.5V19.5L20 21L16.6795 19.5V16.5L20 15Z" fill="#312E81"/>
    </svg>
);

const CountdownTimer = () => {
  // ... [Previous CountdownTimer code remains the same] ...

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
      <div className="flex flex-col items-center">
        <div className="bg-indigo-950 p-6 rounded-xl border border-indigo-800/30">
        <span className="text-4xl md:text-5xl font-bold text-white">
          {value.toString().padStart(2, '0')}
        </span>
        </div>
        <span className="mt-3 text-sm uppercase tracking-wider text-indigo-300">{label}</span>
      </div>
  );

  return (
      <div className="flex gap-6 justify-center">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
  );
};

const DegenCapital = () => {
  return (
      <div className="min-h-screen bg-black text-gray-100">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/50 via-black to-black pointer-events-none"></div>

        {/* Header */}
        <header className="relative">
          <nav className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Logo />
                <span className="text-2xl font-bold text-white">Degen Capital</span>
              </div>
              <div className="flex items-center space-x-6">
                <a href="https://t.me/c/2155564902/39783" target="_blank" rel="noopener noreferrer"
                   className="text-indigo-300 hover:text-indigo-200 transition-colors">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.95 8.12L16.17 18c-.15.65-.56.85-1.13.53l-3.14-2.31-1.51 1.46c-.17.17-.31.31-.64.31l.23-3.21L14.7 10c.19-.18-.04-.28-.3-.1l-6.07 3.83L5.2 12.7c-.64-.2-.65-.64.13-.95l15.39-5.93c.53-.2 1 .13.83.7z" />
                  </svg>
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer"
                   className="text-indigo-300 hover:text-indigo-200 transition-colors">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="relative container mx-auto px-6 pt-20 pb-32 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 via-indigo-200 to-white bg-clip-text text-transparent">
                The Future of DeFi Investment
              </span>
              </h1>
              <p className="text-xl text-indigo-200 mb-12">
                Community-driven investment protocol launching December 1st
              </p>

              {/* Timer */}
              <div className="mb-12">
                <CountdownTimer />
              </div>

              <button className="bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-indigo-700 hover:to-indigo-900 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-indigo-500/25">
                Buy $DGC Now
              </button>
            </div>
          </div>
        </header>

        {/* Track Record Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 text-white">Investment Track Record</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                ['PALM', '0.01'],
                ['MOCK', '0.3'],
                ['HEDGE', '0.00028'],
                ['BOTON', '0.00004'],
                ['ZGEN', '0.001']
              ].map(([name, price]) => (
                  <div key={name} className="bg-indigo-950 p-6 rounded-xl border border-indigo-800/30 hover:border-indigo-600/50 transition-all">
                    <h3 className="text-xl font-bold text-indigo-300 mb-2">{name}</h3>
                    <p className="text-indigo-400">Found at</p>
                    <p className="text-2xl font-bold text-white">${price}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* NFT Benefits */}
        <section className="py-20 bg-indigo-950/20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 text-white">NFT Benefits</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-black/50 backdrop-blur p-8 rounded-xl border border-indigo-800/30">
                <Gem className="h-8 w-8 text-indigo-400 mb-4" />
                <h3 className="text-xl font-bold text-indigo-300 mb-3">Revenue Distribution</h3>
                <p className="text-indigo-200">Access to investment revenue distributions automatically shared</p>
              </div>
              <div className="bg-black/50 backdrop-blur p-8 rounded-xl border border-indigo-800/30">
                <Lock className="h-8 w-8 text-indigo-400 mb-4" />
                <h3 className="text-xl font-bold text-indigo-300 mb-3">Governance Rights</h3>
                <p className="text-indigo-200">Participate in critical project decisions and future direction</p>
              </div>
              <div className="bg-black/50 backdrop-blur p-8 rounded-xl border border-indigo-800/30">
                <Users className="h-8 w-8 text-indigo-400 mb-4" />
                <h3 className="text-xl font-bold text-indigo-300 mb-3">Community Access</h3>
                <p className="text-indigo-200">Exclusive access to investment opportunities and community events</p>
              </div>
            </div>
          </div>
        </section>

        {/* NFT Details */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 text-white">NFT Details</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-indigo-950 p-8 rounded-xl border border-indigo-800/30">
                <h3 className="text-xl font-bold text-indigo-300 mb-4">Mint Price</h3>
                <p className="text-4xl font-bold text-white">150 $DGC</p>
                <p className="text-indigo-200 mt-2">All proceeds burned to reduce supply</p>
              </div>
              <div className="bg-indigo-950 p-8 rounded-xl border border-indigo-800/30">
                <h3 className="text-xl font-bold text-indigo-300 mb-6">Distribution</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-indigo-200">NFT Holders</span>
                    <span className="text-2xl font-bold text-white">50%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-indigo-200">Reinvestment</span>
                    <span className="text-2xl font-bold text-white">35%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-indigo-200">Team</span>
                    <span className="text-2xl font-bold text-white">15%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-8 border-t border-indigo-900/20">
          <div className="container mx-auto px-6 text-center text-indigo-400">
            <p>© 2024 Degen Capital</p>
          </div>
        </footer>
      </div>
  );
};

export default DegenCapital;