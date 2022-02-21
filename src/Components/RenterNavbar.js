import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

function RenterNavbar() {

    return(
      <Box>
        <AppBar position="relative">
            <Toolbar>
            {/* Drawer Button */}
            <IconButton
            size="large"
            edge="start"
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/" >
                RentaLife
                </Link>
            </Typography>

            </Toolbar>
        </AppBar>
      </Box>
    )
}

export default RenterNavbar;