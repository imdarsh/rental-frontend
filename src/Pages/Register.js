import React, { useState } from 'react';
import { InputLabel, OutlinedInput, Container, FormControl, Input, Button, Divider, Typography } from '@mui/material';
import {  } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {

    const [user, setUser] = useState({
        name: "", email: "", contact: "", city: "", state: "", password: ""
    });

    const registerUser = async (e) => {
        e.preventDefault(); 
        const users = {
            name: user.name,
            email: user.email,
            contact: user.contact,
            city: user.city,
            state: user.state,
            password: user.password
        }
        axios.post('http://localhost:4000/api/v1/register', users,{mode: 'cors'})
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const handleChange = (e) => {
        setUser({...user,
             [e.target.name]: e.target.value
        });
    }

    return(
        <div>
            <Container sx={{my: 2}}>
            <Typography variant="h5" sx={{textAlign:'center'}}>Register</Typography>
            <form id="register-form" onSubmit={registerUser}>
            <FormControl fullWidth={true} sx={{ my:2 }}>
                    <InputLabel htmlFor="component-outlined">Name</InputLabel>
                    <OutlinedInput
                    id="component-outlined"
                    size="medium"
                    label="Name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    />
                </FormControl>
                <FormControl fullWidth={true} sx={{ my:2 }}>
                    <InputLabel htmlFor="component-outlined">Email</InputLabel>
                    <OutlinedInput
                    id="component-outlined"
                    size="medium"
                    label="Email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    />
                </FormControl>
                <FormControl fullWidth={true} sx={{ my:2 }}>
                    <InputLabel htmlFor="component-outlined">Contact No</InputLabel>
                    <OutlinedInput
                    id="component-outlined"
                    size="medium"
                    label="Contact No"
                    name="contact"
                    value={user.contact}
                    onChange={handleChange}
                    />
                </FormControl>
                <FormControl fullWidth={true} sx={{ my:2 }}>
                    <InputLabel htmlFor="component-outlined">City</InputLabel>
                    <OutlinedInput
                    id="component-outlined"
                    size="medium"
                    label="City"
                    name="city"
                    value={user.city}
                    onChange={handleChange}
                    />
                </FormControl>
                <FormControl fullWidth={true} sx={{ my:2 }}>
                    <InputLabel htmlFor="component-outlined">State</InputLabel>
                    <OutlinedInput
                    id="component-outlined"
                    size="medium"
                    label="State"
                    name="state"
                    value={user.state}
                    onChange={handleChange}
                    />
                </FormControl>
                <FormControl fullWidth={true} sx={{ my:2 }}>
                    <InputLabel htmlFor="component-outlined">Password</InputLabel>
                    <OutlinedInput
                    id="component-outlined"
                    size="medium"
                    name="password"
                    label="Password"
                    type="password"
                    value={user.password}
                    onChange={handleChange}
                    />
                </FormControl>
                <Button variant="contained" type="submit" name="register" id="register">Register</Button>
                </form>
                <Divider sx={{ my: 2 }} />
                <Link to="/login">Already have an account? Login</Link>
            </Container>
        </div>
    )
}

export default Register;