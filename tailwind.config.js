/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#091C35',
          'navy-light': '#0F2847',
          'navy-dark': '#051426',
          'dark-text': '#1F2937',
          'medium-text': '#4B5563',
          'light-text': '#6B7280',
          'subtle-bg': '#F9FAFB',
          'section-bg': '#F3F4F6',
          'card-bg': '#FFFFFF',
        },
        product: {
          'fss-green': '#00B589',
          'fss-green-light': '#E6F9F4',
          'fss-green-dark': '#009B75',
          'fls-green': '#C3E941',
          'fls-green-light': '#F5FCE4',
          'fls-green-dark': '#A8C935',
          'allerq-orange': '#F58A07',
          'allerq-orange-light': '#FEF3E7',
          'allerq-orange-dark': '#D97706',
          'fw-green': '#52B788',
          'fw-green-light': '#EBF7F0',
          'fw-green-dark': '#429970',
        },
        accent: {
          blue: '#3B82F6',
          'blue-light': '#EFF6FF',
          purple: '#8B5CF6',
          'purple-light': '#F5F3FF',
          amber: '#F59E0B',
          'amber-light': '#FEF3C7',
        },
      },
      fontFamily: {
        sans: [
          'Atkinson Hyperlegible',
          'Lexend',
          'Inter',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
      },
      fontSize: {
        base: ['1.125rem', { lineHeight: '1.75', letterSpacing: '-0.011em' }],
        lg: ['1.25rem', { lineHeight: '1.75', letterSpacing: '-0.014em' }],
        xl: ['1.5rem', { lineHeight: '1.6', letterSpacing: '-0.017em' }],
        '2xl': ['1.875rem', { lineHeight: '1.5', letterSpacing: '-0.019em' }],
        '3xl': ['2.25rem', { lineHeight: '1.4', letterSpacing: '-0.021em' }],
        '4xl': ['2.75rem', { lineHeight: '1.3', letterSpacing: '-0.022em' }],
        '5xl': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.024em' }],
        '6xl': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
      },
      borderRadius: {
        DEFAULT: '12px',
        lg: '16px',
        xl: '20px',
        '2xl': '24px',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 4px 16px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.08)',
        'soft-xl': '0 8px 24px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.10)',
        'glow-green': '0 4px 24px rgba(0, 181, 137, 0.2)',
        'glow-orange': '0 4px 24px rgba(245, 138, 7, 0.2)',
        'glow-lime': '0 4px 24px rgba(195, 233, 65, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'fade-in-fast': 'fadeIn 0.2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
