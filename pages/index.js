// TODO: refactor lists (nav menu, carousel items, ...)
// TODO: content using i18n or from a static file

import React, { useEffect, useState } from "react";

import { Carousel } from "react-responsive-carousel";

import BGOverlay from "../components/BGOverlay";

import {
  // sizing,
  height,
  // boxSizing,
  typography,
  fontWeight,
} from "@material-ui/system";

import {
  Backdrop,
  CircularProgress,
  Grid,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { Menu as MenuIcon } from "@material-ui/icons";

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
  mainWrapper: {
    minWidth: "fit-content",
  },
  backgroundImage: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  },
  emboldened: {
    fontWeight: "700"
  },
  backdrop: {
    // backgroundColor: "pink",
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    position: "fixed",
    right: "1rem",
    top: "1rem",
    color: "white",
    zIndex: theme.zIndex.drawer + 1,
  },
  sectionMain: {
    backgroundImage: "url(womanLaptopBeach-lg.jpg)",
    minHeight: "100vh",
    color: "white",
  },
  sectionAbout: {
    backgroundColor: "rgb(255, 231, 15)",
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
  sectionAboutContent: {
    backgroundColor: "white",
    height: "90vh",
  },
  sectionSecondary: {
    backgroundImage: "url(DSC_0349.jpeg)",
    minHeight: "100vh",
    minWidth: "fit-content",
    color: "white",
  },
  sectionContactInfo: {
    minHeight: "75vh",
    backgroundColor: "rgb(20, 20, 18)",
    minWidth: "fit-content",
    color: "white",
  },
  carouselContainer: {
    // minHeight: "100vh"
  },
  carouselCustom: {
    width: "100%",
  },
  carouselSlide: {
    minHeight: "100vh",
  },
  carouselSlide01: {
    backgroundColor: "rgb(255, 231, 15)",
  },
  carouselSlide02: {
    backgroundColor: "rgb(51, 124, 242)",
  },
  carouselSlide03: {
    backgroundColor: "rgb(237, 21, 21)",
  },
}));

export default function HomePage() {
  const classes = useStyles();
  const theme = useTheme();
  const [state, setState] = React.useState({
    backdropOpen: false,
  });

  return (
    <Grid container className={classes.mainWrapper}>
      <IconButton
        color="inherit"
        className={classes.menuButton}
        onClick={() =>
          setState({ ...state, backdropOpen: !state.backdropOpen })
        }
      >
        <MenuIcon />
      </IconButton>
      <Backdrop
        open={state.backdropOpen}
        className={classes.backdrop}
        onClick={() =>
          setState({ ...setState, backdropOpen: !state.backdropOpen })
        }
      >
        <Grid
          container
          justify="center"
          alignItems="center"
          alignContent="center"
        >
          <List>
            <ListItem>
              <Typography
                variant="h1"
                align="center"
                color="inherit"
              >
                Yellov
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h1" align="center" color="inherit">
                Yellov
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h1" align="center" color="inherit">
                Yellov
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </Backdrop>
      <Grid
        container
        className={`${classes.sectionMain} ${classes.backgroundImage}`}
        alignItems="center"
      >
        <BGOverlay alignItems="center" layerColor="rgba(40, 40, 40, 0.3)">
          <Grid item xs={12}>
            <Typography variant="h1" align="center" color="inherit">
              Yellov
            </Typography>
          </Grid>
        </BGOverlay>
      </Grid>

      <Grid container className={classes.carouselContainer}>
        <Carousel
          infiniteLoop
          showStatus={false}
          swipeable={false}
          renderThumbs={() => undefined}
          className={classes.carouselCustom}
        >
          <Grid
            container
            className={`${classes.carouselSlide} ${classes.carouselSlide01}`}
          >
            Content of Slide 01
          </Grid>
          <Grid
            container
            className={`${classes.carouselSlide} ${classes.carouselSlide02}`}
          >
            Content of Slide 02
          </Grid>
          <Grid
            container
            className={`${classes.carouselSlide} ${classes.carouselSlide03}`}
          >
            Content of Slide 3
          </Grid>
        </Carousel>
      </Grid>
      <Grid
        container
        className={`${classes.sectionSecondary} ${classes.backgroundImage}`}
      ></Grid>
      <Grid container className={`${classes.sectionContactInfo}`}>
        Contact Info
      </Grid>
    </Grid>
  );
}
