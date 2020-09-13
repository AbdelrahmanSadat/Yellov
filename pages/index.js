// TODO: refactor lists (carousel items, ...)
// TODO: content using i18n or from a static file

// TODO: Add video to content

// TODO: Font Size Responsive Smaller on Nav and Carousel and Founder
// TODO: Main Section BG Image

// TODO: Nav items on hover, animate (show underline?)

// TODO: set width: fit content on all sections?

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
  Divider,
  Grid,
  IconButton,
  Link as MaterialLink,
  List,
  ListItem,
  ListItemIcon,
  Slide,
  Typography,
} from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import {
  Menu as MenuIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
  PhoneAndroid as PhoneAndroidIcon,
  CameraAlt as CameraAltIcon,
  VideoLibrary as VideoLibraryIcon,
  Spellcheck as SpellcheckIcon,
  YouTube as YouTubeIcon,
  Dvr as DvrIcon,
  Web as WebIcon,
} from "@material-ui/icons";

// import Flags from "country-flag-icons/react/3x2";

import Fade from "react-reveal/Fade";

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
    text: "Properties",
    to: "secondary",
  },
  {
    text: "Services & Contact",
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
  backgroundImageUnfixed: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
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
  contactUsIconsFill: {
    fill: "white",
  },
  navText: {
    color: "white",
    fontWeight: 500,
    "&:hover": {
      color: "rgb(255, 210, 15)",
    },
  },
  menuButton: {
    position: "fixed",
    right: "1rem",
    top: "1rem",
    color: "white",
    zIndex: theme.zIndex.drawer + 1,
  },
  sectionMain: {
    backgroundImage: "url(manOnBeach.jpeg)",
    minHeight: "100vh",
    color: "white",
  },
  yellovMainLogo: {
    backgroundImage: "url(/Logo.png)",
    height: "20rem",
    width: "20rem",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    paddingTop: 0,
    paddingBottom: "6rem",
    margin: "0 auto",
    marginTop: "2rem",
  },
  sectionAbout: {
    backgroundColor: "rgb(255, 231, 15)",
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
  sectionSecondary: {
    backgroundImage: "url(workshopPortrait.webp)",
    minHeight: "100vh",
    color: "white",
    ["@media (min-width:600px)"]: {
      backgroundImage: "url(workshop.jpeg)",
    },
  },
  sectionContactInfo: {
    // minHeight: "100vh",
    // backgroundColor: "rgb(20, 20, 18)",
    backgroundImage: "url(landscape02Centered.webp)",
    color: "white",
    ["@media (min-width:600px)"]: {
      backgroundImage: "url(landscape02.jpeg)",
      fontSize: "2rem",
    },
  },
  carouselContainer: {
    // minHeight: "100vh"
  },
  carouselCustom: {
    width: "100%",
    color: "white",
  },
  carouselSlide: {
    minHeight: "100vh",
    height: "100%",
  },
  sectionTitle: {
    padding: "2rem",
    paddingBottom: "0",
  },
  sectionContent: {
    padding: "2rem",
    paddingTop: "0",
  },
  carouselSlide02: {
    backgroundImage: "url(rocksAndFrameOnBeach.webp)",
    ["@media (min-width:600px)"]: {
      backgroundImage: "url(noPlanetB.jpeg)",
    },
    // backgroundColor: "rgb(242,175,24)",
  },
  carouselSlide01: {
    backgroundImage: "url(yellovBoard02Portrait.webp)",
    // backgroundColor: "rgb(246, 237, 214)",
    ["@media (min-width:600px)"]: {
      backgroundImage: "url(yellovBoardCentered.webp)",
    },
  },
  carouselSlide03: {
    backgroundImage: "url(BassemSameh.jpg)",
    // backgroundColor: "rgb(58, 71, 91)",
  },
  carouselSlide04: {
    backgroundImage: "url(boatFromBeach.jpeg)",
    // backgroundColor: "rgb(63, 144, 157)",
  },
  customDivider: {
    backgroundColor: "rgb(255, 231, 15)",
    width: "55%",
    height: "10px",
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
                <Slide
                  in={state.backdropOpen}
                  direction={index % 2 == 0 ? "left" : "right"}
                  timeout={1000}
                  key={index}
                >
                  <ListItem>
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
                        <Typography
                          variant={
                            useMediaQuery(theme.breakpoints.up("md"))
                              ? "h1"
                              : "h2"
                          }
                          align="center"
                          className={`${classes.pointer} ${classes.navText}`}
                        >
                          {navButton.text}
                        </Typography>
                      </ScrollLink>
                    </Grid>
                  </ListItem>
                </Slide>
              );
            })}
          </List>
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
            <Fade>
              <Grid container className={classes.yellovMainLogo}></Grid>
              <Typography variant="h1" align="center" color="inherit">
                Yellov
              </Typography>
              <Typography variant="h4" align="center" color="inherit">
                We Make You Do What Yellove
              </Typography>
            </Fade>
          </Grid>
        </BGOverlay>
      </Grid>

      <Grid container name="aboutUs" className={classes.carouselContainer}>
        <Carousel
          infiniteLoop
          showStatus={false}
          renderThumbs={() => undefined}
          className={classes.carouselCustom}
          transitionTime={1000}
          // autoPlay
          stopOnHover
          interval={15000}
          showArrows
          swipeable
          swipeScrollTolerance={200}
        >
          <Grid
            container
            className={`${classes.carouselSlide} ${classes.backgroundImageUnfixed} ${classes.carouselSlide01}`}
            alignContent="flex-start"
          >
            {/* TODO: padding and font size responsive */}
            <BGOverlay alignContent="flex-start">
              <Grid item xs={12} className={classes.sectionTitle}>
                <Fade>
                  <Typography
                    variant={
                      useMediaQuery(theme.breakpoints.up("sm")) ? "h2" : "h4"
                    }
                    align="left"
                    gutterBottom
                  >
                    WHAT IS YELLOV ?
                  </Typography>
                </Fade>
              </Grid>
              <Grid item sm={12} md={8} className={classes.sectionContent}>
                <Fade>
                  <Typography variant="h5" align="left">
                    YELLOV is a commune; which is a community of people who love
                    Sinai and want more people to experience it from a local’s
                    eye and dig deeper into its endless magic. <br />
                    Our Brand name is a combination of how we see Sinai on the
                    map and how much love it holds as a land. Yellow, V, and
                    LOVE. So We are YELLOV.
                    <br />
                    YELLOV will offer an Art Residency program for
                    Videographers, Graphic Designers, Content Creators, and Web
                    developers who will come help us make more people see Sinai
                    from an insider’s eye. As most foreigners crave the simple
                    life that’s here.
                    <br />
                    We worked in Dahab before with several businesses as social
                    media consultants. It was a complete experience because We
                    used to moderate, Shoot, Edit, write captions and launch ad
                    campaigns. We had 5 clients that made us grow for 4 months
                    then the summer ended and the adventure was over. It was a
                    great experience that We want to make people try. So Come on
                    and join us. See you in the land of love and magic, See you
                    in Sinai.
                  </Typography>
                </Fade>
              </Grid>
            </BGOverlay>
          </Grid>
          <Grid
            container
            className={`${classes.carouselSlide} ${classes.backgroundImageUnfixed} ${classes.carouselSlide02}`}
            alignContent="flex-start"
          >
            <BGOverlay alignContent="flex-start">
              <Grid item xs={12} className={classes.sectionTitle}>
                <Fade>
                  <Typography
                    variant={
                      useMediaQuery(theme.breakpoints.up("sm")) ? "h2" : "h4"
                    }
                    align="left"
                    gutterBottom
                  >
                    HOW IS YELLOV SUSTAINABLE ?
                  </Typography>
                </Fade>
              </Grid>
              <Grid item sm={12} md={8} className={classes.sectionContent}>
                <Fade>
                  <Typography variant="h5" align="left">
                    YELLOV has a wide portfolio of clients starting from a coach
                    who wants to be a YouTuber to Big names such as Bubbles Dive
                    center, Everyday Cafe, and Skyrock. We sell these services
                    to our clients and provide our talents with a pleasurable
                    adventure. Which adds to you and us.
                    <br />
                    We take our rig and tools seriously. If you’re handy or you
                    love playing with lights you came to the right place. We
                    have a ruined LCD TV which works as a perfect softbox, We
                    use LED bulbs sometimes, Tungsten bulbs. We’re super
                    innovative and resourceful when it comes to our equipment.
                    Because Sinai has a different nature and We don’t want our
                    business to have a high carbon footprint
                    <br />
                    We have our studio with 2 workstations ready with all sound
                    and video equipment.
                  </Typography>
                </Fade>
              </Grid>
            </BGOverlay>
          </Grid>
          {/* <Grid
            container
            className={`${classes.carouselSlide} ${classes.backgroundImageUnfixed} ${classes.carouselSlide03}`}
            alignContent="flex-start"
          >
            <BGOverlay alignContent="flex-start">
              <Grid item xs={12} className={classes.sectionTitle}>
                <Fade>
                  <Typography
                    variant={
                      useMediaQuery(theme.breakpoints.up("sm")) ? "h2" : "h4"
                    }
                    align="left"
                    gutterBottom
                  >
                    ABOUT OUR FOUNDER
                  </Typography>
                </Fade>
              </Grid>
              <Grid item sm={12} md={8} className={classes.sectionContent}>
                <Fade>
                  <Typography variant="h5" align="left">
                    Bassem is a producer/ event planner/ copywriter/editor. He
                    worked as a shisha boy in 2 different countries. He is
                    currently learning music production to make music for his
                    videos.
                    <br />
                    He started as an Event planner since he was 17 years old,
                    Hosted the biggest double concert in Alex in 2013 for
                    Mashrou Leila when he was only 19. He worked with the likes
                    of Autostrad, Jadal, Yasmine Hamdan, El Far3i, 47 Soul, El
                    Morabba3, …etc.
                    <br />
                    He jumped to digital media content and advertising in 2014
                    and he worked in this career with various agencies such as
                    FP7/ CAI , Nimblebot, Monkeys In Tuxedos. Worked on projects
                    for Mcdonald’s, Nestle, Redbull, and others. He produces as
                    well. He worked as an assistant producer at Hama Film
                    Productions on several ads then I produced a 2 copy TV ad
                    for Vitrac with Monkeys in Tuxedos.
                  </Typography>
                </Fade>
              </Grid>
            </BGOverlay>
          </Grid> */}

          <Grid
            container
            className={`${classes.carouselSlide} ${classes.backgroundImageUnfixed} ${classes.carouselSlide04}`}
            alignContent="flex-start"
          >
            <BGOverlay>
              <Grid item xs={12} className={classes.sectionTitle}>
                <Fade>
                  <Typography
                    variant={
                      useMediaQuery(theme.breakpoints.up("sm")) ? "h2" : "h4"
                    }
                    align="left"
                    gutterBottom
                  >
                    YELLOV CREATIVE TRAVEL PROGRAMS
                  </Typography>
                </Fade>
              </Grid>
              <Grid item sm={12} md={8} className={classes.sectionContent}>
                <Fade>
                  <Typography variant="h5" align="left">
                    1- YELLOV Experience: The program will include a week of
                    Accommodation and Food provided by YELLOV to our talents.
                    The talent is required to work for 4 days on projects from
                    our wide portfolio of clients and takes 3 days off. So
                    basically, You’ll add a project or two to your portfolio and
                    spend 3 days vacation and 4 days that include a maximum of 7
                    working hours.
                    <br />
                    <br />
                    2- YELLOV Work N’ Run: The program will include
                    Accommodation and food for your whole stay, but you’ll stay
                    only when we’re shooting/ working. It will be 2-4 days
                    depending on the project size. Also, this is a paid program,
                    salary is negotiated according to the project you’ll work on
                    <br />
                    <br />
                    3- YELLOV Adventure: People have hobbies, sometimes these
                    hobbies become an obsession If you want to do Kitesurfing,
                    Diving, Carpentry, Clay, Swimming, Freediving, or Rock
                    Climbing course. YELLOV will offer you the course, free of
                    charge along with food for the whole week or a 15% discount
                    on your accommodation
                    <br />
                    <br />
                    So, If you’ve got what it takes please send us your
                    Portfolio and talk to us about your relationship with Sinai?
                    When did it start? How do you think you can make Sinai a
                    global attraction? Which program would you prefer?
                    <br />
                    <br />
                  </Typography>
                </Fade>
              </Grid>
            </BGOverlay>
          </Grid>
        </Carousel>
      </Grid>
      <Grid
        container
        className={`${classes.sectionSecondary} ${classes.backgroundImage}`}
        name="secondary"
      >
        <BGOverlay alignContent="flex-start">
          <Grid item xs={12} className={classes.sectionTitle}>
            <Fade>
              <Typography
                variant={
                  useMediaQuery(theme.breakpoints.up("sm")) ? "h2" : "h4"
                }
                align="left"
                gutterBottom
              >
                YELLOV PROPERTIES
                {/* <Divider className={classes.customDivider}></Divider> */}
              </Typography>
            </Fade>
          </Grid>
          <Grid item sm={12} md={8} className={classes.sectionContent}>
            <Fade>
              <Typography variant="h5" align="left">
                Yellov has some properties and has understanding agreements with
                other properties to facilitate our business needs
                <br />
                <br />
                1. Studio: Al Chillaya is our studio, main house. It’s a studio
                where we edit, color, and work on our projects. We have a small
                cinema, screens, light equipment and we’re working on making it
                more equipped as we go.
                <br />
                <br />
                2. Residency: Bob 55 is an art camp in Nuweiba just by the port.
                A life-changing experience that has a perfect mix between
                Bedouin heritage and Street art. A place where everything is for
                55 where it's much simpler. We have 8 Air-conditioned rooms with
                private bathrooms to accommodate our talents and artists.
                <br />
                <br />
                3. Workshop: Wala Haja workshop: We have an understanding
                statement with the Wala Haja workshop to bring in as many
                students as we can. This workshop offers carpentry courses, clay
                building, and wood carving courses.
                <br />
              </Typography>
            </Fade>
          </Grid>
        </BGOverlay>
      </Grid>
      <Grid
        container
        name="contactUs"
        className={`${classes.sectionContactInfo} ${classes.backgroundImageUnfixed}`}
        alignContent="flex-start"
      >
        <BGOverlay alignContent="flex-start">
          <Grid item xs={12} md={6}>
            <Fade>
              <Typography
                className={classes.sectionTitle}
                variant="h2"
                align="left"
                gutterBottom
              >
                Our Services
              </Typography>
            </Fade>
            <Fade>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CameraAltIcon
                      fontSize="large"
                      className={classes.contactUsIconsFill}
                    />
                  </ListItemIcon>
                  Photoshoots
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SpellcheckIcon
                      fontSize="large"
                      className={classes.contactUsIconsFill}
                    />
                  </ListItemIcon>
                  Copywriting, PR Letters, Content Creation
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <VideoLibraryIcon
                      fontSize="large"
                      className={classes.contactUsIconsFill}
                    />
                  </ListItemIcon>
                  Video Production, Editing, Color Correction
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <YouTubeIcon
                      fontSize="large"
                      className={classes.contactUsIconsFill}
                    />
                  </ListItemIcon>
                  Youtube Channel Management and Monetization
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DvrIcon
                      fontSize="large"
                      className={classes.contactUsIconsFill}
                    />
                  </ListItemIcon>
                  Digital Media Management
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WebIcon
                      fontSize="large"
                      className={classes.contactUsIconsFill}
                    />
                  </ListItemIcon>
                  Web Development
                </ListItem>
              </List>
            </Fade>
          </Grid>
          <Grid item xs={12} md={6}>
            <Fade>
              <Typography
                className={classes.sectionTitle}
                variant="h2"
                align="left"
                gutterBottom
              >
                Contact Us
              </Typography>
            </Fade>
            <List>
              <ListItem>
                <ListItemIcon>
                  <MailIcon
                    fontSize="large"
                    className={classes.contactUsIconsFill}
                  />
                </ListItemIcon>
                <MaterialLink color="inherit">
                  YellovSinai@gmail.com
                </MaterialLink>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FacebookIcon
                    fontSize="large"
                    className={classes.contactUsIconsFill}
                  />
                </ListItemIcon>
                <MaterialLink
                  color="inherit"
                  href="https://www.facebook.com/YellovSinai/"
                >
                  YellovSinai
                </MaterialLink>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <InstagramIcon
                    fontSize="large"
                    className={classes.contactUsIconsFill}
                  />
                </ListItemIcon>
                <MaterialLink
                  color="inherit"
                  href="https://www.instagram.com/YellovSinai/"
                >
                  @YellovSinai
                </MaterialLink>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon
                    fontSize="large"
                    className={classes.contactUsIconsFill}
                  />
                </ListItemIcon>
                <MaterialLink color="inherit">069-3643049</MaterialLink>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PhoneAndroidIcon
                    fontSize="large"
                    className={classes.contactUsIconsFill}
                  />
                </ListItemIcon>
                <MaterialLink color="inherit">+201114476166</MaterialLink>
              </ListItem>
            </List>
          </Grid>
        </BGOverlay>
      </Grid>
    </Grid>
  );
}
