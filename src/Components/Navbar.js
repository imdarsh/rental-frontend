import { AppBar, Toolbar, Typography, IconButton, Box, Drawer } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import React, {useState} from 'react';

function Navbar() {

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
                <Link to="/">
                RentaLife
                </Link>
            </Typography>
            
            {/* Login Button */}
            <IconButton
            size="large"
            edge="end"
            sx={{color: 'success.dark'}}
            aria-label="menu"
          >
            <Link to="/login">
                  <LoginIcon />
  
            </Link>
           </IconButton> 
            </Toolbar>
        </AppBar>
      </Box>
    )
}

export default Navbar;