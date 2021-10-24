import React from "react";
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { makeStyles } from '@material-ui/styles'
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  app:{
    backgroundColor: "#696969 !important", 
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    "&:hover": {
      color: "yellow",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position= "sticky" className={classes.app}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          NEWS
        </Typography>
        <Link to="/" className={classes.link}>
              Home
        </Link>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar
