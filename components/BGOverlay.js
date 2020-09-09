// TODO: Make flexible (accepts different colors)

// * Takes a layerColor Prop (a string of css color)

import React from "react";

import { Box, Grid } from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";



// * CSS Styles Here
  const useStyles = makeStyles((theme) => ({
    bgOverlay: {
      // * sets a default color if there's none passed to props
      backgroundColor: "rgba(40, 40, 40, 0.3)",
      position: "relative",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
  }));

export default function BGOverlay(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    //   <Box className={classes.bgOverlay} style={{backgroundColor: props.layerColor? props.layerColor:undefined}}>
    //       {props.children}
    // </Box>

    <Grid container {...props} className={classes.bgOverlay} style={{backgroundColor: props.layerColor? props.layerColor:undefined}}>
          {props.children}
    </Grid>
  );
}
