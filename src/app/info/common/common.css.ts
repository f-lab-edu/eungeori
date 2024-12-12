import { style } from '@vanilla-extract/css';

export const infoWrapper = style({
  height: '100%',
  padding: '85px 36px 104px 36px',
});

export const infoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: 'calc(730px)',
});
