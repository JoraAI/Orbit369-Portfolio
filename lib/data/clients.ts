// Fictional placeholder client wordmarks — invented names, not real brands.
export interface ClientWordmark {
  name: string;
  industry: string;
}

export const clients: ClientWordmark[] = [
  { name: 'Meridian Foods', industry: 'Food & Beverage' },
  { name: 'Northgate Realty', industry: 'Real Estate' },
  { name: 'Vireo Health', industry: 'Health & Wellness' },
  { name: 'Kessler & Finch', industry: 'Professional Services' },
  { name: 'Lumen Studios', industry: 'Media & Entertainment' },
  { name: 'Ardent Logistics', industry: 'Logistics' },
  { name: 'Solene Beauty', industry: 'Beauty & Cosmetics' },
  { name: 'Cadence Fitness', industry: 'Fitness' },
];

export const stats = [
  { value: '3', label: 'continents served', sub: 'US, EU, SEA & India' },
  { value: '24–48h', label: 'avg. response time', sub: 'on business days' },
  { value: '100%', label: 'NDA-first engagements', sub: 'discretion by default' },
];