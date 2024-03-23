import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const CARBON = '#262626'
const SLATE = '#292929'
const AMBER = '#E77E0D'

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        DEFAULT: ['Bodoni Moda', 'serif'],
        sans: [],
        serif: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        p: ['1.25rem', {
          fontWeight: 400,
          letterSpacing: '0.36px',
          lineHeight: '1.575'
        }]
      },
      tracking: {
        widest: '0.14em'
      },
      colors: {
        amber: {
          DEFAULT: AMBER,
        },
        slate: {
          DEFAULT: SLATE,
        },
        carbon: {
          DEFAULT: CARBON,
        },
        primary: AMBER,
        content: {
          DEFAULT: SLATE,
          dark: CARBON
        }
      },
    },
  },
  // https://tailwindcss.com/docs/plugins
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.h1': {
          fontFamily: 'Helvetica Neue',
          fontSize: '1.4rem',
          fontWeight: '500',
          letterSpacing: '0.1875rem',
          lineHeight: '1.45',
          textTransform: 'uppercase',
        },
        '.hero': {
          fontFamily: 'Alegreya',
          fontSize: '9rem',
          fontWeight: '400',
          lineHeight: '1',
          fontStyle: 'normal',
          textTransform: 'none',
          letterSpacing: '0em',
        },
        // '.btn-blue': {
        //   backgroundColor: '#3490dc',
        //   color: '#fff',
        //   '&:hover': {
        //     backgroundColor: '#2779bd'
        //   },
        // },
        // '.btn-red': {
        //   backgroundColor: '#e3342f',
        //   color: '#fff',
        //   '&:hover': {
        //     backgroundColor: '#cc1f1a'
        //   },
        // },
      })
    })
  ],
};
export default config;
