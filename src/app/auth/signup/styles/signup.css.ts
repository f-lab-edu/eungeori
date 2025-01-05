import { style } from '@vanilla-extract/css';

export const signupWrapper = style([
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height: '100vh',
    padding: '85px 36px 104px 36px',
  },
]);

export const signupContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
});
