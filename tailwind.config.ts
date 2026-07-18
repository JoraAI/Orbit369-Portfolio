import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cosmic backgrounds — near-black, never pure black
        void: {
          DEFAULT: '#07080B',
          deep: '#050609',
          raised: '#0A0B0E',
        },
        // Glass surfaces
        surface: {
          DEFAULT: '#111318',
          raised: '#161922',
          sunken: '#0D0F13',
        },
        // Gold / brass primary accent
        gold: {
          50: '#FBF4E6',
          100: '#F5E8CC',
          200: '#ECD3A0',
          300: '#E0BA74',
          400: '#D4A853',
          500: '#C9A05C', // primary
          600: '#B0884A',
          700: '#8A6A3A',
          800: '#5E4827',
          900: '#3A2C18',
        },
        // Ember glow — used sparingly for "sunrise core"
        ember: {
          light: '#FFB25C',
          DEFAULT: '#FF7A33',
          deep: '#E85A1A',
        },
        // Text
        ink: {
          DEFAULT: '#F5F3EF',
          muted: '#A8ACB4',
          faint: '#6B7280',
        },
        hairline: 'rgba(229, 197, 119, 0.12)', // warm gold hairline
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Fluid hero scale
        'hero': ['clamp(2.75rem, 7vw, 6rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'display': ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
        'h2': ['clamp(1.75rem, 3.5vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'h3': ['clamp(1.375rem, 2.2vw, 1.75rem)', { lineHeight: '1.2' }],
        'eyebrow': ['0.75rem', { lineHeight: '1', letterSpacing: '0.22em' }],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A05C 0%, #E8C077 100%)',
        'ember-gradient': 'linear-gradient(135deg, #FF7A33 0%, #FFB25C 100%)',
        'gold-sheen': 'linear-gradient(110deg, transparent 30%, rgba(232,192,119,0.5) 50%, transparent 70%)',
        'radial-ember': 'radial-gradient(circle at 50% 50%, rgba(255,122,51,0.18) 0%, transparent 60%)',
        'radial-gold': 'radial-gradient(circle at 50% 50%, rgba(201,160,92,0.15) 0%, transparent 65%)',
        'surface-glass': 'linear-gradient(135deg, rgba(22,25,34,0.7) 0%, rgba(13,15,19,0.6) 100%)',
      },
      boxShadow: {
        'gold-glow': '0 8px 32px -8px rgba(201,160,92,0.25)',
        'gold-glow-lg': '0 20px 60px -15px rgba(201,160,92,0.35)',
        'ember-glow': '0 0 40px -5px rgba(255,122,51,0.4)',
        'card-lift': '0 24px 48px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(229,197,119,0.18)',
      },
      animation: {
        'orbit-spin': 'orbit-spin 90s linear infinite',
        'orbit-spin-slow': 'orbit-spin 140s linear infinite',
        'orbit-spin-reverse': 'orbit-spin-reverse 110s linear infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
        'gradient-sheen': 'gradient-sheen 2.5s ease-in-out',
        'pulse-glow': 'pulse-glow 6s ease-in-out infinite',
      },
      keyframes: {
        'orbit-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'orbit-spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'twinkle': {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.8' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'gradient-sheen': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        'orbit': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;