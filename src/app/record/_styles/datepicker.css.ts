import { globalStyle, style } from '@vanilla-extract/css';
import { contentFont, paragraph, semiBold } from '@/app/_styles/font.css';

export const datepickerWrapper = style({
  position: 'relative',
  fontFamily: contentFont,
  border: 'none',
  borderRadius: '0',
  width: '100%',
});

export const dropDownButton = style([
  semiBold,
  paragraph,
  {
    position: 'relative',
    width: '22.5%',
    padding: '4px',
  },
]);

globalStyle(`${dropDownButton}::before`, {
  content: '',
  display: 'inline-block',
  position: 'absolute',
  top: '14px',
  right: '-75px',
  width: '10px',
  height: '8px',
  backgroundImage: 'url("/svgs/down.svg")',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
});

export const dropDownUL = style({
  position: 'absolute',
  top: '120px',
  width: '20%',
  zIndex: '1',
  border: '1px solid #D9D9D9',
  background: 'white',
  textAlign: 'center',
});

export const dropDownList = style({
  width: '100%',
  padding: '2px',
  cursor: 'pointer',
});

globalStyle(`${dropDownList}:hover`, {
  color: 'white',
  background: '#141313',
});

globalStyle('.react-datepicker', {
  position: 'relative',
  fontFamily: contentFont,
  border: 'none',
  borderRadius: '0',
  width: '100%',
});

globalStyle('.react-datepicker__header', {
  padding: '0',
});

globalStyle('.react-datepicker__header.react-datepicker__header--custom', {
  background: 'transparent',
  border: 'none',
});

globalStyle('.react-datepicker__month-container', {
  width: '100%',
});

globalStyle('.react-datepicker__month', {
  margin: '0',
});

globalStyle('.react-datepicker__day-name', {
  color: '#B8B8B8',
  fontSize: '14px',
});

globalStyle('.react-datepicker__day-names, .react-datepicker__week', {
  display: 'flex',
  justifyContent: 'space-around',
  paddingBottom: '24px',
});

globalStyle('.react-datepicker__day', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '42px',
  height: '42px',
  fontSize: '14px',
  fontWeight: '600',
  borderRadius: '50%',
  background: '#F5F5F5',
  margin: '0',
});

globalStyle(
  `.react-datepicker__day--in-selecting-range:not([aria-disabled=true]):hover,.react-datepicker__day--selected,.react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range, .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--selected, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--selected, .react-datepicker__year-text--in-selecting-range, .react-datepicker__year-text--in-range,
  .react-datepicker__day:not([aria-disabled=true]):hover,  .react-datepicker__month-text:not([aria-disabled=true]):hover,
   .react-datepicker__quarter-text:not([aria-disabled=true]):hover,
   .react-datepicker__year-text:not([aria-disabled=true]):hover

  `,
  {
    color: '#141313',
    border: '3px solid #141313',
    borderRadius: '50%',
    background: '#F5F5F5',
  },
);

// hover & select시 기존의 style을 유지하기 위해 선택자들을 모조리 집어넣었습니다.
globalStyle(
  `
  .react-datepicker__day--in-range:not([aria-disabled=true]):hover,
  .react-datepicker__month-text--selected:not([aria-disabled=true]):hover,
  .react-datepicker__month-text--in-selecting-range:not([aria-disabled=true]):hover,
  .react-datepicker__month-text--in-range:not([aria-disabled=true]):hover,
  .react-datepicker__quarter-text--selected:not([aria-disabled=true]):hover,
  .react-datepicker__quarter-text--in-selecting-range:not([aria-disabled=true]):hover,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__quarter-text--in-range:not([aria-disabled=true]):hover,
  .react-datepicker__year-text--selected:not([aria-disabled=true]):hover,
  .react-datepicker__year-text--in-selecting-range:not([aria-disabled=true]):hover,
  .react-datepicker__year-text--in-range:not([aria-disabled=true]):hover,

`,
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '42px',
    height: '42px',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '50%',
    background: '#F5F5F5',
    color: '#141313',
    margin: '0',
  },
);
