/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroImage: 'url()'
      }
    },
    colors: {
      primary: 'rgb(37, 100, 0)',
      white: 'rgb(255, 255, 255)',
      background: 'rgb(218, 242, 229)',
      hover: 'hsl(98, 100%, 40%)',
      secondary: 'rgb(34, 57, 21)',
      buttonColor: 'rgb(105, 197, 147)',
      background2: 'rgb(231, 255, 206)',
      background3: 'rgb(182, 219, 159)',
      modelBackground: 'rgb(186, 216, 244)'
    },
    
  },
  plugins: [],
}

