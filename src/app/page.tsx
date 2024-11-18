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
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 to-emerald-900/30 z-10"></div>
            <div className="absolute inset-0 bg-[url('/api/placeholder/1920/400')] bg-cover bg-center opacity-20"></div>
          </div>
          <nav className="relative z-10 container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <svg viewBox="0 0 100 100" className="h-12 w-12">
                  <circle cx="50" cy="50" r="45" fill="#10B981"/>
                  <path d="M30 30 L70 30 L50 70 Z" fill="black"/>
                  <circle cx="50" cy="45" r="8" fill="white"/>
                  <path d="M35 65 L65 65 L60 80 L40 80 Z" fill="#064E3B"/>
                </svg>
                <span
                    className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Degen Capital
                </span>
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
            <div className="grid md:grid-cols-4 gap-6">
              <div
                  className="p-6 rounded-xl bg-gray-800 border border-green-500/20 hover:border-green-500/40 transition-colors relative overflow-hidden">
                <div className="absolute top-2 right-2 bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-sm">
                  Hot 🔥
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4">Autistic Intelligence</h3>
                <p className="text-sm text-gray-400 mb-4">Next Gen AI Token</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Contract Address:</span>
                  </div>
                  <div className="p-2 bg-gray-700 rounded-lg break-all text-xs">
                    0xefe54156e6dfb456e33ad7b2b9743df0f9221cfa
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-green-400 font-semibold">Potential: Very High</span>
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-sm">Trending</span>
                </div>
              </div>

              <!-- Original tokens sections and rest of the code -->
            </div>
          </div>
        </section>

        <!-- Rest of the sections -->

        <footer className="py-8 border-t border-gray-800">
          <div className="container mx-auto px-6 text-center text-gray-400">
            <p>&copy; 2024 Degen Capital. All rights reserved.</p>
          </div>
        </footer>
      </div>
  );
};

export default DegenCapital;