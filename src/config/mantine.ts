import { createTheme, defaultVariantColorsResolver } from '@mantine/core';

export const mantineTheme = createTheme({
  fontFamily: '"Roboto", sans-serif',
  headings: {
    fontFamily: 'Gotham',
  },
  defaultRadius: 'md',
  primaryShade: 9,
  primaryColor: 'orange',
  black: 'black',
  colors: {},
  components: {
    Checkbox: {
      defaultProps: {
        fw: '100',
        autoContrast: true,
      },
    },
    Button: {
      defaultProps: {
        autoContrast: true,
      },
    },
  },
  variantColorResolver: (input) => {
    const defaultResolvedColors = defaultVariantColorsResolver(input);
    // Add new variants support
    if (input.variant === 'action-btn') {
      return {
        ...defaultResolvedColors,
        background: 'var(--mantine-color-primary-4)',
        color: 'var(--mantine-color-black)',
        border: 'none',
        hoverColor: 'var(--mantine-color-black)',
        hover: 'var(--mantine-color-primary-6)',
      };
    }
    return defaultResolvedColors;
  },
  autoContrast: true,
});
