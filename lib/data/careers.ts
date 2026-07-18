export interface Role {
  slug: string;
  title: string;
  team: string;
  type: string;
  location: string;
  summary: string;
}

// Placeholder roles — replace with real openings before launch.
export const roles: Role[] = [
  {
    slug: 'senior-brand-designer',
    title: 'Senior Brand Designer',
    team: 'Design',
    type: 'Full-time',
    location: 'Remote / Global',
    summary:
      'Lead identity systems for ambitious brands end-to-end — from first sketch to guidelines. You think in systems, sweat the craft, and can defend a decision calmly in a client review.',
  },
  {
    slug: 'frontend-engineer',
    title: 'Frontend Engineer (Next.js / React)',
    team: 'Engineering',
    type: 'Full-time',
    location: 'Remote / Global',
    summary:
      'Build fast, accessible marketing sites and products on Next.js. You care about Core Web Vitals, semantic HTML, and shipping things that look exactly like the design.',
  },
  {
    slug: 'content-and-social-strategist',
    title: 'Content & Social Strategist',
    team: 'Growth',
    type: 'Contract to Full-time',
    location: 'Remote / Global',
    summary:
      'Own content calendars and community for a small portfolio of clients. You write well, think in platform-native formats, and turn analytics into the next month’s plan.',
  },
];