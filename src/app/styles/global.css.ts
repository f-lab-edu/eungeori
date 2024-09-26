import "./layers.css";
import "./reset.css";
import "./font.css";
import { colors } from "./colors.css";
import { globalStyle } from "@vanilla-extract/css";

globalStyle("body", {
  color: colors.primary,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "430px",
  height: "auto",
  margin: "0 auto",
});
