/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: { 50: '#fcf8ee', 100: '#f8f1e2', 200: '#f1e7d0', 300: '#e6dac0', 400: '#d6c7a3' },
        forest: { 50: '#e8f3ee', 100: '#cfe6dc', 200: '#a5d0bd', 300: '#6fb297', 400: '#3a8f70', 500: '#1b7a5a', 600: '#0f5a43', 700: '#0b4634', 800: '#08372a', 900: '#052a1f' },
        gold: { 300: '#e6c77a', 400: '#d8ae4a', 500: '#c9962b', 600: '#a87a1c' },
        brand: { dark: '#0b3d2e', navy: '#0f5a43', blue: '#0f5a43', cyan: '#c9962b', accent: '#c9962b', textMuted: '#5d6f64' },
        // legacy blue-ish utility classes now resolve to the green/cream palette
        blue:   { 50: '#f3f8f4', 100: '#e8f0e6', 200: '#d6e5d3', 300: '#a5d0bd', 400: '#5aa88a', 500: '#1b7a5a', 600: '#0f5a43', 700: '#0b4634', 800: '#08372a', 900: '#052a1f', 950: '#031c14' },
        sky:    { 50: '#f3f8f4', 100: '#e8f0e6', 200: '#d6e5d3', 300: '#a5d0bd', 400: '#5aa88a', 500: '#1b7a5a', 600: '#0f5a43', 700: '#0b4634', 800: '#08372a', 900: '#052a1f' },
        cyan:   { 50: '#fbf5e3', 100: '#f6ebc7', 200: '#ecd596', 300: '#e6c77a', 400: '#d8ae4a', 500: '#c9962b', 600: '#a87a1c', 700: '#8a6216', 800: '#6b4c12', 900: '#4d370e' },
        indigo: { 50: '#f3f8f4', 100: '#e8f0e6', 200: '#d6e5d3', 300: '#a5d0bd', 400: '#5aa88a', 500: '#1b7a5a', 600: '#0f5a43', 700: '#0b4634', 800: '#08372a', 900: '#052a1f' },
        slate:  { 50: '#faf6ec', 100: '#f3ecda', 200: '#e6dcc4', 300: '#cfc3a6', 400: '#9aa59c', 500: '#6c7c72', 600: '#55665c', 700: '#3f5147', 800: '#2a3b32', 900: '#14261e', 950: '#0c1a14' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', '"Times New Roman"', 'serif'],
      },
      boxShadow: {
        card: '0 10px 30px -14px rgba(70, 50, 10, 0.25)',
        'glow-green': '0 10px 30px -10px rgba(15, 90, 67, 0.55)',
      },
      animation: { float: 'float 5s ease-in-out infinite' },
      keyframes: { float: { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-8px)' } } },
    },
  },
  plugins: [],
}
