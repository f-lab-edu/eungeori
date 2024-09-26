import { style } from "@vanilla-extract/css";

export const flexBase = style({
  display: "flex",
});

// justify-content 옵션
export const justifyCenter = style({
  justifyContent: "center",
});

export const justifyStart = style({
  justifyContent: "flex-start",
});

export const justifyEnd = style({
  justifyContent: "flex-end",
});

// align-items 옵션
export const alignCenter = style({
  alignItems: "center",
});

export const alignStart = style({
  alignItems: "flex-start",
});

export const alignEnd = style({
  alignItems: "flex-end",
});
