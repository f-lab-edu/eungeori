import { paddingSprinkles } from '@/app/_styles/padding.css';
import { style } from '@vanilla-extract/css';

export const graphWrapper = style({
  position: 'relative',
  height: '100%',
  paddingBottom: '80px',
});

export const graphContainer = style([
  {
    height: '100%',
    paddingTop: '85px',
  },
  paddingSprinkles({ paddingX: 's28' }),
]);

export const chartBg = style({
  position: 'relative',
  width: '500px',
  height: '250px',
});

export const poopInfoText = style({
  display: 'flex',
  justifyContent: 'flex-start',
  width: '100%',
  paddingBottom: '5px',
});

export const poopBoxWrapper = style({
  display: 'flex',
  gap: '20px',
  justifyContent: 'flex-start',
  width: '100%',
  marginTop: '8px',
  fontSize: '12px',
});

export const poopBox = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

export const filterWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '455px',
  margin: '0 auto',
});

export const toggle = style({
  position: 'relative',
  width: '48px',
  height: '22px',
  borderRadius: '20px',
  boxShadow: 'inset 0.5px 1px 3px rgba(0, 0, 0, 0.05)',
  background: '#e7e7e7',
  cursor: 'pointer',

  selectors: {
    '&:before': {
      position: 'absolute',
      top: '3px',
      left: '4px',
      content: '',
      width: '15px',
      height: '15px',
      borderRadius: '50%',
      background: 'white',
      boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.2)',
      transition: 'transform 0.3s ease',
    },
  },
});

export const toggleActive = style({
  background: '#4FE786',

  selectors: {
    '&::before': {
      transform: 'translateX(26px)',
    },
  },
});
