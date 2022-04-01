import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Button, Alert , Container, Divider, FormControl, TextField, Typography, Box } from '@mui/material';
import axios from 'axios';
import Loading from '../Components/Loading';
import { setUserSession } from '../utils/session';

function Login() {

    const [loading,setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [user, setUser] = useState({
        email: "", password: ""
    });

    let navigate = useNavigate();

    const loginuser = async (e) => {
        e.preventDefault();
        const users = {
            email: user.email,
            password: user.password,
            role: 'user'
        }
        setLoading(true);
        return await axios.post('http://localhost:4000/api/v1/login', users,{mode: 'cors'})
        .then(function (response) {
            setUserSession(response.data.token, response.data.user);
            setLoading(false);
            setUser({email: "", password: ""})
            navigate(`/`);
        })
        .catch(function (error) {
            setError(error.response.data.message);
            setLoading(false);
        });
    }

    const handleChange = (e) => {
        setUser({...user,
             [e.target.name]: e.target.value
        });
    }

    return(
        <Box>
        <Navbar />
        <Container sx={{ my:2, height: '100%'}}>
            <Typography variant="h5" sx={{ my:2, textAlign:'center' }}>Login</Typography>
            { error && <Alert severity="error">{error}</Alert>}      
            <Typography variant="h5" sx={{textAlign:'center'}}>{ loading && <Loading />}</Typography>
            <form onSubmit={loginuser} id="login-form">
            <FormControl sx={{ my:2 }} fullWidth={true}>
                <TextField label="Email" id="email" size="small" name="email" value={user.email} onChange={handleChange} />
            </FormControl>
            <FormControl sx={{ my:2 }} fullWidth={true}>
                <TextField label="Password" id="password" type="password" size="small" name="password" value={user.password} onChange={handleChange} />
            </FormControl>
            <Button variant="contained" type="submit" sx={{ my:2, background: '#E44C62' }}>Login</Button>
            </form>
            <Divider />
            <Typography sx={{ my:2 }}>
                <Link to="/register">
                    Create an account
                </Link>
            </Typography>
        </Container>
        <Footer />
        </Box>
    )
}

export default Login;