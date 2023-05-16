/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'sans': 'Helvetica, Arial, sans-serif',
      'roboto': "Roboto Condensed",
      'poppins': "Poppins, sans-serif",
      'monserat': "Montserrat, sans-serif"
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    backgroundImage: {
      'headerImg': "url('/public/img/headerDesctopImg.jpg')",
      'headerRespImg': "url('/public/img/headerResponsiveImg.jpg')",
      'pictureSectionImg': "url('/public/img/happyImage.png')",
      'pictureSectionImgResp': "url('/public/img/happyImgResponsive.jpg')",
    },
    extend: {
      colors: {
        mainWhiteColor: '#ffffff',
        navBarColor: 'rgba(53, 53, 53, 0.8)',
        mainOrangeColor: '#fe8232',
        mainBlueColor: 'rgba(42, 138, 196, 1)',
        hoverBlueColor: 'rgb(109, 186, 234)',
        titleBgColor: 'rgba(255, 255, 255, 0.8)'
      },
      height: {
        sectionHight: 'calc(100% - 80px)'
      }
    },
  },
  plugins: [],
}

