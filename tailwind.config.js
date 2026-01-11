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
          600: '#FF6F1A',
          700: '#E55800',
          800: '#B24400',
          900: '#7F3100',
        },
        neutral: {
          dark: '#545354',
        },
        accent: {
          green: '#7ED957',
          red: '#FF5657',
          yellow: '#FFBD59',
        },
        background: '#F6F8FB',
        surface: '#FFFFFF',
        text: {
          DEFAULT: '#101828',
          muted: '#667085',
        },
        border: 'rgba(16,24,40,0.08)',
      },
      fontFamily: {
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'display-1': ['52px', { lineHeight: '1.15', fontWeight: '700' }],
        'display-2': ['42px', { lineHeight: '1.2', fontWeight: '600' }],
        'heading-1': ['34px', { lineHeight: '1.25', fontWeight: '600' }],
        'heading-2': ['28px', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-3': ['22px', { lineHeight: '1.35', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.6' }],
        'body-sm': ['14px', { lineHeight: '1.5' }],
      },
      borderRadius: {
        'card': '18px',
        'button': '14px',
        '2xl': '18px',
        '3xl': '24px',
      },
      boxShadow: {
        'soft': '0 18px 60px rgba(16, 24, 40, 0.10)',
        'card': '0 10px 30px rgba(16, 24, 40, 0.08)',
        'sm-soft': '0 4px 20px rgba(16, 24, 40, 0.06)',
      },
      backgroundImage: {
        'gradient-soft-1': 'linear-gradient(135deg, rgba(255,145,77,0.12), rgba(126,217,87,0.10))',
        'gradient-soft-2': 'linear-gradient(135deg, rgba(255,189,89,0.14), rgba(255,86,87,0.10))',
        'gradient-hero': 'radial-gradient(60% 60% at 50% 20%, rgba(255,145,77,0.14) 0%, rgba(246,248,251,0) 60%)',
        'gradient-cta': 'linear-gradient(135deg, #FF914D 0%, #FFBD59 100%)',
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

