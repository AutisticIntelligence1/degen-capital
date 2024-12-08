"use client";

import React from 'react';
import { Send, Globe, Shield, Gem, ArrowRight, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { hirace } from './fonts';

export default function DegenCapital() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-effect h-20 flex items-center justify-between px-6">
            <div className="flex items-center space-x-4">
              <Image
                src="/logo1.png"
                alt="Degen Capital Logo"
                width={36}
                height={36}
                priority
                className="rounded-full"
              />
              <span className={`text-base text-primary ${hirace.className}`}>
                DEGEN CAPITAL
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="https://x.com/_Degen_Capital_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a 
                href="https://t.me/degencapital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center hero-gradient">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-8">
              <h1 className="text-4xl lg:text-7xl font-bold">
                The most degenerate{" "}
                <span className="gradient-text">crypto hedge fund</span>
              </h1>

              <div className="space-y-4">
                <div className="surface-card card-highlight p-4">
                  <h3 className="text-lg font-bold mb-2">ALL-STAR Degen Legends Unite</h3>
                  <p className="text-sm text-text-secondary">
                    For the first time ever, the most legendary degens are joining forces. 
                    Through collective consensus, we&apos;re bringing you unparalleled opportunities in the crypto space.
                  </p>
                </div>

                <div className="surface-card card-highlight p-4">
                  <h3 className="text-lg font-bold mb-2">Microcap-Powered Index Fund</h3>
                  <p className="text-sm text-text-secondary">
                    DGC trades a carefully selected basket of high-potential assets across AI, RWA, and MEMES. 
                    Get expert exposure to the most alpha investments in the crypto landscape.
                  </p>
                </div>

                <div className="surface-card card-highlight p-4">
                  <h3 className="text-lg font-bold mb-2">Join the Profit-Sharing Collective</h3>
                  <p className="text-sm text-text-secondary">
                    Holding DGC makes you part of an exclusive collective that regularly distributes profits directly to holders. 
                    The more you hold, the larger your share of the profits. Make history in this bull run with the best track records in the space.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://degen-capital.gitbook.io/degen-capital/introduction/quickstart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-button"
                >
                  Learn More
                  <ChevronRight className="h-4 w-4 ml-2" />
                </a>
                <a
                  href="https://debank.com/profile/0x9fb76d37de2ed2c1b339fc4451044aff33049a8a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-button"
                >
                  Live Portfolio
                  <Globe className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-4">
                  <div className="w-full h-full bg-gradient-conic from-primary/20 via-transparent to-secondary/20 blur-3xl opacity-20"></div>
                </div>
                <div className="relative animate-float ml-8">
                  <Image
                    src="/logo1.png"
                    alt="Degen Capital"
                    width={320}
                    height={320}
                    className="rounded-full shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Why Choose <span className="gradient-text">Degen Capital</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="surface-card hover:border-primary/20">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">A Cult Community</h3>
              </div>
              <p className="text-text-secondary">
                Since 2017, we have grown into an all-star trading collective, with a cult following of 500. DGC community is where gems appear before anywhere else, and where an assortment of up-and-coming influencers grind along with discerning traders.
              </p>
            </div>

            <div className="surface-card hover:border-primary/20">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Gem className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Best Track Record</h3>
              </div>
              <p className="text-text-secondary">
                Our core team includes high-octane investors like Degenerator, wooww etc. who specialize in finding gems before they hit the influencer&apos;s circuit. We gave you ATOR (privacy), AMT (layer 1 mobile mining), XNA (layer 1 AI), DNX (Layer 1 computing), and many more.
              </p>
            </div>

            <div className="surface-card hover:border-primary/20">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Best Tokenomics</h3>
              </div>
              <p className="text-text-secondary">
                Our unique system of NFT&apos;s make for the ultimate revenue share model with flywheel & deflationary tokenomics. This is our gift to the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NFT Section */}
      <section className="py-20 relative" id="nft">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-5xl font-bold">
                Exclusive <span className="gradient-text">Mr. D NFT</span> Collection
              </h2>
              <p className="text-xl text-text-secondary">
                Be part of our exclusive NFT collection launch. Each NFT will grant you special benefits and revenue sharing opportunities.
              </p>
              <ul className="space-y-4">
                {[
                  "Revenue sharing from platform fees",
                  "Exclusive access to premium features",
                  "Voting rights in platform governance",
                  "Priority access to new investment pools"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3 text-lg">
                    <div className="p-1 rounded-lg bg-primary/10">
                      <ChevronRight className="h-4 w-4 text-primary" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div>
                <button className="secondary-button">
                  Soon more
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4">
                <div className="w-full h-full bg-gradient-conic from-primary/20 via-transparent to-secondary/20 blur-3xl opacity-30"></div>
              </div>
              <div className="relative surface-card p-4">
                <Image
                  src="/NFT.jpg"
                  alt="NFT Preview"
                  width={600}
                  height={600}
                  className="w-full rounded-xl shadow-2xl"
                  priority
                />
                <div className="absolute bottom-8 left-8 right-8 glass-effect p-6 rounded-xl">
                  <p className="text-xl font-bold">Degen NFT Collection</p>
                  <p className="text-text-secondary">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}