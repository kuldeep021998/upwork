/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
      screens: {
        'xs': '360px',
        // => @media (min-width: 360px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    ,
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'theme-purple': '#B51A8A',
        'retechgen-blue': '#1B8DA6',
        'theme-gray': 'rgba(0, 0, 0, 0.39)',
        'theme-gray2': 'rgba(0, 0, 0, 0.75)',
        'theme-blue': 'rgba(27, 141, 166, 0.85)',
        'theme-deep-blue': 'rgba(31, 35, 71, 1)',
        'theme-text-blue': 'rgba(27, 141, 166, 1)',
        'theme-hover-blue': 'rgba(34, 157, 184, 1)',
        'theme-hover-search': 'rgba(43, 59, 83, 0.68)',
        'theme-bg': '#F8F9FA',
        'theme-blue-text': '#1F2347',
        'theme-partner': 'rgba(242, 242, 242, 0.4)',

        // rgba(43, 59, 83, 0.68)

      },
      spacing: {
        '02': '0.09rem',
        '05': '0.15rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '70': '17rem',
        '88': '21.5rem',
        '94': '22.5rem',
        '110': '27.5rem',
        '128': '32rem',
        '132': '36rem',
        '142': '39rem',
        '150': '42rem',
        '160': '45rem',
        '170': '48rem',
        '190': '52rem',
        '200': '96rem',
        '112': '28rem',
        '120': '30rem',
        'logo' : '10rem',
      },
      boxShadow: {
        'custom': '10px 11px 10px 10px rgba(0, 0, 0, 0.3)',
        'statblock': '8px 8px 8px 8px rgba(0, 0, 0, 0.1)',
        'search': '5px 4px 4px 4px rgba(0, 0, 0, 0.06)',
        'button_shadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        'card_shadow': '4px 8px 8px 4px rgba(0, 0, 0, 0.07)',
        'card_shadow2': '4px 8px 8px 4px rgba(27, 141, 166, 0.32)',
        'card_circle_shadow': '0px 8px 8px 0px #00000040',
        'form_shadow': '0px 8px 8px 0px rgba(0, 0, 0, 0.13)',
        'tile_hover_shadow': '4px 8px 10px 4px rgba(27, 141, 166, 0.57)',

        // box-shadow: ;

      },
    }
  }
}

// npx tailwindcss -i ./src/tailwindCSS/Tailwind_Input.css -o ./src/tailwindCSS/Tailwind_Output.css --watch