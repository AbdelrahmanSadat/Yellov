import React, { useEffect, useState } from "react";

import BGOverlay from "../components/BGOverlay";

import {
  // sizing,
  // height,
  // boxSizing,
  typography,
  fontWeight,
} from "@material-ui/system";

import { Grid, Typography } from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// import Flags from "country-flag-icons/react/3x2";

// import {
//   Link as ScrollLink,
//   Element,
//   Events,
//   animateScroll as scroll,
//   scrollSpy,
//   scroller,
// } from "react-scroll";

// * CSS Styles Here
const useStyles = makeStyles((theme) => ({
  backgroundImage: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  },
  section01: {
    backgroundImage: "url(womanLaptopBeach-lg.jpg)",
    minHeight: "100vh",
    minWidth: "fit-content",
    color: "white",
  },
}));

export default function HomePage() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container>
      <Grid
        container
        className={`${classes.section01} ${classes.backgroundImage}`}
        alignItems="center"
      >
        <BGOverlay alignItems="center" layerColor="rgba(20, 20, 20, 0.7)">
            <Grid item xs={12}>
              <Typography variant="h1" align="center" color="inherit">
                Yellov
              </Typography>
            </Grid>
        </BGOverlay>
      </Grid>
    </Grid>
  );
}
