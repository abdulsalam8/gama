/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050505',
          900: '#0a0a0a',
          800: '#121212',
          700: '#1a1a1a',
          600: '#242424',
        },
        silver: {
          50: '#f7f7f8',
          100: '#ececee',
          200: '#d4d4d8',
          300: '#a1a1aa',
          400: '#71717a',
        },
        gold: {
          DEFAULT: '#c9a227',
          light: '#e0bc4a',
          dark: '#a6851f',
        },
        accent: {
          DEFAULT: '#3b82f6',
          soft: '#60a5fa',
        },
      },
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(201, 162, 39, 0.18), transparent), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(59, 130, 246, 0.08), transparent)',
        'mesh':
          'linear-gradient(135deg, rgba(201,162,39,0.04) 0%, transparent 40%, rgba(59,130,246,0.05) 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'fade-in': 'fadeIn 0.5s ease-out both',
        'slide-in': 'slideIn 0.4s ease-out both',
        float: 'float 6s ease-in-out infinite',
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
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
