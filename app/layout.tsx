import type { Metadata } from 'next';
import { Rajdhani } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const rajdhani = Rajdhani({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const SITE_URL = 'https://www.activerse.co.in';
const SITE_TITLE = 'Activerse Gurugram | Interactive Active Gaming Arena';
const SITE_DESCRIPTION =
  "India's first interactive gaming arena on Golf Course Road, Gurugram. Six physical game rooms: Mega Grid, Laser Escape, Battle Arena, Air Shoot, Power Climb and Basketball. Book for friends, birthdays and corporate teams.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Activerse',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: 'en_IN',
    images: [{ url: '/images/Megagrid.jpeg', alt: 'Players on the Mega Grid at Activerse Gurugram' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/images/Megagrid.jpeg'],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

// Structured data so Google can show Activerse as a local business (address, hours, phone).
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EntertainmentBusiness',
  name: 'Activerse',
  url: SITE_URL,
  image: `${SITE_URL}/images/Megagrid.jpeg`,
  logo: `${SITE_URL}/icon.svg`,
  description: SITE_DESCRIPTION,
  telephone: '+91-9729729347',
  email: 'Activersepvtltd@gmail.com',
  priceRange: '₹1199–₹1499 per person',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Lower Ground Floor, F11, 16&17, Golf Course Road, DLF Phase 1, Sector 27',
    addressLocality: 'Gurugram',
    addressRegion: 'Haryana',
    postalCode: '122002',
    addressCountry: 'IN',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '12:00',
      closes: '22:00',
    },
  ],
  sameAs: ['https://www.instagram.com/activerse_gurgaon'],
};

// Facebook Meta Pixel ID
const FB_PIXEL_ID = '1422011499622261';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Meta Pixel – noscript fallback for browsers with JS disabled */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </head>
      <body className={rajdhani.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}

        {/* ─── Facebook Meta Pixel ─────────────────────────────────────────
            strategy="afterInteractive" → loads after hydration so it never
            blocks the initial render / LCP score.
        ──────────────────────────────────────────────────────────────────── */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
      </body>
    </html>
  );
}
