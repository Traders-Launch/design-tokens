export const TL_FONT = '"Ginóra Sans", Arial, Helvetica, sans-serif';

export const TL_COLORS = {
  blue: {
    dark: "#0a2e6b",
    medium: "#1d4e9e",
    light: "#3172d8",
  },
  green: {
    light: "#16a34a",
    main: "#15803d",
    dark: "#166534",
  },
  background: {
    default: "#0a0a0a",
    paper: "#18181b",
    elevated: "#27272a",
  },
  text: {
    primary: "#ffffff",
    secondary: "rgba(255, 255, 255, 0.70)",
    muted: "rgba(255, 255, 255, 0.50)",
  },
  border: {
    default: "rgba(255, 255, 255, 0.10)",
    subtle: "rgba(255, 255, 255, 0.05)",
  },
  accent: {
    cyan: "#01ff9d",
  },
};

export const TL_GRADIENTS = {
  bluePrimary: `linear-gradient(135deg, ${TL_COLORS.blue.dark} 20%, ${TL_COLORS.blue.medium} 80%)`,
  blueHover: `linear-gradient(90deg, ${TL_COLORS.blue.medium} 0%, ${TL_COLORS.blue.dark} 100%)`,
  greenCta: `linear-gradient(90deg, ${TL_COLORS.green.light} 0%, ${TL_COLORS.green.main} 50%, ${TL_COLORS.green.light} 100%)`,
};

export const TL_TOKENS = {
  font: TL_FONT,
  colors: TL_COLORS,
  gradients: TL_GRADIENTS,
};
