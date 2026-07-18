'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

type Status = 'idle' | 'loading' | 'success' | 'error';

const budgetRanges = [
  'Under $5k',
  '$5k – $15k',
  '$15k – $40k',
  '$40k – $100k',
  '$100k+',
  'Not sure yet',
];

const projectTypes = [
  'Brand Identity',
  'Website / Web App',
  'Social & Content',
  'Paid Media',
  'SEO & Growth',
  'Video & Creative',
  'PR & Media',
  'App / Product',
  'Something else',
];

/**
 * Contact form — UI only. Submits to /api/contact (a placeholder).
 * Structured so a real email service (Resend, SendGrid, etc.) can be
 * dropped in by editing app/api/contact/route.ts. See README.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const prefersReducedMotion = useReducedMotion();

  const validate = (data: FormData) => {
    const e: Record<string, string> = {};
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    if (!name) e.name = 'Please tell us your name.';
    if (!email) e.email = 'We need an email to reply.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'That email looks off.';
    if (!message) e.message = 'A short note helps us reply well.';
    return e;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const validationErrors = validate(data);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        className="glass-card flex flex-col items-center gap-4 p-10 text-center"
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        role="status"
        aria-live="polite"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient">
          <svg viewBox="0 0 24 24" fill="none" stroke="#07080B" strokeWidth={2.5} className="h-8 w-8">
            <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="text-xl text-ink">Message received.</h3>
        <p className="max-w-sm text-sm text-ink-muted">
          Thank you for reaching out. We typically reply within 24 to 48 hours
          with honest thoughts on scope, timeline, and fit.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="btn-secondary mt-2 text-xs"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="glass-card flex flex-col gap-5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" id="name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Doe"
            className="input-orbit"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
        </Field>
        <Field label="Email" id="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            className="input-orbit"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
        </Field>
      </div>

      <Field label="Company" id="company" optional>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          placeholder="Company name"
          className="input-orbit"
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Budget range" id="budget" optional>
          <select id="budget" name="budget" className="input-orbit" defaultValue="">
            <option value="" disabled>Select a range</option>
            {budgetRanges.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </Field>
        <Field label="Project type" id="projectType" optional>
          <select id="projectType" name="projectType" className="input-orbit" defaultValue="">
            <option value="" disabled>Select a type</option>
            {projectTypes.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message" id="message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your project, goals, and timeline."
          className={cn('input-orbit resize-none')}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
      </Field>

      {status === 'error' && (
        <p className="rounded-lg border border-ember/30 bg-ember/5 px-4 py-3 text-sm text-ember-light" role="alert">
          Something went wrong sending your message. Please try again or email us directly.
        </p>
      )}

      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-ink-faint">
          NDA-first. We never share your details.
        </p>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary disabled:opacity-60"
        >
          {status === 'loading' ? 'Sending…' : 'Send message'}
          {status !== 'loading' && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  id,
  error,
  optional,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="flex items-center gap-2 text-sm font-medium text-ink">
        {label}
        {optional && <span className="text-xs font-normal text-ink-faint">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-xs text-ember-light">
          {error}
        </p>
      )}
    </div>
  );
}