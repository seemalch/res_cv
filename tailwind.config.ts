import type { Config } from 'tailwindcss';
import tailwindAnimate from 'tailwindcss-animate';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Add this if you have a src/ directory
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1a2639',
          light: '#2a3649',
        },
        yellow: {
          DEFAULT: '#ffc107',
          light: '#ffca28',
          dark: '#f2a346',
        },
        text: {
          DEFAULT: '#f8f9fa',
          secondary: '#adb5bd',
        },
      },
    },
  },
  plugins: [tailwindAnimate],
};

export default config;