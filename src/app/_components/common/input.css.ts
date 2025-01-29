import { colors } from '@/app/_styles/colors.css';
import { style } from '@vanilla-extract/css';

export const inputStyle = style({
  width: '100%',
  padding: '4px 8px',
  borderRadius: '8px',
  border: `1px solid ${colors.gray200}`,
  selectors: {
    '&::placeholder': {
      fontSize: '12px',
      color: colors.gray300,
    },
  },
});
