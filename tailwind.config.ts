
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-navy': '#1e3a8a',
        'corporate-blue': '#3b82f6',
        'security-green': '#059669',
        'accent-orange': '#ea580c',
        'professional-gray': '#374151',
        'light-background': '#f8fafc',
        'pure-white': '#ffffff',
        'trust-badge': '#16537e',
        'compliance-green': '#166534',
        'alert-red': '#dc2626',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'display': '3.5rem', // 56px
        'h1': '2.5rem',      // 40px
        'h2': '2rem',       // 32px
        'h3': '1.5rem',      // 24px
        'body': '1.125rem',   // 18px
        'small': '0.875rem',  // 14px
      }
    },
  },
  plugins: [],
};
export default config;
