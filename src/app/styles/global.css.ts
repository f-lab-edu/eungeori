import "./layers.css";
import "./reset.css";
import "./font.css";
import { colors } from "./colors.css";
import { globalStyle, style } from "@vanilla-extract/css";

globalStyle("body", {
  background: colors.background,
});

export const contentContainer = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "430px",
  minWidth: "320px",
  minHeight: "100vh",
  margin: "0 auto",
  padding: "0 28px",
  background: colors.white,
});
