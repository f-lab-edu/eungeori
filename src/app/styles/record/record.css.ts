import { style } from "@vanilla-extract/css";
import { paddingSprinkles } from "../padding.css";

export const recordWrapper = style({
  position: "relative",
  height: "100%",
});
export const recordContainer = style([
  {
    height: "100%",
    paddingTop: "85px",
  },
  paddingSprinkles({ paddingX: "s28" }),
]);
