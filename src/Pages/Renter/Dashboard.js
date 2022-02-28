import { Typography, Container } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RenterNavbar from '../../Components/RenterNavbar';
import Footer from '../../Components/Footer';

function Dashboard() {


    
    return(
        <div>
            <RenterNavbar />
            <Typography variant="h4" sx={{ textAlign:'center' }}>
                Renter Dashboard
            </Typography>
            <Footer />
        </div>
    )
}

export default Dashboard;