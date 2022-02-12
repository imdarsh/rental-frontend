import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import React from 'react';

function Navbar() {
    return(
        <AppBar position="relative">
            <Toolbar>
            {/* Drawer Button */}
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                RentaLife
            </Typography>
            
            {/* Login Button */}
            <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
          >
                <LoginIcon />
           </IconButton>
            
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;