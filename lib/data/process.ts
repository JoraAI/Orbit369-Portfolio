export interface ProcessStep {
  num: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    num: '01',
    title: 'Discover',
    description:
      'We listen first — your goals, audience, constraints, and the unspoken context that shapes every brief.',
  },
  {
    num: '02',
    title: 'Strategy',
    description:
      'A focused plan grounded in research, not guesswork. We agree what success looks like before we build.',
  },
  {
    num: '03',
    title: 'Create',
    description:
      'Design and build happen together, in tight loops, with you in the room — no black boxes.',
  },
  {
    num: '04',
    title: 'Launch',
    description:
      'We ship with care — tested, optimised, and documented — so go-live feels calm, not chaotic.',
  },
  {
    num: '05',
    title: 'Orbit',
    description:
      'After launch we keep circling back — optimising, supporting, and compounding the work over time.',
  },
];