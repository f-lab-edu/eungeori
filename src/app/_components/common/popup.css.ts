import { colors } from '@/app/_styles/colors.css';
import { style } from '@vanilla-extract/css';

export const popupWrapper = style({
  position: 'fixed',
  top: '0',
  left: '0',
  minWidth: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 40%)',
  zIndex: '999999999',
});

export const popupContents = style({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '306px',
  height: '153px',
  borderRadius: '10px',
  background: colors.white,
});
