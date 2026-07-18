'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

/**
 * Persistent cosmic atmosphere — fixed behind all content:
 *  - a near-invisible twinkling starfield (canvas, very low opacity)
 *  - a soft radial ember glow anchored near the hero
 *  - a faint vignette to focus content toward the middle
 *
 * Performance: stars are static-position canvas points redrawn only on
 * resize; twinkle is CSS opacity animation via a second canvas pass is
 * avoided in favour of a lightweight requestAnimationFrame loop that
 * only runs when motion is allowed and the tab is visible.
 */
export function CosmicBackground({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let stars: { x: number; y: number; r: number; baseAlpha: number; twinkleSpeed: number; phase: number }[] = [];
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * DPR;
      canvas.height = h * DPR;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

      // Density scales with viewport but stays modest for performance
      const count = Math.min(140, Math.floor((w * h) / 14000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.1 + 0.3,
        baseAlpha: Math.random() * 0.5 + 0.1,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const animate = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      const t = performance.now() * 0.001;
      for (const s of stars) {
        const alpha = s.baseAlpha + Math.sin(t * (s.twinkleSpeed * 100) + s.phase) * 0.15;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        // Warm-tinted star color, mostly off-white with a faint gold cast
        ctx.fillStyle = `rgba(245, 243, 239, ${Math.max(0.05, alpha)})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(animate);
    };

    const onResize = () => {
      draw();
    };

    draw();
    if (!prefersReducedMotion) {
      raf = requestAnimationFrame(animate);
    } else {
      // Static single render for reduced motion
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 243, 239, ${s.baseAlpha})`;
        ctx.fill();
      }
    }

    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, [prefersReducedMotion]);

  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none fixed inset-0 z-0 overflow-hidden', className)}
    >
      {/* Base void */}
      <div className="absolute inset-0 bg-void" />

      {/* Radial ember glow anchored top-center (hero zone) — fades via gradient */}
      <div className="absolute left-1/2 top-0 h-[70vh] w-[120vw] -translate-x-1/2 bg-radial-ember opacity-60 blur-2xl" />

      {/* Soft gold wash lower-left for depth */}
      <div className="absolute bottom-0 left-0 h-[50vh] w-[60vw] bg-radial-gold opacity-30 blur-3xl" />

      {/* Starfield canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-70" />

      {/* Vignette to focus content */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(5,6,9,0.6) 100%)',
        }}
      />
    </div>
  );
}