import { createTheme, darken, defaultVariantColorsResolver, parseThemeColor, rem, rgba, VariantColorsResolver } from '@mantine/core';

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



const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme,
  });

  // Override some properties for variant
  if (parsedColor.isThemeColor && parsedColor.color === 'lime' && input.variant === 'filled') {
    return {
      ...defaultResolvedColors,
      color: 'var(--mantine-color-black)',
      hoverColor: 'var(--mantine-color-black)',
    };
  }

  // Completely override variant
  if (input.variant === 'light') {
    return {
      background: rgba(parsedColor.value, 0.1),
      hover: rgba(parsedColor.value, 0.15),
      border: `${rem(1)} solid ${parsedColor.value}`,
      color: darken(parsedColor.value, 0.1),
    };
  }

  // Add new variants support
  if (input.variant === 'danger') {
    return {
      background: 'var(--mantine-color-red-9)',
      hover: 'var(--mantine-color-red-8)',
      color: 'var(--mantine-color-white)',
      border: 'none',
    };
  }

  return defaultResolvedColors;
};


export const mantineTheme = createTheme({
  variantColorResolver,
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
