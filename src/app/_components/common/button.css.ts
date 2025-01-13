import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { style } from '@vanilla-extract/css';
import { colors } from '@/app/_styles/colors.css';
import { light } from '@/app/_styles/font.css';

const buttonProperties = defineProperties({
  properties: {
    width: ['115px', '226px', '343px', '100%'],
    height: ['38px', '59px'],
    fontSize: ['12px', '16px', '18px'],
    color: [colors.primary, colors.white],
    background: [colors.primary, colors.white30, colors.point, colors.gray200],
    borderRadius: ['5px', '10px'],
  },
  shorthands: {
    button: ['width', 'height', 'background'],
  },
});

export const buttonSprinkles = createSprinkles(buttonProperties);

export const defaultButtonStyle = buttonSprinkles({
  width: '115px',
  height: '38px',
  background: colors.white30,
});

export type ButtonSprinkles = Parameters<typeof buttonSprinkles>[0];

export const buttonWrapper = style([
  light,
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
]);
