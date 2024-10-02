import { style } from "@vanilla-extract/css";
import { paddingSprinkles } from "../padding.css";
import { colors } from "../colors.css";
import { paragraph2, semiBold } from "../font.css";

export const circle = style([
  semiBold,
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "42px",
    height: "42px",
    fontSize: paragraph2,
    backgroundColor: colors.white30,
    borderRadius: "50%",
  },
]);

export const recordWrapper = style({
  position: "relative",
  height: "100%",
  paddingBottom: "80px",
});

export const recordContainer = style([
  {
    height: "100%",
    paddingTop: "85px",
  },
  paddingSprinkles({ paddingX: "s28" }),
]);

export const recordDateSection = style({
  paddingBottom: "64px",
});

export const recordDate = style({
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  justifyItems: "center",
  columnGap: "13px",
  rowGap: "48px",
});
