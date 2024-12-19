import { globalFontFace, style } from '@vanilla-extract/css';

export const contentFont = 'pretendard';
const subFont = 'ladywatermelon';

globalFontFace(contentFont, [
  {
    src: "url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff') format('woff');",
    fontStyle: 'normal',
    fontWeight: 200,
    fontDisplay: 'swap',
  },
  {
    src: "url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');",
    fontStyle: 'normal',
    fontWeight: 400,
    fontDisplay: 'swap',
  },
  {
    src: "url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');",
    fontStyle: 'normal',
    fontWeight: 600,
    fontDisplay: 'swap',
  },
]);

globalFontFace(subFont, [
  {
    src: "url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-4@1.0/RixXladywatermelonR.woff2') format('woff2')",
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
]);

export const subFontStyle = style({
  fontFamily: subFont,
});

export const light = style({
  fontFamily: contentFont,
  fontWeight: 200,
});

export const regular = style({
  fontFamily: contentFont,
  fontWeight: 400,
});

export const semiBold = style({
  fontFamily: contentFont,
  fontWeight: 600,
});

export const heading = style({
  fontSize: '30px',
});

export const heading2 = style({
  fontSize: '28px',
});

export const paragraph = style({
  fontSize: '20px',
});

export const paragraph2 = style({
  fontSize: '18px',
});

export const defaultSize = style({
  fontSize: '16px',
});

export const paragraph3 = style({
  fontSize: '14px',
});

export const caption = style({
  fontSize: '12px',
});

export const caption2 = style({
  fontSize: '10px',
});

export const caption3 = style({
  fontSize: '8px',
});
