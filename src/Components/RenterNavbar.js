import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { removeUserSession } from '../utils/session';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

import LogoutIcon from '@mui/icons-material/Logout';

function RenterNavbar() {

  let navigate = useNavigate();

  const renterLogout = () => {
      removeUserSession();
      navigate('/renter/renter-login');
  }

    return(
      <Box>
        <AppBar position="relative">
            <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/renter/dashboard"  style={{ color: 'white', textDecoration: 'none' }} >
                RentaLife
                </Link>
            </Typography>
            <Typography>
            <Link to="/renter/create-product"  style={{ color: 'white', textDecoration: 'none' }} >
                Add Product
                </Link>
            </Typography>
             {/* Login Button */}
            {
              localStorage.getItem('token') &&  <IconButton
              size="large"
              edge="end"
              aria-label="menu"
              onClick={renterLogout}
            >          
                    <LogoutIcon style={{ color: 'white' }} />
             </IconButton>
            } 
            </Toolbar>
        </AppBar>
      </Box>
    )
}

export default RenterNavbar;