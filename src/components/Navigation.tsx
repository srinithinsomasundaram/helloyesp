'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Instagram, Menu, X } from 'lucide-react';
import { NewsletterForm } from './NewsletterForm';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-white/10 mx-4 mt-4 rounded-2xl shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity" onClick={() => setIsOpen(false)}>
          <Image src="/logo.png" alt="Yesp Studio Logo" width={32} height={32} className="w-8 h-8" />
          <span className="text-2xl font-bold tracking-tighter text-white">
            Yesp <span className="text-blue-500">Studio</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Home</Link>
          <Link href="/services" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Services</Link>
          <Link href="/partnership" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Partnership</Link>
          <Link href="/about" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">About</Link>
          <Link href="/blog" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Blog</Link>
          <Link href="/contact" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Contact</Link>
          <Link href="https://calendly.com/hello-yespstudio/30min" target="_blank" className="btn-primary py-2 px-6 text-sm shadow-lg shadow-blue-500/20">Book a call</Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white transition-colors p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Sidebar */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-0 bg-slate-950/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col space-y-4 animate-in slide-in-from-top-4 fade-in duration-200 h-[calc(100vh-100px)] overflow-y-auto">
          <Link href="/" className="text-lg font-medium text-slate-300 hover:text-white transition-colors py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/services" className="text-lg font-medium text-slate-300 hover:text-white transition-colors py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/partnership" className="text-lg font-medium text-slate-300 hover:text-white transition-colors py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Partnership</Link>
          <Link href="/about" className="text-lg font-medium text-slate-300 hover:text-white transition-colors py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/blog" className="text-lg font-medium text-slate-300 hover:text-white transition-colors py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/contact" className="text-lg font-medium text-slate-300 hover:text-white transition-colors py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href="https://calendly.com/hello-yespstudio/30min" target="_blank" className="btn-primary text-center py-3 px-6 text-base shadow-lg shadow-blue-500/20 mt-4" onClick={() => setIsOpen(false)}>Book a call</Link>
        </div>
      )}
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="relative bg-slate-950 pt-32 pb-20 overflow-hidden">
      {/* Background Technical Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
          <div className="space-y-12">
            <div className="space-y-6">
              <Link href="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
                <Image src="/logo.png" alt="Yesp Studio Logo" width={40} height={40} className="w-10 h-10" />
                <span className="text-3xl font-black tracking-tighter text-white">
                  Yesp <span className="text-blue-500">Studio</span>
                </span>
              </Link>
              <p className="text-slate-400 text-lg font-medium max-w-sm leading-relaxed">
                Architecting bulletproof automation systems for high-leverage service businesses and agencies.
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em]">Direct Communication</span>
              <a href="mailto:hello@yespstudio.com" className="text-xl font-bold text-white hover:text-blue-500 transition-colors inline-flex items-center group">
                hello@yespstudio.com
                <div className="ml-3 w-8 h-px bg-slate-800 group-hover:w-12 group-hover:bg-blue-500 transition-all" />
              </a>
            </div>

            <div className="flex flex-col space-y-4">
              <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em]">Follow Us</span>
              <div className="flex items-center space-x-6">
                <Link href="https://www.linkedin.com/company/yesptech/" target="_blank" className="p-3 bg-slate-900 rounded-xl text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="https://www.instagram.com/yespstudio?igsh=MTlzODc2dDF6MjNxbA==" target="_blank" className="p-3 bg-slate-900 rounded-xl text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="max-w-xs">
              <NewsletterForm />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:justify-end">
            <div className="space-y-8">
              <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em]">Intelligence</span>
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-slate-400 hover:text-white font-bold transition-colors">Home</Link>
                <Link href="/services" className="text-slate-400 hover:text-white font-bold transition-colors">Services</Link>
                <Link href="/blog" className="text-slate-400 hover:text-white font-bold transition-colors">Blog</Link>
                <Link href="/partnership" className="text-slate-400 hover:text-white font-bold transition-colors">Partnership</Link>
              </div>
            </div>
            <div className="space-y-8">
              <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em]">Network</span>
              <div className="flex flex-col space-y-4">
                <Link href="/about" className="text-slate-400 hover:text-white font-bold transition-colors">About</Link>
                <Link href="/contact" className="text-slate-400 hover:text-white font-bold transition-colors">Contact</Link>
                <Link href="https://calendly.com/hello-yespstudio/30min" target="_blank" className="text-blue-500 hover:text-blue-400 font-bold transition-colors">Book a call</Link>
              </div>
            </div>
            <div className="space-y-8">
              <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em]">Regions</span>
              <div className="flex flex-col space-y-4">
                <Link href="/locations/uk" className="text-slate-600 hover:text-white font-bold transition-colors">United Kingdom</Link>
                <Link href="/locations/usa" className="text-slate-600 hover:text-white font-bold transition-colors">United States</Link>
                <Link href="/locations/india" className="text-slate-600 hover:text-white font-bold transition-colors">India</Link>
                <Link href="/locations/germany" className="text-slate-600 hover:text-white font-bold transition-colors">Germany</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-4">
            <Image src="/logo.png" alt="Yesp Studio" width={24} height={24} className="w-6 h-6" />
            <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">
              © {new Date().getFullYear()} Yesp Corporation. Engineered for focus.
            </p>
          </div>

          <div className="flex items-center space-x-6 text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">
            <Link href="/privacy" className="hover:text-slate-400 cursor-pointer transition-colors text-slate-800">Privacy Protocol</Link>
            <Link href="/terms" className="hover:text-slate-400 cursor-pointer transition-colors text-slate-800">Systems Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

