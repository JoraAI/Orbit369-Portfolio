import { cn } from '@/lib/utils/cn';
import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Add a subtle top hairline divider */
  divided?: boolean;
  as?: 'section' | 'div';
}

/**
 * Standard vertical-rhythm section wrapper.
 */
export function Section({
  children,
  className,
  id,
  divided = false,
  as: Tag = 'section',
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(
        'relative w-full py-20 sm:py-28 lg:py-32',
        divided && 'border-t border-hairline',
        className,
      )}
    >
      <div className="container-orbit">{children}</div>
    </Tag>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

/**
 * Eyebrow + serif title + optional description, with scroll reveal.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold-500/60" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      )}
      <h2 className="max-w-3xl text-h2 text-ink text-balance">{title}</h2>
      {description && (
        <p className="max-w-2xl text-lg leading-relaxed text-ink-muted text-pretty">
          {description}
        </p>
      )}
    </Reveal>
  );
}