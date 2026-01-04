"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Phone,
  Mail,
  ArrowRight,
  BookOpen,
  Menu,
  X,
  Star,
  Download,
  Zap,
  Award,
  TrendingUp,
  MapPin,
  ShieldCheck,
  Calendar,
  MessageCircle,
  BookAIcon,
  BookCopyIcon,
  PrinterCheck,
  PenBox,
  PenLine
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { logAnalyticsEvent } from '@/lib/firebase';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentDate = new Date();
  const targetDate = new Date(2026, 3); // April 2026
  const isPastApril2026 = currentDate > targetDate;

  const sessionLabel = isPastApril2026 ? "Upcoming Sessions" : "April 2026 Session";
  const sessionStatus = isPastApril2026 ? "Session Ready" : "April Session Ready";
  const sessionHeadline = isPastApril2026 ? "New Sessions. Locked In." : "April 2026. Locked In.";
  const sessionAdCopy = isPastApril2026
    ? "The academic session is fast approaching. Lock in your factory priority today."
    : "The 2026 academic session is fast approaching. Lock in your factory priority today.";

  if (!mounted) return null;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };



  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="font-neuton text-stone-900 bg-stone-50 selection:bg-red-100 selection:text-red-900 selection:font-bold overflow-x-hidden">

      {/* Floating Navigation Pill */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4 md:pt-6 px-4">
        <nav className={`transition-all duration-500 ease-out border border-stone-200/50 ${scrolled ? 'w-full max-w-5xl bg-white/80 backdrop-blur-xl shadow-xl shadow-stone-200/50 rounded-2xl py-2 md:py-3 px-4 md:px-6' : 'w-full max-w-7xl bg-transparent py-4 px-0'}`}>
          <div className="flex justify-between items-center">
            {/* Logo Branding - Standardized */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              {/* <div className={`relative transition-all duration-300 ${scrolled ? 'w-10 h-10' : 'w-14 h-14'} flex items-center justify-center`}>
                <Image
                  src="/logo.png"
                  alt="Smartnote Logo"
                  width={scrolled ? 40 : 56}
                  height={scrolled ? 40 : 56}
                  className="object-contain"
                />
              </div> */}
              <div className="flex flex-col">
                <div className="h-6 md:h-8 flex items-center">
                  <Image
                    src="/logo.png"
                    alt="Smartnote"
                    width={scrolled ? 80 : 100}
                    height={25}
                    className="object-contain"
                    priority
                  />
                </div>
                <span className="text-[0.6rem] font-bold tracking-widest uppercase text-stone-400 mt-0.5">A Unit of GPW Offset</span>
              </div>
            </div>

            {/* Desktop Links */}
            <div className={`hidden md:flex items-center gap-2 p-1 ${scrolled ? 'bg-stone-100/50 rounded-full' : ''}`}>
              {['Products', 'Our Story', 'Why Us'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="px-5 py-2 text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-white rounded-full transition-all"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative px-6 py-2.5 bg-stone-900 text-white rounded-xl font-medium overflow-hidden transition-all hover:shadow-lg hover:shadow-stone-900/20"
              >
                <div className="absolute inset-x-0 bottom-0 h-0 w-full bg-gradient-to-r from-red-600 to-orange-600 group-hover:h-full transition-all duration-300 -z-10"></div>
                <span className="relative flex items-center gap-2">
                  Get your Quotation now! <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

            {/* Mobile Toggle */}
            <button className="md:hidden p-2 text-stone-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-40 bg-stone-50/98 backdrop-blur-3xl pt-32 px-6 flex flex-col gap-10 items-center text-center overflow-y-auto"
          >
            <div className="flex flex-col gap-8 text-3xl font-black text-stone-900 tracking-tighter">
              <button onClick={() => scrollToSection('products')} className="hover:text-red-600 transition-colors italic">Products</button>
              <button onClick={() => scrollToSection('our-story')} className="hover:text-red-600 transition-colors italic">Our Story</button>
              <button onClick={() => scrollToSection('why-us')} className="hover:text-red-600 transition-colors italic">Why Us?</button>
              <hr className="border-stone-200 w-24 mx-auto" />
              <button onClick={() => scrollToSection('contact')} className="text-red-600 italic">Request Quote</button>
            </div>

            <div className="mt-auto pb-12 flex flex-col items-center gap-6">
              <Image src="/logo.png" alt="Smartnote" width={110} height={30} className="mb-4" />
              <div className="flex gap-4">
                <a href="tel:+919338121008" className="p-4 bg-white rounded-full shadow-lg border border-stone-200 hover:scale-110 active:scale-95 transition-all"><Phone className="w-6 h-6 text-red-600" /></a>
                <a href="mailto:sales@smartnote.co.in" className="p-4 bg-white rounded-full shadow-lg border border-stone-200 hover:scale-110 active:scale-95 transition-all"><Mail className="w-6 h-6 text-red-600" /></a>
              </div>
              <p className="text-[0.7rem] text-stone-400 font-bold uppercase tracking-[0.2em]">A GPW Offset Company</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section - Custom Notebook Background */}
      <header className="relative pt-44 pb-16 md:pt-60 md:pb-32 overflow-hidden">
        <h1 className="sr-only">Smartnote Odisha - Bulk Answer Sheet Manufacturer & School Stationery Supplier</h1>

        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-gradient-to-br from-yellow-100/30 to-orange-100/20 rounded-full blur-[80px] md:blur-[140px] translate-x-1/3 -translate-y-1/3 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-tr from-red-100/20 to-rose-100/10 rounded-full blur-[60px] md:blur-[120px] -translate-x-1/3 translate-y-1/3 -z-10"></div>

        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-24 lg:items-start">

            <motion.div
              className="lg:w-3/5 space-y-6 md:space-y-10 relative z-10 text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 shadow-sm text-[10px] font-bold tracking-widest uppercase text-red-600">
                  <Award className="w-3 h-3" />
                  <span>Since 2013</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900 border border-stone-800 shadow-sm text-[10px] font-bold tracking-widest uppercase text-yellow-500">
                  <ShieldCheck className="w-3 h-3" />
                  <span>GST & MSME Registered</span>
                </div>
              </div>

              <div className="space-y-4 md:space-y-6">
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-[0.01em] text-stone-900 leading-[0.95] md:leading-[0.9]">
                  Premium Printing <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600">
                    For New Sessions.
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-stone-500 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                  Odisha&apos;s trusted manufacturer for <strong className="text-stone-900">Answer Booklets, OMR Sheets, Diary, Registers, Copier Paper and Custom Notebooks</strong>. Secure your supply for the {sessionLabel} today.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 md:px-10 py-4 md:py-5 bg-stone-900 text-white rounded-2xl font-bold text-lg hover:bg-black transition-all shadow-2xl shadow-stone-900/20 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 overflow-hidden group relative"
                >
                  <div className="absolute inset-0 bg-red-600 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out -z-10"></div>
                  <Download className="w-5 h-5 text-red-400 group-hover:text-white transition-colors" />
                  <span>Get Your Quotation now!</span>
                </button>

                <div className="flex items-center justify-center gap-4 px-6 py-4 bg-white/50 border border-stone-100 rounded-2xl shadow-sm">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-stone-100 border-2 border-white flex items-center justify-center overflow-hidden shrink-0">
                        <Image src={`https://i.pravatar.cc/150?u=${i + 20}`} alt="Client" width={32} height={32} className="w-full h-full object-cover grayscale" />
                      </div>
                    ))}
                  </div>
                  <div className="text-left">
                    <p className="text-stone-900 text-[10px] font-black uppercase leading-none">Trusted by 50+</p>
                    <p className="text-stone-400 text-[8px] font-bold mt-1 uppercase tracking-widest">Educational Institutes</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-[35%] relative w-full max-w-[320px] md:max-w-sm lg:max-w-none mx-auto lg:self-stretch"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative group h-full">
                <div className="absolute -inset-4 bg-gradient-to-tr from-red-600 to-yellow-600 rounded-[3rem] blur-3xl opacity-5 group-hover:opacity-10 transition-opacity"></div>
                <div className="relative bg-white p-3 rounded-[2.5rem] shadow-2xl border border-stone-100 overflow-hidden transform group-hover:rotate-1 transition-transform duration-700 h-full">
                  <div className="h-full rounded-[2rem] overflow-hidden relative min-h-[400px]">
                    <Image
                      src="https://images.unsplash.com/photo-1758183961426-88d64eb5f787?auto=format&fit=crop&q=80&w=800"
                      alt="Premium Printing"
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/95 via-transparent to-transparent flex flex-col justify-end p-6 md:p-8 text-white">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/80">{sessionStatus}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold italic leading-tight">&quot;Precision is our only benchmark.&quot;</h3>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Social Proof Marquee - Logo & Name based News Headline style */}
      <section className="bg-stone-950 py-12 overflow-hidden relative border-y border-white/5">
        <div className="relative w-full">
          {/* Marquee Track */}
          <div className="flex w-max animate-marquee gap-18 items-center opacity-80 hover:opacity-100 transition-opacity duration-500">

            {[...Array(2)].map((_, loopIndex) => (
              <div
                key={loopIndex}
                className="flex gap-18 items-center px-12"
              >
                {[
                  {
                    src: "/rsp_logo.png",
                    alt: "Rourkela Steel Plant",
                    name: "RSP (Rourkela Steel Plant)",
                    invert: true
                  },
                  {
                    src: "/dalmia-logo.png",
                    alt: "Dalmia Cement",
                    name: "Dalmia Cement",
                    invert: true
                  },
                  {
                    src: "/mcl-logo.png",
                    alt: "Mahanadi Coalfields",
                    name: "MCL (Mahanadi Coalfields)",
                    invert: true
                  },
                  {
                    src: "/dav-institutions.png",
                    alt: "DAV Institutions",
                    name: "DAV Institutions"
                  },
                  {
                    src: "/st-paul.png",
                    alt: "St Paul's School",
                    name: "St Paul’s School"
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-6 shrink-0 group"
                  >
                    {/* Logo */}
                    <div className="h-10 md:h-14 w-14 md:w-20 relative">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className={`
                    object-contain transition-all duration-500
                    ${item.invert ? "invert brightness-0" : "grayscale"}
                    opacity-80 group-hover:opacity-100
                  `}
                      />
                    </div>

                    {/* Brand Name */}
                    <span className="text-white font-extrabold uppercase tracking-[0.25em] text-[10px] md:text-sm italic whitespace-nowrap opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Product Section */}
      <section id="products" className="py-24 md:py-32 bg-white relative overflow-hidden" style={{ backgroundImage: 'url(/bg_pattern.jpg)', backgroundSize: 'contain', backgroundPosition: 'center', backdropFilter: 'blur(2px)' }}>
        <div className="absolute inset-0 notebook-grid opacity-[0.03]"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mb-12 md:mb-20 text-center md:text-left">
            <motion.div {...fadeInUp}>
              <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 block">Our Catalog</span>
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-[0.01em] leading-tight italic">Precision Crafted <br className="hidden md:block" />Paper Solutions.</h2>
              <p className="text-stone-500 text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">We specialize in high-volume, secure printing for educational and corporate giants. Quality you can trust.</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

            {/* Large Item: Answer Sheets */}
            <motion.div
              className="md:col-span-8 md:row-span-2 rounded-[2.5rem] bg-stone-900 p-8 md:p-16 text-white relative overflow-hidden group shadow-2xl min-h-[500px] md:min-h-[600px]"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest mb-8 inline-block">Institutional Scale</span>
                  <h3 className="text-5xl md:text-7xl font-black mb-6 tracking-[0.01em] italic leading-none">Answer <br />Booklets.</h3>
                  <p className="text-stone-400 max-w-sm text-lg md:text-xl leading-relaxed">Secure 32/40 Pages booklets. Custom numbered, perforated, and thread-stitched for ultimate tamper-proofing.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 border-t border-white/5">
                  <div className="flex flex-col">
                    <span className="text-stone-500 text-[10px] font-black uppercase tracking-widest mb-1">Ink Handling</span>
                    <span className="text-xl md:text-2xl font-bold tracking-tight italic">Zero Bleed Guarantee</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-stone-500 text-[10px] font-black uppercase tracking-widest mb-1">Security</span>
                    <span className="text-xl md:text-2xl font-bold tracking-tight italic">Centerfold Protection</span>
                  </div>
                </div>
              </div>
              <div className="absolute right-[-5%] top-[-25%] w-[60%] h-[75%] rotate-[-12deg] group-hover:rotate-[-5deg] transition-transform duration-700 hidden lg:block overflow-hidden" >
                <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent rounded-3xl backdrop-blur-3xl border border-white/10" style={{ borderRadius: '2.5rem', backgroundImage: 'url(/answersheet.png)', backgroundSize: 'cover', zoom: 1.2, filter: 'grayscale(1)' }}></div>
              </div>
            </motion.div>

            {/* OMR Sheets */}
            <motion.div
              className="md:col-span-4 rounded-[2.5rem] bg-red-600 p-8 md:p-10 text-white relative overflow-hidden group shadow-xl min-h-[280px]"
              whileHover={{ y: -5 }}
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md mb-6 border border-white/10">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-black mb-3 italic tracking-tight">OMR Sheets</h3>
                  <p className="text-red-50/70 text-base md:text-lg font-medium leading-snug">Elite-grade scan readability. 100% precision for critical examinations.</p>
                </div>
              </div>
              <div className="absolute right-[-5%] top-[-10%] w-[60%] h-[65%] rotate-[-12deg] group-hover:rotate-[-5deg] transition-transform duration-700 hidden lg:block overflow-hidden" >
                <div className="w-full h-full bg-gradient-to-br from-white/40 to-transparent rounded-3xl backdrop-blur-3xl border border-white/10" style={{ borderRadius: '2.5rem', backgroundImage: 'url(/omr.png)', backgroundSize: 'cover', zoom: 1.2, color: 'transparent' }}></div>
              </div>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
            </motion.div>

            {/* Custom Notebooks */}
            <motion.div
              className="md:col-span-4 rounded-[2.5rem] bg-stone-50 p-8 md:p-10 text-stone-900 border border-stone-200 relative overflow-hidden group shadow-sm hover:shadow-xl transition-all min-h-[280px]"
              whileHover={{ y: -5 }}
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md border border-stone-100">
                  <BookOpen className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-black mb-3 italic tracking-tight">Custom Books</h3>
                  <p className="text-stone-500 text-base md:text-lg font-medium leading-snug">Premium academic notebooks tailored with your brand identity.</p>
                </div>
              </div>
              <div className="absolute right-[-5%] top-[-10%] w-[60%] h-[65%] rotate-[-12deg] group-hover:rotate-[-5deg] transition-transform duration-700 hidden lg:block overflow-hidden" >
                <div className="w-full h-full bg-gradient-to-br from-white/40 to-transparent rounded-3xl backdrop-blur-3xl border border-white/10" style={{ borderRadius: '2.5rem', backgroundImage: 'url(/custom-notebook.png)', backgroundSize: 'contain', zoom: 1.2, color: 'transparent' }}></div>
              </div>
            </motion.div>

            {/* Registers */}
            <motion.div
              className="md:col-span-4 rounded-[2.5rem] bg-stone-50 p-8 md:p-10 text-stone-900 border border-stone-200 relative overflow-hidden group shadow-sm hover:shadow-xl transition-all min-h-[280px]"
              whileHover={{ y: -5 }}
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md border border-stone-100">
                  <BookCopyIcon className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-black mb-3 italic tracking-tight">Custom Registers</h3>
                  <p className="text-stone-500 text-base md:text-lg font-medium leading-snug">Premium Registers for daily activities.</p>
                  <p className="text-stone-500 text-base md:text-lg font-medium leading-snug">Customize with your brand identity and needs.</p>
                </div>
              </div>
              <div className="absolute right-[-5%] top-[-10%] w-[60%] h-[55%] rotate-[-12deg] group-hover:rotate-[-5deg] transition-transform duration-700 hidden lg:block overflow-hidden" >
                <div className="w-full h-full bg-gradient-to-br from-white/40 to-transparent rounded-3xl backdrop-blur-3xl border border-white/10" style={{ borderRadius: '2.5rem', backgroundImage: 'url(/registers.png)', backgroundSize: 'contain', zoom: 1.2, color: 'transparent' }}></div>
              </div>
            </motion.div>

            {/* Copier/Xerox Paper */}
            <motion.div
              className="md:col-span-4 rounded-[2.5rem] bg-red-600 p-8 md:p-10 text-white relative overflow-hidden group shadow-xl min-h-[280px]"
              whileHover={{ y: -5 }}
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-md border border-red-600">
                  <PrinterCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-black mb-3 italic tracking-tight">Copier/Xerox Paper</h3>
                  <p className="text-red-50/70 text-base md:text-lg font-medium leading-snug">Premium Xerox Paper for printing documents. We have JK, Maple, Satia, and many more.</p>
                </div>
              </div>
              <div className="absolute right-[-5%] top-[-10%] w-[60%] h-[55%] rotate-[-12deg] group-hover:rotate-[-5deg] transition-transform duration-700 hidden lg:block overflow-hidden" >
                <div className="w-full h-full bg-gradient-to-br from-white/40 to-transparent rounded-3xl backdrop-blur-3xl border border-white/10" style={{ borderRadius: '2.5rem', backgroundImage: 'url(/xerox.png)', backgroundSize: 'contain', zoom: 1.2, color: 'transparent' }}></div>
              </div>
            </motion.div>

            {/* Stationery */}
            <motion.div
              className="md:col-span-4 rounded-[2.5rem] bg-stone-900 p-8 md:p-10 text-white border border-stone-200 relative overflow-hidden group shadow-sm hover:shadow-xl transition-all min-h-[280px]"
              whileHover={{ y: -5 }}
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md border border-stone-100">
                  <PenLine className="w-6 h-6 text-stone-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-black mb-3 italic tracking-tight">School Stationery</h3>
                  <p className="text-stone-500 text-base md:text-lg font-medium leading-snug">All your school stationery at one place.</p>
                </div>
              </div>
              <div className="absolute right-[-5%] top-[-10%] w-[60%] h-[65%] rotate-[-12deg] group-hover:rotate-[-5deg] transition-transform duration-700 hidden lg:block overflow-hidden" >
                <div className="w-full h-full bg-gradient-to-br from-white/40 to-transparent rounded-3xl backdrop-blur-3xl border border-white/10" style={{ borderRadius: '2.5rem', backgroundImage: 'url(/stationery.png)', backgroundSize: 'contain', zoom: 1.2, color: 'transparent' }}></div>
              </div>
            </motion.div>

            {/* Office Supply Section */}
            <motion.div
              className="md:col-span-12 rounded-[2.5xl] md:rounded-[3rem] bg-yellow-400 p-8 md:p-14 text-stone-950 relative overflow-hidden group shadow-inner mt-4"
              whileHover={{ y: -5 }}
            >
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">
                <div className="max-w-xl">
                  <h3 className="text-4xl md:text-5xl font-black tracking-[0.01em] italic mb-6 leading-none">Comprehensive Print Logistics.</h3>
                  <p className="font-bold text-stone-900/80 text-lg md:text-xl leading-relaxed">From Admission Envelopes to Progress Report Cards — we handle the complete administrative print load for Odisha&apos;s top institutes.</p>
                </div>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full md:w-auto px-10 py-5 bg-stone-950 text-white rounded-2xl font-black text-lg italic flex items-center justify-center gap-4 hover:bg-black transition-all shadow-xl group/btn"
                >
                  Bulk Institutional Inquiry <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
              <div className="absolute inset-0 notebook-grid opacity-[0.05] -z-10"></div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* B2B Targeted Why Us Section */}
      <section id="why-us" className="py-24 md:py-40 bg-stone-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-20 lg:items-center">
            <div className="lg:w-1/2">
              <span className="text-red-700 px-4 py-1.5 bg-red-50 border border-red-100 rounded-full font-black tracking-widest uppercase text-[10px] mb-8 inline-block">Industrial Authority</span>
              <h2 className="text-5xl md:text-7xl font-black mb-10 md:mb-16 tracking-[0.01em] leading-none italic">Factory Direct. <br />Seamless Delivery.</h2>

              <div className="space-y-10 md:space-y-14">
                {[
                  {
                    title: "Preferred B2B Pricing",
                    desc: "State-of-the-art Heidelberg & Komori offset machines. No middlemen, no commissions — just raw, unbeatable factory pricing.",
                    icon: <TrendingUp className="w-6 h-6" />
                  },
                  {
                    title: "Session Reliability",
                    desc: "25+ years of meeting tight academic deadlines. We produce millions of units monthly, ensuring you never run out of stock.",
                    icon: <Calendar className="w-6 h-6" />
                  },
                  {
                    title: "Strategic Logistical Hub",
                    desc: "Headquartered in Rourkela. Our dedicated fleet ensures overnight delivery to Bhubaneswar, Sambalpur, and coastal Odisha.",
                    icon: <MapPin className="w-6 h-6" />
                  }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white border border-stone-200 flex items-center justify-center text-stone-400 group-hover:bg-stone-950 group-hover:text-yellow-500 transition-all duration-500 shadow-sm group-hover:shadow-xl">
                      {feature.icon}
                    </div>
                    <div className="pt-2">
                      <h3 className="text-2xl md:text-3xl font-black text-stone-900 mb-3 italic tracking-tight">{feature.title}</h3>
                      <p className="text-stone-500 leading-relaxed font-medium text-lg md:text-xl">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 relative w-full pt-10 lg:pt-0">
              <div className="relative bg-white rounded-[3.5rem] p-10 md:p-14 shadow-2xl border border-stone-100 overflow-hidden">
                <div className="absolute inset-0 notebook-grid opacity-[0.05]"></div>

                <div className="relative z-10 space-y-10">
                  <div className="bg-stone-50 p-8 md:p-10 rounded-[2.5rem] border border-stone-100 shadow-inner md:-rotate-2 hover:rotate-0 transition-transform duration-700 group">
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-stone-100">
                        <Star className="w-6 h-6 text-yellow-500 fill-current" />
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] mb-1">Quality Assurance</span>
                        <div className="flex gap-1 text-yellow-500">
                          {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-current" />)}
                        </div>
                      </div>
                    </div>
                    <p className="text-stone-800 font-bold text-xl md:text-2xl leading-relaxed italic pr-6">&quot;Scaling our institutional requirements with Smartnote was seamless. Their industrial capacity is exactly what Odisha&apos;s education sector needed.&quot;</p>
                    <div className="mt-10 md:mt-14 pt-8 border-t border-stone-200/50 flex items-center gap-5">
                      {/* <div className="w-14 h-14 rounded-2xl bg-white shadow-xl overflow-hidden ring-4 ring-white shrink-0">
                        <img src="https://i.pravatar.cc/150?u=42" alt="Director" className="w-full h-full object-cover grayscale" />
                      </div> */}
                      <div>
                        <p className="text-stone-950 font-black text-base italic leading-none">Director of Operations</p>
                        <p className="text-stone-400 text-[10px] md:text-xs font-black mt-2 uppercase tracking-[0.2em]">Leading Odisha Institution</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 md:gap-8">
                    <div className="bg-stone-950 p-8 md:p-10 rounded-[2.5rem] text-white shadow-2xl hover:scale-105 transition-transform duration-500 flex flex-col items-center justify-center text-center">
                      <p className="text-white/80 text-[10px] font-black uppercase tracking-[0.2em]">MSME Registered</p>
                      <Image src="/msme-logo.png" alt="MSME Registration" width={150} height={50} className="object-contain filter brightness-200 mb-4 invert h-36" />
                    </div>
                    <div className="bg-red-600 p-8 md:p-10 rounded-[2.5rem] text-white shadow-2xl hover:scale-105 transition-transform duration-500 flex flex-col items-center justify-center text-center">
                      <p className="text-white/80 text-[10px] font-black uppercase tracking-[0.2em]">Made in India</p>
                      <Image src="/make-in-india.png" alt="Made in India" width={150} height={50} className="object-contain filter brightness-0 invert" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story / Heritage Section */}
      <section id="our-story" className="py-32 md:py-48 bg-stone-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(220,38,38,0.15),transparent_60%)]"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row gap-20 md:gap-24 items-center">
            <div className="md:w-1/2 w-full">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group border border-white/5 order-2 md:order-1">
                <Image
                  src="/facility.png"
                  alt="GPW Offset Facility"
                  width={800}
                  height={500}
                  className="w-full h-[400px] md:h-[600px] object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                  <p className="font-black text-3xl md:text-4xl italic tracking-tighter text-white">GPW Offset Facility</p>
                  <p className="text-red-500 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mt-3 italic">Industrial Heavy Printing Hub</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 space-y-10 text-center md:text-left order-1 md:order-2">
              <motion.div {...fadeInUp}>
                <span className="text-yellow-500 font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6 block italic">The GPW Legacy</span>
                <h3 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-[0.01em] italic leading-none mb-10">Quarter Century <br />of Precision.</h3>
                <div className="space-y-8 text-stone-400 text-lg md:text-xl leading-relaxed font-medium">
                  <p>
                    <strong className="text-white uppercase tracking-[0.2em] text-base font-black italic">Smartnote</strong> is the premium institutional wing of <strong className="text-white underline decoration-red-600 underline-offset-8">GPW Offset</strong> — a name synonymous with heavy-duty printing infrastructure since 2013.
                  </p>
                  <p>
                    From the single machine in Rourkela that started it all, to our current multi-state distribution network, we&apos;ve never shifted our focus: <span className="text-white italic font-bold">Absolute, measurable print quality.</span>
                  </p>
                </div>

                <div className="flex justify-center md:justify-start gap-14 md:gap-20 pt-12 md:pt-16">
                  <div>
                    <p className="text-6xl md:text-8xl font-black text-white italic leading-none tracking-tighter">25</p>
                    <p className="text-yellow-500 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mt-4 italic">Years Heritage</p>
                  </div>
                  <div>
                    <p className="text-6xl md:text-8xl font-black text-white italic leading-none tracking-tighter">1M+</p>
                    <p className="text-yellow-500 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mt-4 italic">Books Monthly</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote/CTA Section */}
      <section id="contact" className="py-24 md:py-32 bg-stone-50 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-stone-950 to-transparent opacity-20"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="bg-[#fcfbf4] rounded-[3.5rem] md:rounded-[4.5rem] p-8 md:p-24 lg:p-32 text-stone-950 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-stone-200/60 overflow-hidden relative group">
            <div className="absolute inset-0 notebook-grid opacity-[0.08]"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-20 lg:items-center">
              <div>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-10 tracking-[0.01em] leading-none italic text-center lg:text-left">{sessionHeadline}</h2>
                <p className="text-stone-500 text-xl md:text-2xl mb-14 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed text-center lg:text-left italic">{sessionAdCopy}</p>

                <div className="space-y-8 md:space-y-10 max-w-sm mx-auto lg:mx-0">
                  {[
                    { label: "Institutional Hotline", value: "94370 82564, 79787 36215", icon: Phone },
                    { label: "Request For Proposal", value: "ganeshkej@gmail.com", icon: Mail },
                    { label: "Printing Facility", value: "Rourkela, Odisha", icon: MapPin }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-8 group/item">
                      <div className="w-16 h-16 rounded-3xl bg-stone-950 text-white flex items-center justify-center shadow-2xl group-hover/item:bg-red-600 transition-all duration-500 shrink-0 transform group-hover/item:-translate-y-1">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-black text-stone-400 mb-1 italic">{item.label}</p>
                        <p className="text-2xl md:text-3xl font-black tracking-tight group-hover/item:text-stone-700 transition-colors italic">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-10 bg-red-600 rounded-[3rem] blur-[100px] opacity-10"></div>
                <div className="bg-white p-10 md:p-14 lg:p-16 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-stone-100 flex flex-col gap-10 relative z-10">
                  <div className="space-y-6">
                    <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-stone-400 text-center italic">Connect Directly</p>
                    <div className="grid grid-cols-3 gap-4 md:gap-6">
                      <a
                        href="tel:+919437082564"
                        onClick={() => logAnalyticsEvent('contact_click', { type: 'phone' })}
                        className="aspect-square bg-stone-50 rounded-3xl flex flex-col items-center justify-center gap-3 border border-stone-100 hover:bg-stone-900 hover:text-white transition-all duration-500 group/icon"
                      >
                        <Phone className="w-6 h-6 md:w-8 md:h-8 group-hover/icon:scale-110 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Call</span>
                      </a>
                      <a
                        href="https://wa.me/917077533883"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => logAnalyticsEvent('contact_click', { type: 'whatsapp' })}
                        className="aspect-square bg-green-50 rounded-3xl flex flex-col items-center justify-center gap-3 border border-green-100 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-500 group/icon"
                      >
                        <MessageCircle className="w-6 h-6 md:w-8 md:h-8 group-hover/icon:scale-110 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-widest">WhatsApp</span>
                      </a>
                      <a
                        href="mailto:ganeshkej@gmail.com"
                        onClick={() => logAnalyticsEvent('contact_click', { type: 'email' })}
                        className="aspect-square bg-blue-50 rounded-3xl flex flex-col items-center justify-center gap-3 border border-blue-100 text-blue-600 hover:bg-blue-900 hover:text-white transition-all duration-500 group/icon"
                      >
                        <Mail className="w-6 h-6 md:w-8 md:h-8 group-hover/icon:scale-110 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Email</span>
                      </a>
                    </div>
                  </div>

                  <hr className="border-stone-100" />

                  <div className="space-y-6">
                    <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-stone-400 text-center italic">Our Locations</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <a
                        href="https://maps.app.goo.gl/AaErizvvsHB3ArUa8"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => logAnalyticsEvent('maps_click', { location: 'head_office' })}
                        className="p-5 bg-stone-50 rounded-2xl border border-stone-100 hover:shadow-lg transition-all text-left group/loc"
                      >
                        <MapPin className="w-4 h-4 mt-2 text-stone-300 group-hover/loc:text-red-600" />
                        <p className="text-[8px] font-black uppercase tracking-widest text-stone-400 mb-1">Head Office</p>
                        <p className="text-sm font-bold text-stone-900 group-hover/loc:text-red-600 transition-colors">Smartnote Shop, Rourkela</p>
                      </a>
                      <a
                        href="https://maps.app.goo.gl/wmHdeBNwoFUvCUKS9"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => logAnalyticsEvent('maps_click', { location: 'manufacturing_unit' })}
                        className="p-5 bg-stone-50 rounded-2xl border border-stone-100 hover:shadow-lg transition-all text-left group/loc"
                      >
                        <MapPin className="w-4 h-4 mt-2 text-stone-300 group-hover/loc:text-red-600" />
                        <p className="text-[8px] font-black uppercase tracking-widest text-stone-400 mb-1">Printing Facility</p>
                        <p className="text-sm font-bold text-stone-900 group-hover/loc:text-red-600 transition-colors">GPW Offset, Rourkela</p>
                      </a>
                    </div>
                  </div>

                  <p className="text-stone-400 text-[10px] font-black text-center uppercase tracking-[0.3em] italic">GPW Offset Certified Facility • Rourkela, Odisha</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-stone-50 py-24 md:py-32 border-t border-stone-100 relative">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col items-center gap-6 mb-4">
            <div className={`relative transition-all duration-300 w-20 h-20 flex items-center justify-center`}>
              <Image
                src="/logo.png"
                alt="Smartnote Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-stone-400 italic">Odisha&apos;s Industrial Print Standard</span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-12 md:gap-x-16 gap-y-8 mb-4 text-xs md:text-sm font-black uppercase tracking-[0.2em] text-stone-600">
            {['Answer Sheets', 'Copier Paper', 'OMR Solutions', 'Custom Notebooks', 'Report Cards', 'Register Books', 'Stationery', 'Diary'].map(link => (
              <a key={link} href="#" className="hover:text-red-700 transition-colors relative group py-2">
                {link}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-4">

            {/* Head Office */}
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-6 group">
              <a
                href="https://maps.app.goo.gl/AaErizvvsHB3ArUa8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 text-center"
              >
                {/* <div className="w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center group-hover:bg-red-50 transition-colors">
                  <MapPin className="w-6 h-6 text-stone-400 group-hover:text-red-600 transition-colors" />
                </div> */}

                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-1">
                    Head Office
                  </p>
                  <p className="text-xl font-bold text-red-600">
                    Smartnote Shop
                  </p>
                  <p className="text-sm md:text-base font-bold italic text-stone-700">
                    KK-27, Civil Township, Rourkela, Odisha - 769012
                  </p>
                </div>
              </a>

              {/* Google Map Embed */}
              <div className="w-full h-56 rounded-2xl overflow-hidden border border-stone-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3693.4239361389978!2d84.8183636!3d22.2239884!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a20193182f7cdbb%3A0x62c40c9991fad3bc!2sSmartnote%20Notebook%20-%20Wholesale%20Shop!5e0!3m2!1sen!2sin!4v1767257906093!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Manufacturing Unit */}
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-6 group">
              <a
                href="https://maps.app.goo.gl/wmHdeBNwoFUvCUKS9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 text-center"
              >
                {/* <div className="w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                  <TrendingUp className="w-6 h-6 text-stone-400 group-hover:text-blue-600 transition-colors" />
                </div> */}

                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-1">
                    Manufacturing Unit
                  </p>
                  <p className="text-xl font-bold text-red-600">
                    GPW Offset
                  </p>
                  <p className="text-sm md:text-base font-bold italic text-stone-700">
                    Near Jodabandh High School, Bhumijtola, Rourkela, Odisha - 770036
                  </p>
                </div>
              </a>

              {/* Google Map Embed */}
              <div className="w-full h-56 rounded-2xl overflow-hidden border border-stone-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.572174679187!2d85.00416109999999!3d22.256305599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1ff5eb672a7be9%3A0xdb1f3ee75c74849b!2sGPW%20Offset!5e0!3m2!1sen!2sin!4v1767257672095!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12 opacity-60 hover:opacity-100 transition-opacity mb-8">
            <div className="flex flex-col items-center gap-3">
              {/* <Image src="/gst_logo.png" alt="GST Registered" width={100} height={40} className="object-contain grayscale hover:grayscale-0 transition-all" /> */}
              <div className="text-center">
                <span className="text-[14px] font-black uppercase tracking-widest text-stone-400 block">GSTIN: 21AFQPK9541M2ZX</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-stone-300">Verified Facility</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              {/* <Image src="/msme_logo.png" alt="MSME Registered" width={100} height={40} className="object-contain grayscale hover:grayscale-0 transition-all" /> */}
              <div className="text-center">
                <span className="text-[14px] font-black uppercase tracking-widest text-stone-400 block">UDYAM-OD-30-0025739</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-stone-300">Registered Enterprise</span>
              </div>
            </div>
          </div>
          <p className="text-stone-400 text-[10px] font-black uppercase tracking-[0.3em] italic mb-8">© 2026 A Unit of GPW Offset. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
