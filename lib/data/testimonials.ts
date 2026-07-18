export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

// Fictional but realistic — not real people or brands.
export const testimonials: Testimonial[] = [
  {
    quote:
      'They moved with a calmness that was almost unsettling at first — and then the results landed. Our launch felt effortless because Orbit 369 had done the unglamorous work in advance.',
    name: 'Elena',
    role: 'Co-founder & CEO',
    company: 'A wellness app',
  },
  {
    quote:
      'We had been burned by loud agencies before. Orbit 369 was the opposite: quiet, precise, and relentlessly on time. The rebuilt site paid for itself in a quarter.',
    name: 'Marcus',
    role: 'Managing Director',
    company: 'A boutique brokerage',
  },
  {
    quote:
      'What I value most is that they kept circling back. Nothing slipped. It felt like having a senior creative team on retainer without the agency overhead.',
    name: 'Priya',
    role: 'Head of Marketing',
    company: 'A heritage food brand',
  },
];