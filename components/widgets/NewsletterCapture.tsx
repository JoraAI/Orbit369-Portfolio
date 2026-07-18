'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils/cn';

/**
 * Newsletter capture — UI only. The submit handler is structured so a
 * real email provider (Resend, ConvertKit, Mailchimp) can be dropped in
 * by replacing the fetch call. See README.
 */
export function NewsletterCapture({ className }: { className?: string }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      // Placeholder: swap for a real endpoint / provider.
      await new Promise((r) => setTimeout(r, 700));
      console.log('[newsletter] subscribe:', email);
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={onSubmit} className={cn('w-full', className)} noValidate>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== 'idle') setStatus('idle');
          }}
          placeholder="you@company.com"
          className="input-orbit flex-1 py-2.5 text-sm"
          aria-invalid={status === 'error'}
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="btn-primary whitespace-nowrap px-5 py-2.5 text-sm disabled:opacity-60"
        >
          {status === 'loading'
            ? 'Subscribing…'
            : status === 'success'
            ? 'Subscribed ✓'
            : 'Subscribe'}
        </button>
      </div>
      {status === 'success' && (
        <p className="mt-2 text-xs text-gold-300">
          Thank you — you are on the list.
        </p>
      )}
      {status === 'error' && (
        <p className="mt-2 text-xs text-ember-light">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}