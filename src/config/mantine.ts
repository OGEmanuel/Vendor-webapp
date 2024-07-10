import { createTheme, defaultVariantColorsResolver, parseThemeColor } from '@mantine/core';

export const mantineTheme = createTheme({
  /** Put your mantine theme override here */
  //fontFamily: "'Inter', sans-serif",
  fontFamily: `"Onest", sans-serif`,
  // fontFamilyMonospace: "'Roboto Mono', monospace",
  headings: {},
  defaultRadius: 'sm',

  primaryShade: 7,
  black: 'black',
  colors: {
    primary: [
      '#e4ffee',
      '#cffbe2',
      '#a2f6c4',
      '#72f0a5',
      '#4aeb8b',
      '#2fe879',
      '#1ce670',
      '#05cc5e',
      '#00b652',
      '#009d43',
    ],
    blue: [
      '#e5f4ff',
      '#cde2ff',
      '#9bc2ff',
      '#64a0ff',
      '#3984fe',
      '#1d72fe',
      '#0969ff',
      '#0058e4',
      '#004ecc',
      '#0043b5',
    ],
  },
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
