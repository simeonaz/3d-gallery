/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('https://f8n-production.imgix.net/creators/profile/aj63xvdmk.jpg?auto=format%2Ccompress&q=70&max-h=340&max-w=2000&fit=crop')",
      }
    },
    theme: {
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
      }
    }
  },
  plugins: [],
}

