"use client";

import React from 'react';
import { Send, Globe, Shield, Gem, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 87.7831H306.615L611.412 515.685L658.88 583.579L1055.08 1143.56H892.476L569.165 687.854V687.828Z" fill="currentColor"/>
  </svg>
)

export default function DegenCapital() {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Navigation */}
      <nav className="fixed w-full nav-blur z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image src="/logo1.jpg" alt="Degen Capital" width={40} height={40} className="rounded-full" />
              <span className="text-2xl font-bold gradient-text">Degen Capital</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="https://debank.com/profile/0x9fb76d37de2ed2c1b339fc4451044aff33049a8a" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-text transition-colors">Portfolio</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://t.me/degencapital" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Send className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/degencapital" target="_blank" rel="noopener noreferrer" className="social-icon">
                <XIcon />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Welcome to <span className="gradient-text">Degen Capital</span>
              </h1>
              <p className="text-xl text-text-secondary">
                Join the revolution of community-driven investment strategies powered by blockchain technology.
              </p>
              <div className="flex items-center space-x-4">
                <a href="https://degen-capital.gitbook.io/degen-capital/introduction/quickstart" target="_blank" rel="noopener noreferrer" className="btn-primary">Learn More</a>
                <a href="https://debank.com/profile/0x9fb76d37de2ed2c1b339fc4451044aff33049a8a" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  View Portfolio
                  <ArrowRight className="h-4 w-4 ml-2 inline-block" />
                </a>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="animate-float">
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
                  <Image src="/logo1.jpg" alt="Degen Capital" width={400} height={400} className="relative z-10 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="surface-card p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Join Our <span className="gradient-text">Community</span>
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Stay updated with the latest news and developments.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="https://twitter.com/degencapital" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Follow on X
                <XIcon />
              </a>
              <a href="https://t.me/degencapital" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Join Telegram
                <Send className="h-4 w-4 ml-2 inline-block" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/logo1.jpg" alt="Degen Capital" width={30} height={30} className="rounded-full" />
                <span className="text-2xl font-bold gradient-text">Degen Capital</span>
              </div>
              <p className="text-text-secondary">
                Join the revolution of community-driven investment strategies powered by blockchain technology.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Platform</h4>
              <ul className="space-y-2 text-text-secondary">
                <li><a href="https://debank.com/profile/0x9fb76d37de2ed2c1b339fc4451044aff33049a8a" target="_blank" rel="noopener noreferrer" className="hover:text-text">Portfolio</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-text-secondary">
                <li>
                  <a href="https://twitter.com/degencapital" target="_blank" rel="noopener noreferrer" className="hover:text-text flex items-center space-x-2">
                    <XIcon />
                    <span>X (Twitter)</span>
                  </a>
                </li>
                <li>
                  <a href="https://t.me/degencapital" target="_blank" rel="noopener noreferrer" className="hover:text-text flex items-center space-x-2">
                    <Send className="h-4 w-4" />
                    <span>Telegram</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-text-secondary">
                <li>
                  <a href="https://degen-capital.gitbook.io/degen-capital/introduction/quickstart" target="_blank" rel="noopener noreferrer" className="hover:text-text">
                    Whitepaper
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-text-secondary">
            <p>&copy; 2024 Degen Capital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}