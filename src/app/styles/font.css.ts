import { globalFontFace, style } from "@vanilla-extract/css";

const contentFont = "pretendard";

globalFontFace(contentFont, [
  {
    src: "url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff') format('woff');",
    fontStyle: "normal",
    fontWeight: 200,
    fontDisplay: "swap",
  },
  {
    src: "url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');",
    fontStyle: "normal",
    fontWeight: 600,
    fontDisplay: "swap",
  },
]);

export const light = style({
  fontFamily: contentFont,
  fontWeight: 200,
});

export const semiBold = style({
  fontFamily: contentFont,
  fontWeight: 600,
});

export const heading = style({
  fontSize: "30px",
});

export const heading2 = style({
  fontSize: "28px",
});

export const caption = style({
  fontSize: "12px",
});

export const caption2 = style({
  fontSize: "10px",
});
