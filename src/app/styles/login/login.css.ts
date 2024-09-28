import { style } from "@vanilla-extract/css";
import { semiBold, heading } from "../font.css";

export const loginTextBox = style({
  textAlign: "center",
});

export const loginHeading = style([
  semiBold,
  heading,
  {
    paddingBottom: "28px",
  },
]);
