import type { IconKey } from '@/lib/data/services';
import { cn } from '@/lib/utils/cn';

interface ServiceIconProps {
  icon: IconKey;
  className?: string;
}

/**
 * Line-style icons (1.5px stroke, currentColor) for each service.
 * Kept lightweight as inline SVG so they render with zero extra requests.
 */
export function ServiceIcon({ icon, className }: ServiceIconProps) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className: cn('h-6 w-6', className),
    'aria-hidden': true,
  };

  switch (icon) {
    case 'brand':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" opacity="0.5" />
        </svg>
      );
    case 'web':
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M3 8h18" />
          <circle cx="5.5" cy="6" r="0.5" fill="currentColor" />
          <circle cx="7.5" cy="6" r="0.5" fill="currentColor" />
        </svg>
      );
    case 'social':
      return (
        <svg {...common}>
          <circle cx="6" cy="12" r="2.5" />
          <circle cx="18" cy="6" r="2.5" />
          <circle cx="18" cy="18" r="2.5" />
          <path d="M8.2 10.8 15.8 7M8.2 13.2l7.6 3.8" />
        </svg>
      );
    case 'paid':
      return (
        <svg {...common}>
          <path d="M3 17 9 11l4 4 8-8" />
          <path d="M21 7v4h-4" />
        </svg>
      );
    case 'seo':
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
      );
    case 'video':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="14" height="14" rx="2" />
          <path d="m17 9 4-2v10l-4-2" />
        </svg>
      );
    case 'pr':
      return (
        <svg {...common}>
          <path d="M4 20h16" />
          <path d="M6 16l4-10 4 10" />
          <path d="M8 13h4" />
        </svg>
      );
    case 'product':
      return (
        <svg {...common}>
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M11 18h2" />
        </svg>
      );
    case 'saas':
      return (
        <svg {...common}>
          {/* Cloud = SaaS */}
          <path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.5A3.5 3.5 0 0 1 18 18H7z" />
          {/* Card = payments */}
          <rect x="3" y="14.5" width="13" height="6" rx="1" transform="rotate(0 9.5 17.5)" opacity="0.9" />
          <path d="M3 16.5h13" />
        </svg>
      );
    default:
      return null;
  }
}
