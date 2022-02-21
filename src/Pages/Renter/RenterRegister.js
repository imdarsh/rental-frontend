import React, { useState } from 'react';
import RenterNavbar from '../../Components/RenterNavbar';
import Footer from '../../Components/Footer';
import { TextField, Container, FormControl, Button, Divider, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getToken, setUserSession, setUser } from '../../utils/session';
import Cookies from 'universal-cookie/es6';


function RenterRegister(props) {

    const cookies = new Cookies();

    const [renter, setRenter] = useState({
        name: "", email: "", contact: "", address:"", city: "", state: "", password: ""
    });
    
    let navigate = useNavigate();

    const registerrenter = async (e) => {
        e.preventDefault(); 
        const renters = {
            name: renter.name,
            email: renter.email,
            contact: renter.contact,
            address: renter.address,
            city: renter.city,
            state: renter.state,
            password: renter.password
        }


        return await axios.post('http://localhost:4000/api/v1/renter/renter-register', renters,{mode: 'cors'})
          .then(function (response) {
            setUserSession(response.data.token, response.data.user);
            setRenter({name:"",email:"",contact:"",address:"",city:"",state:"",password:""})
            navigate('/renter/dashboard');
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const handleChange = (e) => {
        setRenter({...renter,
             [e.target.name]: e.target.value
        });
    }

    return(
        <div>
            <RenterNavbar />
            <Container sx={{my: 2}}>
            <Typography variant="h5" sx={{textAlign:'center'}}>Renter Register</Typography>
            <form id="register-form" onSubmit={registerrenter}>
            <FormControl sx={{ my:2 }} fullWidth={true}>
                <TextField label="Name" id="name" size="small" name="name" value={renter.name} onChange={handleChange} />
            </FormControl>
            <FormControl sx={{ my:2 }} fullWidth={true}>
                <TextField label="Email" id="email" size="small" name="email" value={renter.email} onChange={handleChange} />
            </FormControl>
            <FormControl sx={{ my:2 }} fullWidth={true}>
                <TextField label="Contact No" id="contact" size="small" name="contact" value={renter.contact} onChange={handleChange} />
            </FormControl>
            <FormControl sx={{ my:2 }} fullWidth={true}>
                <TextField label="Address" id="address" size="small" name="address" value={renter.address} onChange={handleChange} />
            </FormControl>
            <FormControl sx={{ my:2 }} fullWidth={true}>
                <TextField label="City" id="city" size="small" name="city" value={renter.city} onChange={handleChange} />
            </FormControl>
            <FormControl sx={{ my:2 }} fullWidth={true}>
                <TextField label="State" id="state" size="small" name="state" value={renter.state} onChange={handleChange} />
            </FormControl>
            <FormControl sx={{ my:2 }} fullWidth={true}>
                <TextField label="Password" id="password" type="password" size="small" name="password" value={renter.password} onChange={handleChange} />
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

export default RenterRegister;