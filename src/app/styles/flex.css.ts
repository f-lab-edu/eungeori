import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

const flexProperties = defineProperties({
  properties: {
    display: ['flex'],
    flexDirection: ['row', 'column'],
    justifyContent: ['center', 'flex-start', 'flex-end', 'space-between', 'space-around'],
    alignItems: ['center', 'flex-start', 'flex-end', 'stretch'],
    gap: ['4px', '8px', '16px', '24px', '32px', 'auto'],
    flexWrap: ['nowrap', 'wrap'],
  },
  shorthands: {
    flex: ['display', 'flexDirection', 'justifyContent', 'alignItems'],
  },
});

export const flexSprinkles = createSprinkles(flexProperties);
