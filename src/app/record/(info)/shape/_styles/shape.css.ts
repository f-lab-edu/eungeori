import { colors } from '@/app/_styles/colors.css';
import { regular, caption } from '@/app/_styles/font.css';
import { style } from '@vanilla-extract/css';

export const shapeContent = style({
  display: 'flex',
});

export const shapeContentBoxWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
});

export const shapeContentBox = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '74px',
  height: '74px',
  background: colors.white30,
});

export const shapeContentBoxText = style([
  regular,
  caption,
  {
    maxWidth: '74px',
    flexShrink: '0',
    textAlign: 'center',
    wordBreak: 'keep-all',
  },
]);
