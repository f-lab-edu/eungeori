import { createGlobalTheme } from '@vanilla-extract/css';

export const spacing = {
  s4: '4px',
  s8: '8px',
  s12: '12px',
  s16: '16px',
  s20: '20px',
  s24: '24px',
  s28: '28px',
  s32: '32px',
  s60: '60px',
  s68: '68px',
};

export const vars = createGlobalTheme(':root', {
  space: spacing,
});
