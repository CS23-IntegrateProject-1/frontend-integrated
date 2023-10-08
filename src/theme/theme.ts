import { extendTheme, theme as defaultTheme } from "@chakra-ui/react";
import foundations from "./foundations";
import fonts from "./typography/fonts";
// import breakpoints from './breakpoints';
// import components from './components';
// import typography from './typography';

const theme = extendTheme({
  ...fonts,
  ...foundations,
});
export default theme;
