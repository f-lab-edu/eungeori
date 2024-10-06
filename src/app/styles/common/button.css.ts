import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { colors } from "../colors.css";
import { caption, defaultSize, light, regular } from "../font.css";
import { style } from "@vanilla-extract/css";

const buttonProperties = defineProperties({
  properties: {
    width: ["115px", "226px"],
    height: ["38px", "59px"],
    fontSize: ["12px", "16px", "18px"],
    color: [colors.primary, colors.white],
    background: [colors.primary, colors.white30],
  },
  shorthands: {
    button: ["width", "height", "background"],
  },
});

export const buttonSprinkles = createSprinkles(buttonProperties);

export const defaultButtonStyle = buttonSprinkles({
  width: "115px",
  height: "38px",
  background: colors.white30,
});

export type ButtonSprinkles = Parameters<typeof buttonSprinkles>[0];

export const buttonWrapper = style([
  light,
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
  },
]);
