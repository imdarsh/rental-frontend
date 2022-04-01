import { Typography, AppBar, Container, Toolbar, BottomNavigation } from '@mui/material';
import React from 'react';

function Footer() {

    const date = new Date();

    return(
        <AppBar color="primary" position='static' sx={{ background: '#E44C62' }}>
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