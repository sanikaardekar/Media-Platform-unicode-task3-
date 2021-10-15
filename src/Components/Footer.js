import React from "react";
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { makeStyles } from '@material-ui/styles'
const useStyles = makeStyles(() => ({
   app:{
     backgroundColor: "#2A8F70 !important", 
   },
 }));
export default function Footer() {
  const classes = useStyles();
    return (
        <AppBar position="static" className={classes.app}>
          <CssBaseline />
            <Toolbar>
              <Typography variant="h6">
                © SanikaA
              </Typography>
            </Toolbar>
        </AppBar>
    )
}