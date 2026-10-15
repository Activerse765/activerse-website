// Scores & Rewards is not connected to real game data yet.
// The full design (with sample players) lives in ./ScoresDemo.jsx — swap it back in
// as this page's default export once scores come from the venue's systems.
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Michroma, Inter } from 'next/font/google';
import rootStyles from '../page.module.css';

const michroma = Michroma({ variable: '--font-michroma', subsets: ['latin'], weight: ['400'] });
const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });

export const metadata = {
  title: 'Scores & Rewards — Coming Soon | Activerse',
  robots: { index: false },
};

export default function ScoresAndRewards() {
  return (
    <main className={`${michroma.variable} ${inter.variable} ${rootStyles.siteRoot}`} style={{ minHeight: '100vh' }}>
      <Navbar />
      <section
        style={{
          minHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '140px 24px 80px',
          gap: 24,
        }}
      >
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 6vw, 3.5rem)', textTransform: 'uppercase', letterSpacing: 2 }}>
          Scores &amp; Rewards
        </h1>
        <p style={{ color: '#aaa', fontFamily: 'var(--font-body)', fontSize: '1.15rem', maxWidth: 560, lineHeight: 1.7 }}>
          Personal scores, leaderboards and rewards are coming soon. Until then, come set a high score at the venue.
        </p>
        <Link
          href="/#booking"
          style={{ border: '1px solid var(--color-activerse-red)', padding: '16px 28px', color: '#fff', textDecoration: 'none', letterSpacing: 2, fontSize: '0.85rem', textTransform: 'uppercase' }}
        >
          Book a slot
        </Link>
      </section>
      <Footer />
    </main>
  );
}
