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
  Button,
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

import {
  Link as ScrollLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const navButtonData = [
  {
    text: "Home",
    to: "home",
  },
  {
    text: "About Us",
    to: "aboutUs",
  },
  {
    text: "Contact Us",
    to: "contactUs",
  },
];

// * CSS Styles Here
const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    ["@media (max-width:319px)"]: {
      minWidth: "fit-content",
    },
  },
  backgroundImage: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  },
  emboldened: {
    fontWeight: "700",
  },
  pointer: {
    cursor: "pointer",
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
  sectionSecondary: {
    backgroundImage: "url(DSC_0349.jpeg)",
    minHeight: "100vh",
    color: "white",
  },
  sectionContactInfo: {
    minHeight: "100vh",
    backgroundColor: "rgb(20, 20, 18)",
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
  sectionTitle: {
    padding: "2rem",
    paddingBottom: "0",
  },
  sectionContent: {
    padding: "2rem",
    paddingTop: "0",
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
            {navButtonData.map((navButton, index) => {
              return (
                <ListItem key={index}>
                  <Grid container justify="center">
                    <ScrollLink
                      className={classes.navbarScrollLink}
                      activeClass={classes.activeNavbarScrollLink}
                      to={navButton.to}
                      spy
                      smooth
                      hashSpy
                      duration={700}
                      // delay={1000}
                      isDynamic={true}
                    >
                      <Typography variant="h1" align="center" color="inherit" className={classes.pointer}>
                        {navButton.text}
                      </Typography>
                    </ScrollLink>
                  </Grid>
                </ListItem>
              );
            })}
          </List>

          {/* <List>
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
            <ListItem>
              <Typography variant="h1" align="center" color="inherit">
                Yellov
              </Typography>
            </ListItem>
          </List> */}
        </Grid>
      </Backdrop>
      <Grid
        container
        name="home"
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

      <Grid container name="aboutUs" className={classes.carouselContainer}>
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
            alignContent="flex-start"
          >
            {/* TODO: padding and font size responsive */}
            <Grid item xs={12} className={classes.sectionTitle}>
              <Typography variant="h2" align="left" gutterBottom>
                About Us
              </Typography>
            </Grid>
            <Grid item sm={12} md={6} className={classes.sectionContent}>
              <Typography variant="h5" align="left">
                Exercitation deserunt exercitation ullamco reprehenderit sint
                dolore est officia dolore laboris. Esse fugiat nostrud
                adipisicing pariatur. Occaecat sunt reprehenderit occaecat ad
                qui tempor dolor enim elit et officia velit. Ex eu tempor est
                eu. Nisi elit mollit eu cillum excepteur minim. Nulla eiusmod
                fugiat nisi eu esse exercitation occaecat occaecat ipsum.
                Deserunt Lorem Lorem eiusmod qui veniam. Enim id anim minim
                Lorem in ex irure occaecat et. Ea aliquip aliquip dolor ullamco
                proident deserunt sit quis ullamco culpa ipsum excepteur. Nulla
                aliqua irure dolor nostrud. Magna esse Lorem proident minim
                aliqua est in ex quis proident. Dolore quis incididunt nulla
                laboris fugiat.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            className={`${classes.carouselSlide} ${classes.carouselSlide02}`}
          ></Grid>
          <Grid
            container
            className={`${classes.carouselSlide} ${classes.carouselSlide03}`}
          ></Grid>
        </Carousel>
      </Grid>
      <Grid
        container
        className={`${classes.sectionSecondary} ${classes.backgroundImage}`}
      ></Grid>
      <Grid
        container
        name="contactUs"
        className={`${classes.sectionContactInfo}`}
      >
        <Grid item xs={12} className={classes.sectionTitle}>
          <Typography variant="h2" align="left" gutterBottom>
            Contact Us
          </Typography>
        </Grid>
        <Grid item sm={12} className={classes.sectionContent}>
          <Typography variant="h3" align="left">
            Facebook
          </Typography>
        </Grid>
        <Grid item sm={12} className={classes.sectionContent}>
          <Typography variant="h3" align="left">
            Instagram
          </Typography>
        </Grid>
        <Grid item sm={12} className={classes.sectionContent}>
          <Typography variant="h3" align="left">
            Email
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
