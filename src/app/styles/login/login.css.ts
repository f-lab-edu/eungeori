import { style } from "@vanilla-extract/css";
import { semiBold, heading, caption } from "../font.css";
import { paddingSprinkles } from "../padding.css";
import { vars } from "../vars.css";

export const loginWrapper = style([
  {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    minHeight: "100%",
  },
  paddingSprinkles({ paddingX: "s28" }),
]);

export const loginLogo = style({
  minHeight: "calc(730px)",
});

export const loginTextBox = style({
  textAlign: "center",
});

export const loginHeading = style([semiBold, heading, paddingSprinkles({ paddingBottom: "s12" })]);

export const loginCaption = style([
  caption,
  {
    color: "#909090",
  },
]);

export const loginBoxContainer = style({
  width: "100%",
});

export const loginBox = style({
  height: "60px",
  borderRadius: vars.space.s12,
  cursor: "pointer",
});

export const loginBoxContents = style([
  {
    display: "grid",
    gridTemplateColumns: "1fr 2.5fr",
    alignItems: "center",
    height: "100%",
  },
  paddingSprinkles({ paddingLeft: "s24" }),
]);
