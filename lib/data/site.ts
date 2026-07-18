export const siteConfig = {
  name: 'Orbit 369 Media',
  legalName: 'Orbit 369 Media Pvt Ltd',
  shortName: 'Orbit 369',
  tagline: 'We work in the shadows. Your brand takes the spotlight.',
  description:
    'Orbit 369 Media is a boutique digital media agency working quietly and precisely behind the scenes so its clients shine in front of theirs. Brand, web, content, and growth — steady, gravitational, always circling back to deliver.',
  url: 'https://orbit369media.com',
  // Placeholder contact details — swap before launch (see README)
  email: 'hello@orbit369media.com',
  headquarters: 'Rajahmundry, Andhra Pradesh, India',
  headquartersShort: 'Rajahmundry, AP, India',
  servingNote: 'Our team works remotely and serves clients across the globe.',
  ogImage: '/og-default.png',
  // Placeholder socials — replace hrefs before launch
  social: {
    linkedin: 'https://www.linkedin.com/company/orbit-369-media',
    instagram: 'https://www.instagram.com/orbit369media',
    x: 'https://www.x.com/orbit369media',
    behance: 'https://www.behance.net/orbit369media',
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  regionsServed: ['US', 'UK', 'EU', 'Middle East', 'SEA', 'India'],
} as const;

export type SiteConfig = typeof siteConfig;