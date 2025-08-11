module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Institutional Authority Blue
        primary: {
          DEFAULT: "#1B365D", // primary-900
          50: "#F0F4F8", // slate-50
          100: "#D9E2EC", // slate-100
          200: "#BCCCDC", // slate-200
          300: "#9FB3C8", // slate-300
          400: "#829AB1", // slate-400
          500: "#627D98", // slate-500
          600: "#486581", // slate-600
          700: "#334E68", // slate-700
          800: "#243B53", // slate-800
          900: "#1B365D", // slate-900
        },
        // Secondary Colors - Kuwait Heritage Green
        secondary: {
          DEFAULT: "#007A3D", // green-900
          50: "#F0FDF4", // green-50
          100: "#DCFCE7", // green-100
          200: "#BBF7D0", // green-200
          300: "#86EFAC", // green-300
          400: "#4ADE80", // green-400
          500: "#22C55E", // green-500
          600: "#16A34A", // green-600
          700: "#15803D", // green-700
          800: "#166534", // green-800
          900: "#007A3D", // green-900
        },
        // Accent Colors - Gold Highlights
        accent: {
          DEFAULT: "#D4AF37", // yellow-600
          50: "#FEFCE8", // yellow-50
          100: "#FEF9C3", // yellow-100
          200: "#FEF08A", // yellow-200
          300: "#FDE047", // yellow-300
          400: "#FACC15", // yellow-400
          500: "#EAB308", // yellow-500
          600: "#CA8A04", // yellow-600
          700: "#A16207", // yellow-700
          800: "#854D0E", // yellow-800
          900: "#D4AF37", // yellow-900
        },
        // Background Colors
        background: "#FAFBFC", // gray-50
        surface: "#F1F3F5", // gray-100
        
        // Text Colors
        text: {
          primary: "#2D3748", // gray-800
          secondary: "#718096", // gray-500
        },
        
        // Status Colors
        success: "#38A169", // green-600
        warning: "#D69E2E", // yellow-600
        error: "#E53E3E", // red-500
        
        // Border Colors
        border: {
          light: "#E2E8F0", // gray-200
          primary: "#1B365D", // primary-900
        },
      },
      fontFamily: {
        headline: ['Noto Sans Arabic', 'sans-serif'],
        body: ['Tajawal', 'sans-serif'],
        cta: ['Cairo', 'sans-serif'],
        accent: ['Amiri', 'serif'],
        sans: ['Tajawal', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'title': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'subtitle': ['1.5rem', { lineHeight: '1.3' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'caption': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'subtle': '0 4px 12px rgba(27, 54, 93, 0.1)',
        'card': '0 2px 8px rgba(27, 54, 93, 0.08)',
        'interactive': '0 6px 16px rgba(27, 54, 93, 0.12)',
        'presentation': '0 8px 24px rgba(27, 54, 93, 0.15)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-right': 'slideRight 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
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
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}