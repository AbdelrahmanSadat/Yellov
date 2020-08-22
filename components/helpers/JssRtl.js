// * Used by wrapping the required jsx in it
// * and setting dir="rtl" on the main div/wrapper of that component

import { create } from "jss";
import rtl from "jss-rtl";
import {
  StylesProvider,
  jssPreset,
  ThemeProvider,
} from "@material-ui/core/styles";

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function RTL(props) {
  return (
    <ThemeProvider theme={{ direction: "rtl" }}>
      <StylesProvider jss={jss}>{props.children}</StylesProvider>;
    </ThemeProvider>
  );
}

export default RTL;
