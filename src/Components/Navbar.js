import React from "react";
//import AppBar from 'material-ui/AppBar';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
//import Toolbar from 'material-ui/Toolbar';
//import Typography from 'material-ui/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { makeStyles } from '@material-ui/styles'
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    //marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    //marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          NEWS
        </Typography>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            </div>
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