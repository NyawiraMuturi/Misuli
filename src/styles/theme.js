import {extendTheme} from '@chakra-ui/react'
import '@fontsource/changa'
import '@fontsource/roboto-mono'

export const theme = extendTheme({
    colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        gray: {
          200: '#EBECF',
          300: '#CFDOE5',
          400: '#ADBOCC',
          500: '#848599',
          600: '#515266',
          700: '#33354D',
          800: '#1A1C33',
          900: '#05071D',
        },  
        primary: {
            medium: '#ff2357', 
            light: '#FFA4BA',
            accent: '#591031'
        },

        secondary: {
            medium: '#FFC121', 
            light: '#FFDF8C'
        },
      },

    fonts: {
        heading: 'changa',
        body: 'roboto-mono'
    }
  });