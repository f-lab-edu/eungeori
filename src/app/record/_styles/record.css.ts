import { colors } from '@/app/_styles/colors.css';
import { semiBold, paragraph3 } from '@/app/_styles/font.css';
import { paddingSprinkles } from '@/app/_styles/padding.css';
import { style } from '@vanilla-extract/css';

export const circle = style([
  semiBold,
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '42px',
    height: '42px',
    fontSize: paragraph3,
    backgroundColor: colors.white30,
    borderRadius: '50%',
  },
]);

export const recordWrapper = style({
  position: 'relative',
  height: '100%',
  paddingBottom: '80px',
});

export const recordContainer = style([
  {
    height: '100%',
    paddingTop: '85px',
  },
  paddingSprinkles({ paddingX: 's28' }),
]);

export const recordDateSection = style({
  paddingBottom: '64px',
});

export const recordDate = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  justifyItems: 'center',
  columnGap: '13px',
  rowGap: '48px',
});

export const plusIconBox = style({
  display: 'flex',
  justifyContent: 'flex-end',
  cursor: 'pointer',
});

export const plusIcon = style({
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  bottom: '75px',
  width: '25px',
  height: '25px',
  borderRadius: '50%',
  background: colors.primary,
});
