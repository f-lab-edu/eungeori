import { style } from "@vanilla-extract/css";

export const colors = {
  point: "#4FE786",
  primary: "#141313",
  line: "#F3F3F3",
  white: "#ffffff",
  white30: "#F5F5F5",
  gray200: "#D9D9D9",
  gray300: "#AEB0B2",
  gray500: "#9B9B9B",
  background: "#F5F5F5",
};

export const point = style({
  color: colors.point,
});

export const primary = style({
  color: colors.primary,
});

export const line = style({
  color: colors.line,
});

export const white = style({
  color: colors.white,
});

export const white30 = style({
  color: colors.white30,
});

export const gray200 = style({
  color: colors.gray200,
});

export const gray300 = style({
  color: colors.gray300,
});

export const gray500 = style({
  color: colors.gray500,
});

export const background = style({
  color: colors.background,
});
