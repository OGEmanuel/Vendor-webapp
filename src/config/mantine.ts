import { createTheme, rem } from '@mantine/core';

export function isiPhone() {
  return typeof window !== 'undefined' && /iPhone|iPod/.test(navigator.userAgent);
}

const ERROR_STYLES = {
  error: {
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    borderRadius: '0.375rem',
  },
};

export const mantineTheme = createTheme({
  fontFamily: '"Roboto", sans-serif',
  headings: {
    fontFamily: 'Gotham',
    sizes: {
      h1: { fontSize: rem(36) },
    },
  },
  // primaryShade: 9,
  primaryColor: 'tukshopp',
  defaultRadius: '0.5rem',
  // black: 'black',
  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },
  colors: {
    tukshopp: [
      '#F97316',
      '#F97316',
      '#F97316',
      '#F97316',
      '#F97316',
      '#F97316',
      '#F97316',
      '#F97316',
      '#7E7E80',
      '#F97316',
    ],
    'text-color': [
      '#7E7E80',
      '#aab0b5',
      '#808991',
      '#56626c',
      '#667085',
      '#62738D',
      '#01101c',
      '#010d17',
      '#010a11',
      '#00060b',
      '#000407',
    ],
    'error-color': [
      '#9E2B25',
      '#9E2B25',
      '#9E2B25',
      '#9E2B25',
      '#9E2B25',
      '#9E2B25',
      '#9E2B25',
      '#9E2B25',
      '#9E2B25',
      '#9E2B25',
    ],
    'border-color': [
      '#E4E7EC',
      '#EDEDF4',
      '#E4E7EC',
      '#EDEDF4',
      '#EDEDF4',
      '#EDEDF4',
      '#EDEDF4',
      '#EDEDF4',
      '#EDEDF4',
      '#EDEDF4',
    ],
  },
  components: {
    TagsInput: {
      defaultProps: {
        radius: '8px',
      },
      styles() {
        return {
          ...ERROR_STYLES,
          label: {
            fontWeight: 500,
            fontSize: '0.75rem',
            marginBottom: '0.3rem',
          },
          input: {
            fontSize: isiPhone() ? '1rem' : '0.75rem',
            borderColor: '#DFE0E2 !important',
          },
        };
      },
    },
    Checkbox: {
      defaultProps: {
        fw: '100',
        autoContrast: true,
      },
    },
    Button: {
      defaultProps() {
        return {
          // radius: '16px',
          fontSize: '3rem',
        };
      },
      styles() {
        return {
          root: {
            '&:active': {
              transform: 'none',
            },
          },
        };
      },
    },
    TextInput: {
      defaultProps: {
        radius: '8px',
        fontSize: '16px',
        //borderWidth: '3px',
      },
      styles() {
        return {
          ...ERROR_STYLES,
          label: {
            fontWeight: 400,
            color: '#3C3C3D',
            fontSize: '16px',
            marginBottom: '0.3rem',
          },
          input: {
            '&:invalid': {
              borderColor: '#fff !important',
            },
            // borderWidth: '1px',
            fontSize: isiPhone() ? '1rem' : '0.75rem',
            borderColor: '#DFE0E2 !important',
          },
        };
      },
    },
  },
});
