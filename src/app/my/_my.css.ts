import { style } from '@vanilla-extract/css';

export const myWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '133px 36px',
});

export const myContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: 'calc(730px)',
  width: '100%',
});

export const myTargetContainer = style({
  width: '100%',
  paddingTop: '46px',
});
