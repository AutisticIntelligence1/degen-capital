"use client";

import React, { useState } from 'react';
import { Send, Globe, Shield, Gem, ArrowRight, Users, Trophy, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function DegenCapital() {
  const [copied, setCopied] = useState(false);

  return (
    <div className="min-h-screen gradient-bg">
      {/* Navigation */}
      <nav className="fixed w-full nav-blur z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo1.png"
                alt="Degen Capital Logo"
                width={32}
                height={32}
                priority
                className="rounded-full"
              />
              <span className="text-lg font-bold gradient-text">Degen Capital</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-surface-transparent backdrop-blur-sm px-3 py-1.5 rounded-lg border border-[var(--border)] hover:border-[var(--border-hover)] transition-colors">
                <span className="text-text-secondary text-sm">CA:</span>
                <code className="text-primary font-mono text-sm">0xf9784980a84bca67964c9560d576d6bf6ea41d87</code>
                <div className="relative">
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText('0xf9784980a84bca67964c9560d576d6bf6ea41d87');
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className="text-text-secondary hover:text-primary transition-colors"
                    title="Copy to clipboard"
                  >
                    {copied ? (
                      <span className="text-primary text-xs">Copied!</span>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <a
                href="https://www.dextools.io/app/en/ether/pair-explorer/0x273cb35e72e98f3065e0b6bd037958fa58bb49fd?t=1733676979526"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Image
                  src="/Brand_DEXTools_Dark.png"
                  alt="DEXTools"
                  width={72}
                  height={72}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>
              <a
                href="https://t.me/DGC_Portal"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Send className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/_Degen_Capital_"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="flex-1 max-w-2xl">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
                The most
                <br />
                degenerate{' '}
                <span className="gradient-text">crypto
                <br />
                hedge fund</span>
              </h1>

              <div className="space-y-4">
                {/* Info Cards */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="info-card group">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">ALL-STAR Degen LEGENDS Unite</h3>
                    <p className="text-text-secondary text-sm">
                      ALL-STAR degen LEGENDS get together for the first time to give you $DGC. As a group, via consensus, 
                      we&apos;re gonna trade this fund this year and next, up to 20M.
                    </p>
                  </div>

                  <div className="info-card group">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">Microcap-Powered Index Fund</h3>
                    <p className="text-text-secondary text-sm">
                      DGC is a microcap-powered index fund that trades a basket of high r/r assets in AI, RWA and MEMES. 
                      By simply holding DGC you gain exposure to some of the most alpha investments in the 
                       crypto space.
                    </p>
                  </div>

                  <div className="info-card group">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">Join the Collective</h3>
                    <p className="text-text-secondary text-sm">
                      When you hold DGC you automatically become part of the collective which regularly distributes 
                      a large portion of the profits directly to you. The more DGC you hold, the more of these profits 
                      you receive. Hold and make the best of the bull run.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href="https://degen-capital.gitbook.io/degen-capital/introduction/quickstart"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary-button"
                  >
                    Learn More
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </a>
                  <a
                    href="https://debank.com/profile/0x9fb76d37de2ed2c1b339fc4451044aff33049a8a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondary-button"
                  >
                    Live Portfolio
                    <Globe className="h-5 w-5 ml-2" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="animate-float">
                <div className="relative w-full max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
                  <Image
                    src="/logo1.png"
                    alt="Degen Capital"
                    width={400}
                    height={400}
                    className="relative z-10 rounded-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-8 bg-surface/10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose <span className="gradient-text">Us</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card 1 - Cult Community */}
            <div className="surface-card h-full">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-bold">A Cult Community</h3>
              </div>
              <p className="text-text-secondary text-sm">
                Since 2017, we have grown into an all-star trading collective, with a cult following of almost 500 members. 
                DGC community is where gems appear before anywhere else, and where an assortment of up-and-coming 
                influencers grind along with discerning traders.
              </p>
            </div>

            {/* Card 2 - Track Record */}
            <div className="surface-card h-full">
              <div className="flex items-center space-x-3 mb-4">
                <Trophy className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-bold">Best Track Record</h3>
              </div>
              <p className="text-text-secondary text-sm mb-3">
                Our core team includes high-octane investors like Degenerator, wooww etc. etc. who specialize in 
                finding gems before they hit the influencer&apos;s circuit. Working with them are the top crypto-experts 
                & alpha gems hunters of the collective, each of them being accountable with over 5 years of personal 
                track record.
              </p>
              <p className="text-text-secondary text-sm mb-3">
                It doesn&apos;t get any better than this. We gave you:
              </p>
              <ul className="space-y-1.5 text-text-secondary text-sm">
                <li className="flex items-center space-x-2">
                  <ArrowRight className="h-3 w-3 text-primary flex-shrink-0" />
                  <span>ATOR</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ArrowRight className="h-3 w-3 text-primary flex-shrink-0" />
                  <span>KAS</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ArrowRight className="h-3 w-3 text-primary flex-shrink-0" />
                  <span>NEURAL</span>
                </li>
              </ul>
            </div>

            {/* Card 3 - Tokenomics */}
            <div className="surface-card h-full">
              <div className="flex items-center space-x-3 mb-4">
                <Gem className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-bold">Best Tokenomics</h3>
              </div>
              <p className="text-text-secondary text-sm">
                Our unique system of NFTs make for the ultimate revenue share model with flywheel & 
                deflationary tokenomics. This is our gift to the community.
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