import { Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

function EditProfile() {

    const [user, setUser] = useState([]);

    useEffect(() => {
        getUserDetails();
    },[])

    const getUserDetails = async() => {
        let id = JSON.parse(localStorage.getItem('user')).userId;
        await axios.get(`http://localhost:4000/api/v1//getUser-id/${id}`)
        .then(function (response) {
            // console.log(response.data.user);
            setUser(response.data.user);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    return (
        <div>
            <Navbar />
            <Typography textAlign="center" fontWeight="bold" variant="h5" sx={{ my:2 }}>Edit Profile</Typography>
            <Footer />
        </div>
    )
}

export default EditProfile;