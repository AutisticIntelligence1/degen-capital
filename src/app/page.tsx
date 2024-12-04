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
            <div className="flex items-center space-x-2 pt-4">
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
                className="social-icon"
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
      <section className="pt-32 pb-36">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="flex-1 space-y-16">
              <h1 className="text-4xl md:text-6xl font-bold gradient-text leading-tight pb-4">
                The most degenerate crypto hedge fund
              </h1>
              <p className="text-xl text-text-secondary">
                Join an elite community of investors.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://degen-capital.gitbook.io/degen-capital/introduction/quickstart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-button"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </a>
                <a
                  href="https://debank.com/profile/0x9fb76d37de2ed2c1b339fc4451044aff33049a8a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-button"
                >
                  Live Portfolio
                  <Globe className="h-4 w-4 ml-2" />
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
      <section className="pt-0 pb-16 -mt-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose <span className="gradient-text">Degen Capital</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="surface-card">
              <div className="flex items-center space-x-4 mb-4">
                <Shield className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Secure Platform</h3>
              </div>
              <p className="text-text-secondary">
                Protected by multi-signature wallet technology, ensuring maximum security for all investments.
              </p>
            </div>
            <div className="surface-card">
              <div className="flex items-center space-x-4 mb-4">
                <Gem className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Community Driven</h3>
              </div>
              <p className="text-text-secondary">
                Join a thriving community of experienced traders and investors sharing insights and strategies.
              </p>
            </div>
            <div className="surface-card">
              <div className="flex items-center space-x-4 mb-4">
                <Globe className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Global Access</h3>
              </div>
              <p className="text-text-secondary">
                Access diverse investment opportunities across multiple chains and protocols worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NFT Section */}
      <section className="py-12 bg-surface/50" id="nft">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-8">
                Exclusive <span className="gradient-text">Mr. D NFT</span> Collection
              </h2>
              <p className="text-text-secondary mb-12">
                Be part of our exclusive NFT collection launch. Each NFT will grant you special benefits and revenue sharing opportunities.
              </p>
              <ul className="space-y-6 mb-12">
                {[
                  "Revenue sharing from platform fees",
                  "Exclusive access to premium features",
                  "Voting rights in platform governance",
                  "Priority access to new investment pools"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <ArrowRight className="h-5 w-5 text-primary" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center space-x-4 mt-8">
                <button className="secondary-button">
                  More Soon
                </button>
              </div>
            </div>
            <div className="flex-1 max-w-lg">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl"></div>
                <div className="relative bg-surface/20 backdrop-blur-sm p-6 rounded-xl border border-primary/10">
                  <Image
                    src="/NFT.jpg"
                    alt="NFT Preview"
                    width={500}
                    height={500}
                    className="w-full aspect-square object-contain rounded-lg shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300"
                    priority
                  />
                  <div className="absolute bottom-8 left-8 right-8 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-lg">
                    <p className="text-lg font-bold text-white">Degen NFT Collection</p>
                    <p className="text-sm text-white/80">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="surface-card text-center">
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
                className="secondary-button"
              >
                Follow on
                <svg className="h-4 w-4 ml-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://t.me/degencapital" target="_blank" rel="noopener noreferrer" className="primary-button">
                Join Telegram
                <Send className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}