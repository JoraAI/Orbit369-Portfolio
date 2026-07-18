export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  region: string;
  services: string[];
  cover: string; // gradient token fallback
  image: string; // Unsplash image URL (free to use)
  imageAlt: string;
  resultStat: string;
  resultLabel: string;
  summary: string;
  situation: string;
  approach: string;
  result: string;
  featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'meridian-foods',
    client: 'Meridian Foods',
    industry: 'Food & Beverage',
    region: 'United Kingdom',
    services: ['brand-identity', 'web-design-development', 'social-content'],
    cover: 'gold-ember',
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Artisan food products on a clean wooden surface',
    resultStat: '+140%',
    resultLabel: 'organic traffic in 4 months',
    summary: 'A rebrand and rebuild for a heritage food brand ready to sell direct.',
    situation:
      'Meridian Foods had strong retail distribution but a dated website and no direct-to-consumer presence. They needed an identity refresh that respected their heritage while signalling modern quality.',
    approach:
      'We rebuilt the brand system around their existing wordmark, designed and developed a new Next.js storefront with CMS-driven product pages, and launched a content engine focused on recipes and provenance storytelling.',
    result:
      'Within four months organic traffic grew 140% and direct online sales became a meaningful share of revenue — all without paid acquisition in the launch quarter.',
    featured: true,
  },
  {
    slug: 'northgate-realty',
    client: 'Northgate Realty',
    industry: 'Real Estate',
    region: 'United States',
    services: ['web-design-development', 'seo-growth', 'performance-paid-media'],
    cover: 'deep-gold',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Modern residential building exterior at dusk',
    resultStat: '2.3×',
    resultLabel: 'qualified leads in one quarter',
    summary: 'A high-intent lead engine for a boutique real estate brokerage.',
    situation:
      'Northgate Realty relied on referrals and paid portals. Their site was slow, unranked, and shed leads before they could be contacted.',
    approach:
      'We rebuilt the site on Next.js with fast listing pages, added structured data for local SEO, and structured Google and Meta campaigns around buyer intent in their target zip codes.',
    result:
      'Qualified leads more than doubled in the first quarter while cost-per-lead fell, giving the team a predictable pipeline rather than feast-or-famine referrals.',
    featured: true,
  },
  {
    slug: 'vireo-health',
    client: 'Vireo Health',
    industry: 'Health & Wellness',
    region: 'European Union',
    services: ['brand-identity', 'social-content', 'pr-media-relations'],
    cover: 'ember-core',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Calm wellness and mindfulness scene with soft natural light',
    resultStat: '38k',
    resultLabel: 'community growth in 6 months',
    summary: 'A calm, trustworthy brand for a digital wellness startup.',
    situation:
      'Vireo Health was entering a crowded wellness market with a clinically-grounded app. They needed a brand that felt human and credible, not clinical or cliché.',
    approach:
      'We developed a soft, reassuring identity system, ran a six-month content programme across social channels, and coordinated PR outreach to wellness and tech publications.',
    result:
      'The brand attracted 38,000 engaged followers across channels in six months and earned coverage in three category-relevant publications, supporting a successful app launch.',
    featured: true,
  },
  {
    slug: 'kessler-finch',
    client: 'Kessler & Finch',
    industry: 'Professional Services',
    region: 'Middle East',
    services: ['brand-identity', 'web-design-development', 'seo-growth'],
    cover: 'twilight-gold',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Modern professional office interior with warm lighting',
    resultStat: '5×',
    resultLabel: 'inbound enquiries vs. prior year',
    summary: 'A credible digital presence for a boutique advisory firm.',
    situation:
      'Kessler & Finch had an impressive client roster but an online presence that undersold them. Prospects could not find them, and the site did not convey seniority.',
    approach:
      'We rebuilt the brand around a refined serif system and a restrained dark palette, then developed a site structured around their practice areas with technical SEO foundations.',
    result:
      'Inbound enquiries grew roughly fivefold year-on-year, with the firm now appearing for its core service terms after being invisible in search.',
  },
  {
    slug: 'lumen-studios',
    client: 'Lumen Studios',
    industry: 'Media & Entertainment',
    region: 'Southeast Asia',
    services: ['video-creative-production', 'social-content', 'performance-paid-media'],
    cover: 'gold-ember',
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Film production set with camera equipment and cinematic lighting',
    resultStat: '4.2M',
    resultLabel: 'views on a single launch campaign',
    summary: 'A launch film and content engine for an independent studio.',
    situation:
      'Lumen Studios was releasing its first original series and needed a launch that would cut through without a massive media budget.',
    approach:
      'We produced a cinematic launch film, cut it into platform-native short-form variants, and ran tightly targeted paid amplification across social channels.',
    result:
      'The campaign generated 4.2 million views and meaningfully lifted series awareness, all on a budget intended to stretch across one quarter.',
  },
];

export const featuredWork = caseStudies.filter((c) => c.featured);

export const caseStudyIndustries = Array.from(
  new Set(caseStudies.map((c) => c.industry)),
);

export const caseStudyServiceLabels: Record<string, string> = {
  'brand-identity': 'Brand',
  'web-design-development': 'Web',
  'social-content': 'Social',
  'performance-paid-media': 'Paid Media',
  'seo-growth': 'SEO',
  'video-creative-production': 'Video',
  'pr-media-relations': 'PR',
  'app-product-development': 'Product',
};