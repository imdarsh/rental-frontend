import { Typography, AppBar, Container, Toolbar } from '@mui/material';
import React from 'react';

function Footer() {

    const date = new Date();

    return(
        <AppBar position="static" color="primary">
          <Container maxWidth="md" >
            <Toolbar>
              <Typography  variant="body1" color="inherit">
                &copy; {date.getFullYear()} All Rights Reserved
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}

export default Footer;