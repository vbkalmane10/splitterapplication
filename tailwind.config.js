/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'background-main': '#c5e4e7',
        'background-container': '#ffffff',
        'color-splitter': '#00474b',
      },
      fontSize: {
        'larger': '28px',
        'large': '24px',
        'medium': '18px',
        'small': '16px',
      },
      fontFamily: {
        'space-mono': ['Space Mono', 'monospace'],
      },
      spacing: {
        '15': '60px', 
      },
      maxWidth: {
        '526': '526px', 
        '566': '566px',
      },
    },
  },
  plugins: [],
}

