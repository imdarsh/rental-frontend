import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { TextField, Container, FormControl, Button, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {

    const [user, setUser] = useState({
        name: "", email: "", contact: "", address:"", city: "", state: "", password: ""
    });

    const registerUser = async (e) => {
        e.preventDefault(); 
        const users = {
            name: user.name,
            email: user.email,
            contact: user.contact,
            address: user.address,
            city: user.city,
            state: user.state,
            password: user.password
        }
        await axios.post('http://localhost:4000/api/v1/register', users,{mode: 'cors'})
          .then(function (response) {
            console.log(response);
            setUser({name:"",email:"",contact:"",address:"",city:"",state:"",password:""})
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
            <Navbar />
            <Container sx={{my: 2}}>
            <Typography variant="h5" sx={{textAlign:'center'}}>Register</Typography>
            <form id="register-form" onSubmit={registerUser}>
            <FormControl sx={{ my:2 }} fullWidth={true}>
                <TextField label="Name" id="name" size="small" name="name" value={user.name} onChange={handleChange} />
            </FormControl>
            <FormControl sx={{ my:2 }} fullWidth={true}>
                <TextField label="Email" id="email" size="small" name="email" value={user.email} onChange={handleChange} />
            </FormControl>
            <FormControl sx={{ my:2 }} fullWidth={true}>
                <TextField label="Contact No" id="contact" size="small" name="contact" value={user.contact} onChange={handleChange} />
            </FormControl>
            <FormControl sx={{ my:2 }} fullWidth={true}>
                <TextField label="Address" id="address" size="small" name="address" value={user.address} onChange={handleChange} />
            </FormControl>
            <FormControl sx={{ my:2 }} fullWidth={true}>
                <TextField label="City" id="city" size="small" name="city" value={user.city} onChange={handleChange} />
            </FormControl>
            <FormControl sx={{ my:2 }} fullWidth={true}>
                <TextField label="State" id="state" size="small" name="state" value={user.state} onChange={handleChange} />
            </FormControl>
            <FormControl sx={{ my:2 }} fullWidth={true}>
                <TextField label="Password" id="password" type="password" size="small" name="password" value={user.password} onChange={handleChange} />
            </FormControl>
                <Button variant="contained" type="submit" name="register" id="register">Register</Button>
                </form>
                <Divider sx={{ my: 2 }} />
                <Link to="/login">Already have an account? Login</Link>
            </Container>
            <Footer />
        </div>
    )
}

export default Register;