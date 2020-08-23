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
  mainWrapper: {
    minWidth: "fit-content",
  },
  backgroundImage: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
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

  return (
    <Grid container className={classes.mainWrapper}>
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
      {
        // TODO: CAROUSEL HERE FOR CONTENT
        // ? maybe change the background image or colors with content too
      }

      <Grid container className={classes.carouselContainer}>
        <Carousel
          infiniteLoop
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
      {/* <Grid
        container
        className={`${classes.sectionAbout} ${classes.backgroundImage}`}
        // justify="center"
      >
        <Grid item xs={1} md={1}></Grid>
        <Grid item xs={10} sm={7} md={7} lg={5} xl={4}>
          <Grid container height="50vh" className={classes.sectionAboutContent}>
            Hello
          </Grid>
        </Grid>
        <Grid item md={4}></Grid>
      </Grid>
      
       */}
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
