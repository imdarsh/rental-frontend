import { AppBar, Toolbar, Menu, MenuItem, Typography, IconButton, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';
import { removeUserSession } from '../utils/session';

function Navbar() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let navigate = useNavigate();

  const userLogout = () => {
      setAnchorEl(null);
      removeUserSession();
      navigate('/');
  }

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
            {/* <MenuIcon /> */}
          </IconButton>
            <Typography variant="h5" fontFamily="arial" fontWeight="bold" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/"  style={{ color: 'white', textDecoration: 'none' }}  >
                Rentalife
                </Link>
            </Typography>
            
            {/* Login Button */}
            {localStorage.getItem('token') && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircleIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><Link to="/my-profile" style={{ textDecoration: 'none', color: 'black' }}>My Profile</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/my-orders" style={{ textDecoration: 'none', color: 'black' }}>My Orders</Link></MenuItem>
                <MenuItem onClick={handleClose}>Settings</MenuItem>
                <MenuItem onClick={userLogout}>Logout</MenuItem>
              </Menu>
            </div>
          )}
            { !localStorage.getItem('token') && <IconButton
            size="large"
            edge="end"
            sx={{color: 'success.dark'}}
            aria-label="menu"
          >
            <Link to="/login">
                  <LoginIcon   style={{ color: 'white' }}  />
  
            </Link>
           </IconButton>} 
            </Toolbar>
        </AppBar>
      </Box>
    )
}

export default Navbar;