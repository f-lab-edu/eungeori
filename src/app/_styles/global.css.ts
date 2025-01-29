import './layers.css';
import './reset.css';
import './font.css';
import { colors } from './colors.css';
import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('body', {
  color: colors.primary,
  background: colors.background,
});

export const contentContainer = style({
  minHeight: '100vh',
  minWidth: '320px',
  maxWidth: '500px',
  margin: ' 0px auto',
  position: 'relative',
  background: colors.white,
});

export const pointer = style({
  cursor: 'pointer',
});

export const buttonOutLine = style({
  ':focus': {
    outline: '2px solid #005fcc',
    outlineOffset: '2px',
  },
});
