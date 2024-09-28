import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { vars } from "./vars.css";

const spaceValues = {
  ...vars.space,
};

const properties = defineProperties({
  properties: {
    padding: spaceValues,
    paddingTop: spaceValues,
    paddingBottom: spaceValues,
    paddingLeft: spaceValues,
    paddingRight: spaceValues,
  },
});

export const sprinkles = createSprinkles(properties);
