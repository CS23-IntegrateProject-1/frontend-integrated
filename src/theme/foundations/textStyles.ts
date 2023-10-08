//just example have to edit later
export const FONT_WEIGHT = {
  BOLD: 700,
  // SEMI: 600,
  NORMAL: 400,
};

const textStyles = {
  h1 : {
    fontSize: "20px",
    fontWeight: FONT_WEIGHT.BOLD,
    // lineHeight: "12rem",
  },
  h2 : {
    fontSize: "16px",
    fontWeight: FONT_WEIGHT.BOLD,
    // lineHeight: "12rem",
  },
  h3 : {
    fontSize: "14px",
    fontWeight: FONT_WEIGHT.BOLD,
    // lineHeight: "12rem",
  },
  h4 : {
    fontSize: "12px",
    fontWeight: FONT_WEIGHT.BOLD,
    // lineHeight: "12rem",
  },
  h5 : {
    fontSize: "10px",
    fontWeight: FONT_WEIGHT.BOLD,
    // lineHeight: "12rem",
  },
  h6 : {
    fontSize: "6px",
    fontWeight: FONT_WEIGHT.BOLD,
    // lineHeight: "12rem",
  },
  body1: {
    fontSize: "16px",
    fontWeight: FONT_WEIGHT.NORMAL,
    // lineHeight: "12rem",
  },
  body2: {
    fontSize: "12px",
    fontWeight: FONT_WEIGHT.NORMAL,
    // lineHeight: "12rem",
  },
  body3: {
    fontSize: "10px",
    fontWeight: FONT_WEIGHT.NORMAL,
    // lineHeight: "12rem",
  },
  // display1: {
  //   fontSize: "4.8rem",
  //   fontWeight: FONT_WEIGHT.SEMI,
  //   lineHeight: "6rem",
  // },
  // display2: {
  //   fontSize: "4rem",
  //   fontWeight: FONT_WEIGHT.SEMI,
  //   lineHeight: "4.8rem",
  // },
  // h1Semi: {
  //   fontSize: "3.2rem",
  //   fontWeight: FONT_WEIGHT.SEMI,
  //   lineHeight: "4.0rem",
  // },
  // body1Semi: {
  //   fontSize: "2rem",
  //   fontWeight: FONT_WEIGHT.SEMI,
  //   lineHeight: "2.8rem",
  // },
  // body1: {
  //   fontSize: "2rem",
  //   fontWeight: FONT_WEIGHT.NORMAL,
  //   lineHeight: "2.8rem",
  // },
  // body2: {
  //   fontSize: "1.6rem",
  //   fontWeight: FONT_WEIGHT.NORMAL,
  //   lineHeight: "2.4rem",
  // },
  // body2Semi: {
  //   fontSize: "1.6rem",
  //   fontWeight: FONT_WEIGHT.SEMI,
  //   lineHeight: "2.4rem",
  // },
};

export type TextStyles = typeof textStyles;

export default textStyles;
