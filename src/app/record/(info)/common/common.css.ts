import { style } from '@vanilla-extract/css';

export const infoWrapper = style({
  height: '100%',
});

export const infoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: 'calc(730px)',
});
