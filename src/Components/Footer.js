import React from "react";
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
export default function Footer() {
    return (
        <AppBar position="static" color="primary">
          <Box maxWidth="sm">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                  <div style={{TextAlign:'center'}}>
                © SanikaA
                </div>
              </Typography>
            </Toolbar>
          </Box>
        </AppBar>
    )
}