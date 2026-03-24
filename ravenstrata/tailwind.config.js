/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#0a0f1a',
          900: '#0f172a',
          850: '#131c2e',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
          500: '#64748b',
          400: '#94a3b8',
          300: '#cbd5e1',
        },
        safety: {
          DEFAULT: '#ea580c',
          light: '#f97316',
          dark: '#c2410c',
          glow: 'rgba(234, 88, 12, 0.15)',
          bg: 'rgba(234, 88, 12, 0.06)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
        signature: ['var(--font-signature)'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'border-glow': 'borderGlow 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(234, 88, 12, 0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(234, 88, 12, 0.2)' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(234, 88, 12, 0.15)' },
          '50%': { borderColor: 'rgba(234, 88, 12, 0.35)' },
        },
      },
    },
  },
  plugins: [],
};
