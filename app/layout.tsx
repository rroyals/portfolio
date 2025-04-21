import './assets/globals.css';

import { Metadata } from 'next';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import localFont from 'next/font/local';
import { JetBrains_Mono } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';

import clsx from 'clsx';
import Script from 'next/script';

const SaansFont = localFont({
  src: './saans-font.woff2',
  display: 'swap',
});

const JetBrainsMonoFont = JetBrains_Mono({
  display: 'swap',
  variable: '--font-monospace',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Brendan Royals',
  description:
    'Brendan Royals is a software engineer based in New York.',
  openGraph: {
    type: 'website',
    title: 'Brendan Royals',
    description:
      'Brendan Royals is a software engineer based in New York.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Brendan Royals',
      },
    ],
    siteName: 'Brendan Royals',
  },
  metadataBase: new URL('https://rroyals.github.io/portfolio/'),
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Brendan Royals',
  image: 'https://alexpate.com/avatar.jpeg',
  url: 'https://rroyals.github.io/portfolio/',
  jobTitle: 'Software Engineer',
  sameAs: [
    'https://www.github.com/rroyals',
    'https://www.linkedin.com/in/brendan-royals/',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {process.env.NODE_ENV === 'production' && (
          <Script
            src="https://analytics.ahrefs.com/analytics.js"
            data-key="Lp8HPBxSc/ujln/5tFmj3A"
            defer={true}
          />
        )}
      </head>
      <body
        className={clsx(
          SaansFont.className,
          JetBrainsMonoFont.variable,
          'bg-slate-50'
        )}
      >
        <div className="max-w-2xl lg:max-w-xl mx-auto">
          <header className="pt-8 md:pt-16 pb-16 px-4 md:px-0 flex justify-between">
            <p></p>
          </header>
          {children}
          <footer className="px-4 md:px-0 border-t border-slate-200 py-8 text-slate-700 font-mono text-xs tracking-tight flex justify-between">
            <p>
              &copy; 2025 - {new Date().getFullYear()} {'/'} Brendan Royals
            </p>
          </footer>
        </div>
        <Analytics />
        <GoogleAnalytics gaId="G-NRKQPP7M9P" />
      </body>
    </html>
  );
}
