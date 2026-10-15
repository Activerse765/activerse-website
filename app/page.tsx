'use client';

import { useEffect } from 'react';
import { Michroma, Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import HeroScene from '@/components/HeroScene';
import PremiumGamesGallery from '@/components/PremiumGamesGallery';
import Reviews from '@/components/Reviews';
import About from '@/components/About';
import MarqueeStrip from '@/components/MarqueeStrip';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import styles from './page.module.css';
import WhatsAppButton from '@/components/WhatsAppButton';

const michroma = Michroma({
  variable: '--font-michroma',
  subsets: ['latin'],
  weight: ['400'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export default function Home() {
  useEffect(() => {
    // Handle hash navigation when coming from other pages
    const handleHashNavigation = () => {
      if (window.location.hash) {
        const hash = window.location.hash;
        if (hash.length > 1) {
          setTimeout(() => {
            try {
              const element = document.querySelector(hash);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            } catch (error) {
              console.warn('Invalid hash selector:', hash);
            }
          }, 100);
        }
      }
    };

    handleHashNavigation();
    window.addEventListener('hashchange', handleHashNavigation);

    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);

  return (
    <main className={`${michroma.variable} ${inter.variable} ${styles.siteRoot}`}>
      <CustomCursor />
      <Navbar />
      <HeroScene />
      <PremiumGamesGallery />
      <Reviews />
      <About />
      <MarqueeStrip />
      <Booking />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
