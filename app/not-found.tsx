import Link from 'next/link';
import { OrbitRing } from '@/components/ui/OrbitRing';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-[var(--header-h)]">
      <OrbitRing
        className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 opacity-10"
        rings={3}
        satellites
        spin
      />
      <div className="container-orbit relative z-10 text-center">
        <p className="font-serif text-8xl text-gradient-gold glow-gold sm:text-9xl">404</p>
        <h1 className="mt-4 text-h2 text-balance">This page drifted out of orbit.</h1>
        <p className="mx-auto mt-4 max-w-md text-ink-muted">
          The page you are looking for does not exist or has moved. Let's get
          you back on a stable path.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/" className="btn-primary">
            Return home
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}