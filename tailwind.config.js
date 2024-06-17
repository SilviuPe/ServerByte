/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './src/App.js'],
  darkMode: false,
  plugins: [
    require('tailwind-scrollbar')
  ],
  theme: {
    spacing: {
      
      // larger (rem)
      non: '0rem',
      x  : '2rem',
      s  : '2.75rem',
      m  : '4rem',
      xl : '5.5rem',
      l  : '7rem',
      lx : '10rem',
      x2l: '15rem',
      x3l: '20rem',
      // smaller (px) 
      0 : '0px',
      1 : '2px',
      2 : '4px',
      3 : '6px',
      4 : '8px',
      5 : '10px',
      6 : '12px',
      7 : '16px',
      8 : '20px',

      //percent (%)

      pc1 : '10%',
      pc2 : '20%',
      pc3 : '30%',
      pc4 : '40%',
      pc5 : '50%',
      pc6 : '60%',
      pc7 : '70%',
      pc8 : '80%'
    },
    extend: {
      boxShadow: {
        '2xl-colored-fade': '2px 2px 10px 0px rgb(79,255,234)',
        '2xl-colored-bright' : '4px 4px 20px 5px rgb(79,255,234)',


        '2xl-colored-plan' : '0px 0px 40px 0px rgba(82, 0, 255,0.8)',
      

        
        '2xl-colored-plan-fade' : '0px 0px 10px 0px rgba(82, 0, 255,0.8)',
      },
      transitionProperty: {
        'h': 'height'
      },
      borderWidth: {
        '4': '4px',
      },
      backgroundImage: {
        // This image is used in a split screen layout page type
        'custom-img-split-screen-page': "url('/src/Assets/background_login.png')"
      },
      colors: {
        background_button_color: '#0047FF',
        background_color: '#000823',

        // Plan colors
        from_plan_color : 'rgba(26, 4, 112, 0.5)',
        to_plan_color : 'rgba(55, 39, 119, 0.5)',

        from_custom_plan_button_color : 'rgb(26, 4, 112)',
        to_custom_plan_button_color : 'rgb(55, 39, 119)',

        from_title_plan_color: '#0A104A',
        to_title_plan_color: '#4C007B',

        // Different colors
        header_color_background: '#000D37',
        content_bg_darker_color: 'rgba(24,17,40,0.3)',
        accent_color: '#4FFFEA',
        FAQ_question_bg_color : '#0E1E56',


        // The color for the login/register/FAQ pages. 
        // This color is used in a split screen layout page type.
        split_screen_layout_background_color: '#091336', 

        // Base colors
        green : 'rgb(0,150,0)',
        red : 'rgb(255,0,0)',
        black: '#000000',
        white: '#ffffff',
        white_transparent: "rgba(200,200,200,0.8)",
        white_transparent_full: "rgba(200,200,200,0.1)"
      }
    },
  },
  variants: {
    extend: {
      height: ['responsive', 'hover', 'focus'],
      opacity: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
}

