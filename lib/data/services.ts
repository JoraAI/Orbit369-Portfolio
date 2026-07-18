export type IconKey =
  | 'brand'
  | 'web'
  | 'social'
  | 'paid'
  | 'seo'
  | 'video'
  | 'pr'
  | 'product'
  | 'saas';

export interface Service {
  slug: string;
  icon: IconKey;
  title: string;
  short: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  accent?: 'gold' | 'ember';
}

export const services: Service[] = [
  {
    slug: 'brand-identity',
    icon: 'brand',
    title: 'Brand Identity & Design',
    short: 'Logos, visual systems, and guidelines that feel inevitable.',
    description:
      'We build identities with gravity — marks, palettes, and systems that hold together across every surface. From the first sketch to a documented brand bible, every choice is deliberate and built to last beyond a trend cycle.',
    deliverables: [
      'Logo & secondary marks',
      'Color, typography & iconography systems',
      'Full brand guidelines document',
      'Stationery, social templates & brand assets',
    ],
    idealFor: 'Founders launching a new venture or repositioning an existing one.',
  },
  {
    slug: 'web-design-development',
    icon: 'web',
    title: 'Web Design & Development',
    short: 'Fast, cinematic marketing sites, e-commerce, and web apps.',
    description:
      'Marketing sites and products engineered on Next.js and React — quick to load, easy to manage, and a pleasure to use. We design and build in the same room, so the finished site looks and moves exactly as intended.',
    deliverables: [
      'Responsive design & prototyping',
      'Next.js / React development',
      'CMS integration & handover',
      'Core Web Vitals optimization',
    ],
    idealFor: 'Teams who need a site that converts without compromising on craft.',
  },
  {
    slug: 'social-content',
    icon: 'social',
    title: 'Social Media & Content Engagement',
    short: 'Calendars, community, and short-form video that builds a following.',
    description:
      'A steady orbit of content that keeps your audience close. We plan, produce, and manage the day-to-day — so your channels feel alive and intentional rather than sporadic and reactive.',
    deliverables: [
      'Monthly content calendars',
      'Short-form video & motion graphics',
      'Community management & engagement',
      'Monthly performance reporting',
    ],
    idealFor: 'Brands that want consistent presence without building an in-house team.',
  },
  {
    slug: 'performance-paid-media',
    icon: 'paid',
    title: 'Performance & Paid Media',
    short: 'Meta, Google, and LinkedIn campaigns with clear attribution.',
    description:
      'Spend that pulls its weight. We structure campaigns, set up conversion tracking, and optimize toward the metrics that move revenue — not vanity dashboards.',
    deliverables: [
      'Campaign strategy & audience research',
      'Creative direction & ad production',
      'Conversion tracking & analytics setup',
      'Weekly optimization & reporting',
    ],
    idealFor: 'Companies ready to scale acquisition with disciplined measurement.',
  },
  {
    slug: 'seo-growth',
    icon: 'seo',
    title: 'SEO & Growth Marketing',
    short: 'Technical SEO, content strategy, and analytics that compound.',
    description:
      'Growth that compounds quietly. We fix the technical foundations, map a content strategy worth reading, and instrument the analytics that tell you what is actually working.',
    deliverables: [
      'Technical SEO audit & fixes',
      'Keyword & content strategy',
      'On-page optimization & schema markup',
      'GA4 / analytics dashboard setup',
    ],
    idealFor: 'Brands that want traffic and pipeline that grows over time, not overnight.',
  },
  {
    slug: 'video-creative-production',
    icon: 'video',
    title: 'Video & Creative Production',
    short: 'Brand films, reels, and product photography with polish.',
    description:
      'Moving image, still image, and everything in between. From a 15-second reel to a brand film, we handle direction, shoot coordination, and post-production so the output looks considered, not churned out.',
    deliverables: [
      'Concept & storyboarding',
      'Production & shoot coordination',
      'Editing, color & sound design',
      'Format adaptations for each platform',
    ],
    idealFor: 'Brands that need premium visuals but cannot staff a full production team.',
  },
  {
    slug: 'pr-media-relations',
    icon: 'pr',
    title: 'PR & Media Relations',
    short: 'Press outreach and reputation management, handled discreetly.',
    description:
      'The right story in the right room. We craft pitches that get read, build targeted media lists, and manage your reputation with the discretion a growing brand requires.',
    deliverables: [
      'Press releases & narrative development',
      'Targeted media outreach & follow-up',
      'Spokesperson prep & talking points',
      'Reputation monitoring',
    ],
    idealFor: 'Founders and brands preparing for launches or category positioning.',
    accent: 'ember',
  },
  {
    slug: 'app-product-development',
    icon: 'product',
    title: 'App & Product Development',
    short: 'Mobile and web apps for brands that need a real product.',
    description:
      'When marketing is not enough and you need a digital product, we design and build mobile and web applications — focused, maintainable, and shipped on a sane timeline.',
    deliverables: [
      'Product & UX design',
      'Mobile & web app development',
      'API design & integrations',
      'Launch, monitoring & iteration',
    ],
    idealFor: 'Companies whose product is the business, not just a marketing surface.',
    accent: 'ember',
  },
  {
    slug: 'saas-payment-integration',
    icon: 'saas',
    title: 'SaaS Platforms & Payment Integration',
    short: 'SaaS web apps, mobile checkout, and payment gateways wired in cleanly.',
    description:
      'We build SaaS websites and mobile applications end-to-end — including secure payment gateway integration (Stripe, Razorpay, PayPal and more), subscription billing, multi-currency checkout, and the dashboards that tie it all together. Ship a product that is ready to take payments from day one.',
    deliverables: [
      'SaaS website & dashboard development',
      'Mobile app payment gateway integration',
      'Subscription & recurring billing setup',
      'Secure, multi-currency checkout flows',
    ],
    idealFor: 'Founders launching SaaS products or apps that need to accept payments globally.',
    accent: 'ember',
  },
];

export const coreServices = services.slice(0, 6);
