import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib/data/site';
import { CosmicBackground } from '@/components/layout/CosmicBackground';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { CursorGlow } from '@/components/layout/CursorGlow';
import { ChatWidget } from '@/components/widgets/ChatWidget';
import { JsonLd, organizationSchema, websiteSchema } from '@/components/seo/JsonLd';

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const sans = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#07080B',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    'digital media agency',
    'brand identity',
    'web design',
    'web development',
    'social media',
    'SEO',
    'paid media',
    'creative production',
    'Next.js agency',
    'remote agency',
  ],
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  // Icons are auto-detected by Next.js App Router from:
  //   app/icon.svg       → SVG favicon (crisp at any size)
  //   app/apple-icon.png → Apple touch icon
  //   public/favicon.ico → legacy ICO fallback (browsers auto-request /favicon.ico)
  //   public/icon-*.png  → manifest icons
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="relative min-h-screen">
        {/* Sitewide JSON-LD */}
        <JsonLd data={[organizationSchema, websiteSchema]} />

        {/* Persistent cosmic atmosphere */}
        <CosmicBackground />

        {/* Scroll progress + cursor accent */}
        <ScrollProgress />
        <CursorGlow />

        {/* Skip to content for keyboard users */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-gold-gradient focus:px-5 focus:py-2 focus:text-sm focus:text-void"
        >
          Skip to content
        </a>

        <Header />

        <main id="main" className="relative z-10">
          {children}
        </main>

        <Footer />

        {/* UI-only chat widget */}
        <ChatWidget />
      </body>
    </html>
  );
}