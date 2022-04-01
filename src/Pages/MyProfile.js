import { Button, Container, Divider, Grid, Typography } from '@mui/material';
import React,{ useState, useEffect } from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Loading from '../Components/Loading';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function MyProfile() {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);

    let navigate = useNavigate();

    useEffect(() => {
        getUserDetails();
    },[]);

    const getUserDetails = async () => {
        setLoading(true);
        let id = JSON.parse(localStorage.getItem('user')).userId;
        await axios.get(`http://localhost:4000/api/v1//getUser-id/${id}`)
        .then(function (response) {
            // console.log(response.data.user);
            setUser(response.data.user);
            setLoading(false);
        })
        .catch(function (error) {
            setLoading(false);
            console.log(error);
        })
    }

    // Edit Profile Button
    const editProfile = () => {
        let id = JSON.parse(localStorage.getItem('user')).userId;
        navigate(`/edit-profile/${id}`);
    }

    // Change password Button
    const changePassword = () => {
        let id = JSON.parse(localStorage.getItem('user')).userId;
        navigate(`/change-password/${id}`);
    }

    return(
        <div>
            <Navbar />
            <Typography variant="h5" textAlign="center" sx={{ my:2 }}>Profile</Typography>
            <Container>
            <Divider sx={{ background: 'black' }} />
            <Typography variant="h3" sx={{textAlign:'center'}}>{ loading && <Loading />}</Typography>
            <Typography sx={{ my:2 }} fontWeight="bold">Profile Details:</Typography>
            <Typography sx={{ my:1 }} >Name: {user.name}</Typography>
            <Typography sx={{ my:1 }}>Email: {user.email}</Typography>
            <Typography sx={{ my:1 }}>Contact: {user.contact}</Typography>
            <Typography sx={{ my:1 }}>Address: {user.address}</Typography>
            <Typography sx={{ my:1 }}>City: {user.city}</Typography>
            <Typography sx={{ my:1 }}>State: {user.state}</Typography>
            <Divider sx={{ background: 'black' }} />
            <Grid>
            <Button sx={{ m:1,  background: '#E44C62' }} variant="contained" onClick={editProfile}>Edit Profile</Button>
            <Button sx={{ my:1, background: '#E44C62' }} variant="contained" onClick={changePassword}>Change Password</Button>
            
            </Grid>
            </Container>
            <Footer />
        </div>
    )
}

export default MyProfile;