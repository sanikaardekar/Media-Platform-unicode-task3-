import React from "react";
// import { AppBar } from '@mui/material';
// import { Toolbar } from '@mui/material';
// import { Typography } from '@mui/material';
// import CssBaseline from '@mui/material/CssBaseline';
import { makeStyles } from '@material-ui/styles'
const useStyles = makeStyles(() => ({
   app:{
     backgroundColor: "white !important",
     textAlign: "center",
     textDecorationColor: "white",
     paddingBottom: "2%",
    },
 }));
export default function Footer() {
  const classes = useStyles();
    return (
      <footer className={classes.app}>
          Made By Sanika
      </footer>
    )
}