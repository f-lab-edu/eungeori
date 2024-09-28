import "./layers.css";
import "./reset.css";
import "./font.css";
import { colors } from "./colors.css";
import { globalStyle, style } from "@vanilla-extract/css";

globalStyle("body", {
  background: colors.background,
});

export const contentContainer = style({
  maxWidth: "430px",
  minWidth: "320px",
  minHeight: "100vh",
  margin: "0 auto",
  position: "relative",
  background: colors.white,
});
