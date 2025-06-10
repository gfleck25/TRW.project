/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'wave-slow': 'wave-slow 20s ease-in-out infinite',
        'wave-medium': 'wave-medium 15s ease-in-out infinite',
        'wave-fast': 'wave-fast 12s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-medium': 'float-medium 6s ease-in-out infinite',
        'float-fast': 'float-fast 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};