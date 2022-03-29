import { Container, Divider, Typography, Button, TextField, FormControl } from '@mui/material';
import axios from 'axios';
import Loading from '../Components/Loading';
import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';
import { Label } from '@mui/icons-material';

function EditProfile() {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);

    let navigate = useNavigate();

    useEffect(() => {
        getUserDetails();
    },[])


    const getUserDetails = async() => {
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

    const updateProfile = async (e) => {
        e.preventDefault();
        setLoading(true);
        const users = {
            name: user.name,
            email: user.email,
            contact: user.contact,
            address: user.address,
            city: user.city,
            state: user.state
        }
        let id = JSON.parse(localStorage.getItem('user')).userId; 
        await axios.patch(`http://localhost:4000/api/v1/update-profile/${id}`, users, { mode: 'cors' })
        .then(function (response){
            console.log(true);
            navigate(`/my-profile`);
            setLoading(false);
        })
        .catch(function (error){
            console.log(error);
        })
    }

    const handleChange = (e) => {
        setUser({...user,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <Navbar />
            <Typography textAlign="center" fontWeight="bold" variant="h5" sx={{ my:2 }}>Edit Profile</Typography>
            <Container>
                <Divider sx={{ background: 'black' }} />
                <Typography variant="h5" sx={{textAlign:'center'}}>{ loading && <Loading />}</Typography>
                <form onSubmit={updateProfile} id="edit-profile">
                <FormControl sx={{ my:2 }} fullWidth={true}>
                <TextField label="Name" id="name" size="small" name="name" value={user.name} onChange={handleChange} focused />
            </FormControl>
            <FormControl sx={{ my:2 }} fullWidth={true}>
                <TextField label="Email" id="email" size="small" name="email" value={user.email} onChange={handleChange} focused />
            </FormControl>
            <FormControl sx={{ my:2 }} fullWidth={true}>
                
                <TextField label="Contact" id="contact" size="small" name="contact" value={user.contact} onChange={handleChange} focused  />
            </FormControl>
            <FormControl sx={{ my:2 }} fullWidth={true}>
                <TextField label="Address" id="address" size="small" name="address" value={user.address} onChange={handleChange} focused />
            </FormControl>
            <FormControl sx={{ my:2 }} fullWidth={true}>
                <TextField label="City" id="city" size="small" name="city" value={user.city} onChange={handleChange} focused />
            </FormControl>
            <FormControl sx={{ my:2 }} fullWidth={true}>
                <TextField label="State" id="state" size="small" name="state" value={user.state} onChange={handleChange} focused />
            </FormControl>
                <Button sx={{ my:2 }} variant="contained" type="submit" name="Update" id="update">Update Profile</Button>
            </form>
            </Container>

            <Footer />
        </div>
    )
}

export default EditProfile;