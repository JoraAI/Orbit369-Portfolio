'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';
import { siteConfig } from '@/lib/data/site';

/**
 * UI-only support chat widget. A floating action button (bottom-right)
 * opens a static chat-style panel with a canned message + a form.
 * No backend — wire to Intercom/Crisp/etc. before launch (see README).
 */
export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    console.log('[chat] message:', message);
    setSent(true);
    setMessage('');
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      {/* Floating action button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        aria-expanded={open}
        className="fixed bottom-6 right-6 z-[80] flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-void shadow-gold-glow-lg transition-transform duration-300 ease-orbit hover:scale-105"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.svg
              key="close"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-6 w-6"
              initial={prefersReducedMotion ? false : { rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.7}
              className="h-6 w-6"
              initial={prefersReducedMotion ? false : { rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <path
                d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          )}
        </AnimatePresence>

        {/* Pulse ring */}
        {!open && (
          <span className="pointer-events-none absolute inset-0 rounded-full bg-gold-500 opacity-60 animate-ping [animation-duration:3s]" />
        )}
      </button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Support chat"
            className="glass-card fixed bottom-24 right-6 z-[80] flex w-[calc(100vw-3rem)] max-w-sm flex-col gap-4 p-5 shadow-card-lift"
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-hairline pb-3">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gold-gradient">
                <span className="font-serif text-sm text-void">O</span>
                <span className="absolute -bottom-0 -right-0 h-2.5 w-2.5 rounded-full border-2 border-surface bg-emerald-400" />
              </span>
              <div>
                <p className="text-sm font-medium text-ink">Orbit 369</p>
                <p className="text-xs text-emerald-300/80">Typically replies in a few hours</p>
              </div>
            </div>

            {/* Canned message */}
            <div className="max-h-60 space-y-3 overflow-y-auto">
              <div className="w-fit max-w-[85%] rounded-2xl rounded-tl-sm border border-hairline bg-void-raised/60 px-3.5 py-2.5 text-sm text-ink-muted">
                Hi there 👋 We typically reply within a few hours. How can we help?
              </div>
              {sent && (
                <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-tr-sm bg-gold-gradient px-3.5 py-2.5 text-sm text-void">
                  Thanks — we'll be in touch shortly.
                </div>
              )}
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} className="flex flex-col gap-2 border-t border-hairline pt-3">
              <label htmlFor="chat-message" className="sr-only">
                Your message
              </label>
              <textarea
                id="chat-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message…"
                rows={2}
                className={cn(
                  'input-orbit resize-none text-sm',
                )}
              />
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-xs text-ink-faint transition-colors hover:text-gold-300"
                >
                  or email us
                </a>
                <button type="submit" className="btn-primary px-4 py-2 text-xs">
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}