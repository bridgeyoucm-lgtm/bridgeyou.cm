/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF914D',
          50: '#FFF5EE',
          100: '#FFE8D9',
          200: '#FFD4B8',
          300: '#FFBC8F',
          400: '#FFA66E',
          500: '#FF914D',
          600: '#F26F1F',
          700: '#E55800',
          800: '#B24400',
          900: '#7F3100',
        },
        accent: {
          green: '#7ED957',
          red: '#FF5657',
          yellow: '#FFBD59',
        },
        ink: {
          DEFAULT: '#101828',
          2: '#1D2939',
        },
        canvas: '#F6F8FB',
        surface: '#FFFFFF',
        line: '#EAECF0',
        line2: '#F2F4F7',
        muted: {
          DEFAULT: '#667085',
          2: '#98A2B3',
        },
        dark: {
          bg: '#0B0F14',
          card: '#121822',
          line: '#1F2836',
          text: '#E6EAF2',
          muted: '#8A94A6',
        },
        // Legacy aliases
        background: '#F6F8FB',
        text: {
          DEFAULT: '#101828',
          muted: '#667085',
        },
        border: '#EAECF0',
      },
      fontFamily: {
        display: ['Fraunces', 'Instrument Serif', 'Georgia', 'serif'],
        sans: ['Inter', 'Geist', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.035em',
        tighter2: '-0.03em',
      },
      boxShadow: {
        xs: '0 1px 2px rgba(16,24,40,0.04)',
        soft: '0 2px 6px rgba(16,24,40,0.05), 0 1px 2px rgba(16,24,40,0.03)',
        card: '0 8px 24px rgba(16,24,40,0.07), 0 2px 6px rgba(16,24,40,0.04)',
        lg: '0 20px 48px rgba(16,24,40,0.10), 0 6px 16px rgba(16,24,40,0.05)',
        glow: '0 20px 60px rgba(255,145,77,0.18)',
        cta: '0 12px 30px rgba(255,145,77,0.35)',
      },
      backgroundImage: {
        'radial-warm': 'radial-gradient(60% 60% at 50% 20%, rgba(255,145,77,0.14) 0%, rgba(246,248,251,0) 60%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
