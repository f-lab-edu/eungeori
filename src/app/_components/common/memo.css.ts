import { colors } from '@/app/_styles/colors.css';
import { style } from '@vanilla-extract/css';

export const memoBox = style({
  display: 'grid',
  gridTemplateColumns: '0.5fr 4fr 0.7fr',
  padding: '24px 8px',
  borderRadius: '10px',
  background: colors.background,
});
