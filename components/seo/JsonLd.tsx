import { siteConfig } from '@/lib/data/site';

/**
 * Renders one or more JSON-LD structured data blocks.
 * Pass plain JS objects; they are stringified safely.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}

/** Organization schema — used sitewide in root layout. */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.legalName,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo-dark.png`,
  description: siteConfig.description,
  email: siteConfig.email,
  foundingDate: '2024',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rajahmundry',
    addressRegion: 'Andhra Pradesh',
    addressCountry: 'IN',
  },
  sameAs: Object.values(siteConfig.social),
  areaServed: siteConfig.regionsServed.map((r) => ({ '@type': 'Place', name: r })),
};

/** WebSite schema with SearchAction stub — used sitewide. */
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.url,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteConfig.url}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

/** BreadcrumbList schema builder for inner pages. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}