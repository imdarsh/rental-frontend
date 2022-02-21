import { Typography, Container } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RenterNavbar from '../../Components/RenterNavbar';
import Footer from '../../Components/Footer';
import { removeUserSession } from '../../utils/session';
import { useNavigate } from 'react-router-dom';

function Dashboard() {

    let navigate = useNavigate();

    const handleClick = () => {
        removeUserSession();
        navigate('/renter/renter-login');
    }
    
    return(
        <div>
            <RenterNavbar />
            <Typography variant="h4" sx={{ textAlign:'center' }}>
                Renter Dashboard
                <button onClick={handleClick}>Logout</button>
            </Typography>
            <Footer />
        </div>
    )
}

export default Dashboard;