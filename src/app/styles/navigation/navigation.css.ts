import { style } from '@vanilla-extract/css';
import { colors } from '../colors.css';

export const navWrapper = style({
  position: 'fixed',
  right: '0',
  left: '0',
  bottom: '0',
  height: '65px',
  maxWidth: '500px',
  margin: '0 auto',
  borderTop: `1px solid  ${colors.line}`,
  background: colors.white,
  zIndex: '10',
});

export const navContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  height: '100%',
});
