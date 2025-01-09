/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "dark-blue": "#040836",
        "light-pink": "#ff014f",
      },
      backgroundImage: {
        "hero-img": "url('/public/hero-bg.png')",
        "about-img": "url('/public/about-bg.png')",
        "text-gradient": "linear-gradient(90deg, rgba(0,192,255,1) 0%, rgba(255,1,79,1) 100%)",
        "proj-1-img": "url('/public/proj-1.jpg')",
        "proj-2-img": "url('/public/proj-2.jpg')",
        "proj-3-img": "url('/public/proj-3.jpg')",
        "proj-4-img": "url('/public/proj-4.jpg')",
        "proj-5-img": "url('/public/proj-5.jpg')",
        "proj-6-img": "url('/public/proj-6.jpg')",
        "line-gradient": "linear-gradient(to right, rgba(255, 255, 255, 0), white, rgba(255, 255, 255, 0))"
      },
      colors: {
        "dark-blue": "#040836"
      },
      boxShadow: {
        "input-focus": "0 0 0 .25rem rgba(13,110,253,.25)"
      },
      screens:{
        xs:"400px"
      }

    },
  },
  plugins: [],
}

