import { AppBar, Toolbar, Menu, MenuItem, Typography, IconButton, Box, Drawer, ListItem, ListItemText, ListItemIcon, List, SwipeableDrawer, Divider } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import AppsIcon from "@mui/icons-material/Apps";
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React, { useState } from 'react';
import { removeUserSession } from '../utils/session';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ChairIcon from '@mui/icons-material/Chair';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import DevicesIcon from '@mui/icons-material/Devices';

function Navbar() {

  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);

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

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpenDrawer(!openDrawer);
  };

    return(
      <Box>
        <AppBar position="relative" sx={{ background: '#ffffff', color: '#000000' }}>
            <Toolbar>
            {/* Drawer Button */}
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
            <Typography variant="h5" fontFamily="arial" fontWeight="bold" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/"  style={{ color: '#000000', textDecoration: 'none' }}  >
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
            <Link to="/login" style={{ color:'black' }}>
                  <LoginIcon color='black'  />
  
            </Link>
           </IconButton>} 
            </Toolbar>
        </AppBar>

         <Drawer open={openDrawer} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)} >
           <Toolbar />
        <Box sx={{ width: 250 }} onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}>
          <List> 
            <ListItem>
                <ListItemText primary="Category" />
            </ListItem> 
            <Divider />
            <Link to={'/Electronics'} style={{ textDecoration: 'none', color: 'black' }}>
              <ListItem button key="1">
                <ListItemIcon>
                  <DevicesIcon />
                </ListItemIcon>
                <ListItemText primary="Electronics" />
              </ListItem>
              </Link>

              <Link to={'/Clothes'} style={{ textDecoration: 'none', color: 'black' }}>    
              <ListItem button key="1">
                <ListItemIcon>
                  <CheckroomIcon />
                </ListItemIcon>
                <ListItemText primary="Clothes" />
              </ListItem>
              </Link>

              <Link to={'/Vehicle'} style={{ textDecoration: 'none', color: 'black' }}>
              <ListItem button key="1">
                <ListItemIcon>
                  <DirectionsCarIcon />
                </ListItemIcon>
                <ListItemText primary="Vehicles" />
              </ListItem>
              </Link>

              <Link to={'/Furniture'} style={{ textDecoration: 'none', color: 'black' }}>
              <ListItem button key="1">
                <ListItemIcon>
                  <ChairIcon />
                </ListItemIcon>
                <ListItemText primary="Furniture" />
              </ListItem>
              </Link>
              <Divider />  
              <ListItem>
                <ListItemText primary="Help and Settings" />
            </ListItem>
          </List>
        </Box>
          </Drawer>        

      </Box>
    )
}

export default Navbar;