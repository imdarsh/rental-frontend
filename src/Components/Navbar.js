import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import React from 'react';

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
                <Link to="/"  style={{ color: 'white', textDecoration: 'none' }}  >
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
                  <LoginIcon   style={{ color: 'white' }}  />
  
            </Link>
           </IconButton> 
            </Toolbar>
        </AppBar>
      </Box>
    )
}

export default Navbar;