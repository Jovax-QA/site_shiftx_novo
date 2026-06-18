/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      colors: {
        sx: {
          cyan: '#00e5ff',
          'cyan-dim': '#00b4d8',
          red: '#e8341a',
          'red-bright': '#ff6b35',
          dark: '#080808',
          'dark-2': '#0d0d0d',
          'dark-3': '#111111',
          'dark-4': '#161616',
        },
      },
      animation: {
        'orbit-slow': 'orbitSlow 22s linear infinite',
        'orbit-mid': 'orbitSlow 15s linear infinite',
        'orbit-fast': 'orbitSlow 9s linear infinite',
        'orbit-rev': 'orbitReverse 18s linear infinite',
        'float-y': 'floatY 5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'scanline': 'scanline 4s linear infinite',
        'glitch': 'glitch 8s ease-in-out infinite',
      },
      keyframes: {
        orbitSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        orbitReverse: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(400%)' },
        },
        glitch: {
          '0%, 90%, 100%': { transform: 'translateX(0)', clipPath: 'none' },
          '92%': { transform: 'translateX(-3px)', clipPath: 'polygon(0 20%, 100% 20%, 100% 40%, 0 40%)' },
          '94%': { transform: 'translateX(3px)', clipPath: 'polygon(0 60%, 100% 60%, 100% 80%, 0 80%)' },
          '96%': { transform: 'translateX(-2px)', clipPath: 'none' },
        },
      },
    },
  },
  plugins: [],
};
