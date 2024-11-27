"use client";

import React from 'react';
import { Send, Globe, Shield, Gem, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function DegenCapital() {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Navigation */}
      <nav className="fixed w-full nav-blur z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo1.jpg"
                alt="Degen Capital Logo"
                width={150}
                height={150}
                priority
                className="h-auto w-12 rounded-full object-cover"
              />
              <span className="text-2xl font-bold gradient-text">Degen Capital</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://twitter.com/degencapital"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://t.me/degencapital" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Send className="h-6 w-6" />
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
                The Future of <br />Community Investing
              </h1>
              <p className="text-xl text-text-secondary">
                Join an elite community of investors where collective wisdom drives exceptional returns.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://degen-capital.gitbook.io/degen-capital/introduction/quickstart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2 inline-block" />
                </a>
                <a
                  href="https://debank.com/profile/0x9fb76d37de2ed2c1b339fc4451044aff33049a8a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Live Portfolio
                  <Globe className="h-4 w-4 ml-2 inline-block" />
                </a>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="animate-float">
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
                  <Image
                    src="/logo1.jpg"
                    alt="Degen Capital"
                    width={400}
                    height={400}
                    className="relative z-10 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding" id="investment">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose <span className="gradient-text">Degen Capital</span></h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We combine cutting-edge technology with proven investment strategies to maximize returns for our community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="surface-card p-6 rounded-lg">
              <div className="mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Global Community</h3>
              <p className="text-text-secondary">
                Join our worldwide community of investors and traders.
              </p>
            </div>
            <div className="surface-card p-6 rounded-lg">
              <div className="mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Multi-Signature Security</h3>
              <p className="text-text-secondary">
                Advanced protection through multi-signature wallets, ensuring secure and transparent fund management.
              </p>
            </div>
            <div className="surface-card p-6 rounded-lg">
              <div className="mb-4">
                <Gem className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Exclusive NFTs</h3>
              <p className="text-text-secondary">
                Access unique benefits through our upcoming NFT collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NFT Section */}
      <section className="section-padding bg-surface/50" id="nft">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-6">
                Exclusive <span className="gradient-text">Mr. D NFT</span> Collection
              </h2>
              <p className="text-text-secondary mb-8">
                Be part of our exclusive NFT collection launch. Each NFT will grant you special benefits and revenue sharing opportunities.
              </p>
              <ul className="space-y-4">
                {[
                  "Revenue sharing from platform fees",
                  "Exclusive access to premium features",
                  "Voting rights in platform governance",
                  "Priority access to new investment pools"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <ArrowRight className="h-5 w-5 text-secondary" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center space-x-4 mt-8">
                <a
                  href="https://twitter.com/degencapital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Follow Updates
                  <svg className="h-4 w-4 ml-2 inline-block" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300 opacity-70"></div>
                <div className="relative">
                  <Image
                    src="/NFT.jpg"
                    alt="NFT Preview"
                    width={500}
                    height={500}
                    className="w-full aspect-square object-contain rounded-lg shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-lg font-bold">Degen NFT Collection</p>
                      <p className="text-sm opacity-80">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="surface-card p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Join Our <span className="gradient-text">Community</span>
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Stay updated with the latest news and be the first to know about our NFT launch.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://twitter.com/degencapital"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Follow on Twitter
                <svg className="h-4 w-4 ml-2 inline-block" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
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
                <Image
                  src="/logo1.jpg"
                  alt="Degen Capital"
                  width={30}
                  height={30}
                  priority
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="text-2xl font-bold gradient-text">Degen Capital</span>
              </div>
              <p className="text-text-secondary">
                Building the future of decentralized investment.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Platform</h4>
              <ul className="space-y-2 text-text-secondary">
                <li><a href="#investment" className="hover:text-text">Investment</a></li>
                <li><a href="#nft" className="hover:text-text">NFT Collection</a></li>
                <li><a href="#tokenomics" className="hover:text-text">Tokenomics</a></li>
                <li><a href="#governance" className="hover:text-text">Governance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-text-secondary">
                <li>
                  <a
                    href="https://twitter.com/degencapital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-text flex items-center space-x-2"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span>Twitter</span>
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
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-text-secondary">
                <li><a href="#" className="hover:text-text">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-text">Terms of Service</a></li>
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