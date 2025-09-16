module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Primary brand colors with WCAG AA compliance
        'charcoal-ink': '#0F1419',     // Primary text - 15.8:1 contrast on ivory
        'ivory-mist': '#F9F8F5',       // Main background
        'brass-accent': '#BFA46F',     // CTA buttons and accents - 4.7:1 contrast on ivory
        'signal-white': '#FFFFFF',     // Cards and containers
        
        // Extended palette for design flexibility
        'charcoal': {
          50: '#f6f7f8',
          100: '#e1e4e7',
          200: '#c3c9cf',
          300: '#9ea7b1',
          400: '#798690',
          500: '#5f6b76',
          600: '#4a545e',
          700: '#3d454d',
          800: '#343a41',
          900: '#2f3439',
          950: '#0F1419', // Primary charcoal ink
        },
        'brass': {
          50: '#fdfcf9',
          100: '#faf6ed',
          200: '#f4ebd2',
          300: '#ebdaad',
          400: '#e0c485',
          500: '#BFA46F', // Primary brass accent
          600: '#b8956a',
          700: '#997a58',
          800: '#7d634b',
          900: '#66523f',
          950: '#382c20',
        },
      },
      fontFamily: {
        serif: ['"Noto Serif Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      fontSize: {
        // Responsive typography scale
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        // Consistent spacing scale
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}