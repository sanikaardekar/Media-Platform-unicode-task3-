import React from "react";
//import AppBar from 'material-ui/AppBar';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
//import Toolbar from 'material-ui/Toolbar';
//import Typography from 'material-ui/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { makeStyles } from '@material-ui/styles'
//import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  app:{
    backgroundColor: "#2A8F70 !important", 
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position= "static" className={classes.app}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          NEWS
        </Typography>
          
      </Toolbar>
    </AppBar>
  );
}
export default Navbar
//export default Navbar;
/*AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles, */