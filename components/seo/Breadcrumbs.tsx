'use client';

import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils/cn';

export interface Crumb {
  name: string;
  path: string;
}

/**
 * Visible breadcrumb trail (also mirrored as JSON-LD by the page).
 */
export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <Reveal fadeOnly className={cn('flex items-center gap-2 text-sm', className)}>
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, i) => {
            const last = i === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-2">
                {last ? (
                  <span className="text-ink-muted" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.path} className="link-underline text-ink-faint">
                    {item.name}
                  </Link>
                )}
                {!last && <span className="text-ink-faint/50">/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
    </Reveal>
  );
}