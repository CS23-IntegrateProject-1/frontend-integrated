import { extendTheme, theme as defaultTheme } from "@chakra-ui/react";
import foundations from "./foundations";
import fonts from "./typography/fonts";
// import breakpoints from './breakpoints';
// import components from './components';
// import typography from './typography';

console.log(defaultTheme);

const theme = extendTheme({
  ...fonts,
  ...foundations,
  styles: {
    global: {
      body: {
        color: "white", // Use your custom text color here
      },
    },
  },
});
export default theme;
