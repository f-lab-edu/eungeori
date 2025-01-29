import { semiBold, heading, caption } from '@/app/_styles/font.css';
import { paddingSprinkles } from '@/app/_styles/padding.css';
import { vars } from '@/app/_styles/vars.css';
import { style } from '@vanilla-extract/css';

export const loginWrapper = style([
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '100vh',
  },
  paddingSprinkles({ paddingX: 's28' }),
]);

export const loginLogo = style({
  height: '100%',
});

export const loginTextBox = style({
  textAlign: 'center',
});

export const loginHeading = style([semiBold, heading, paddingSprinkles({ paddingBottom: 's4' })]);

export const loginCaption = style([
  caption,
  {
    color: '#909090',
  },
]);

export const loginBoxContainer = style({
  width: '100%',
  paddingBottom: '80px',
});

export const loginBox = style({
  height: '60px',
  borderRadius: vars.space.s12,
  cursor: 'pointer',
});

export const loginBoxContents = style([
  {
    display: 'grid',
    gridTemplateColumns: '1fr 2.5fr',
    alignItems: 'center',
    height: '100%',
  },
  paddingSprinkles({ paddingLeft: 's24' }),
]);

export const formBox = style({
  width: '100%',
});
