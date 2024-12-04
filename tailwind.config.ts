import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#040F0F',
        primary: '#00FF88',
        'primary-hover': '#33FF9F',
        secondary: '#80FFB9',
        surface: '#0A1F1F',
        text: '#FFFFFF',
        'text-secondary': '#A0AEC0',
        border: 'rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
