export const systemColors = {
  black: "#252422",
  white: "#FDFEFF",
  accent: "#8833FF",
  accentLight: "#BF90FF",
} as const;

export const styledTheme = {
  fontSize: {
    h1: "40px",
    h2: "32px",
    h3: "28px",
    h4: "24px",
    h5: "20px",
    large: "18px",
    middle: "16px",
    small: "14px",
    extraSmall: "12px",
  },
  spacing: {
    sp4: "4px",
    sp6: "6px",
    sp8: "8px",
    sp12: "12px",
    sp16: "16px",
    sp20: "20px",
    sp24: "24px",
    sp32: "32px",
    sp48: "48px",
    sp64: "64px",
    sp80: "80px",
  },
  systemColors,
} as const;
