import { createTheme, defaultVariantColorsResolver, parseThemeColor } from '@mantine/core';

export const mantineTheme = createTheme({
  fontFamily: `"Onest", sans-serif`,
  headings: {},
  defaultRadius: 'sm',
  primaryShade: 7,
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
    const parsedColor = parseThemeColor({
      color: input.color || input.theme.primaryColor,
      theme: input.theme,
    });
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
