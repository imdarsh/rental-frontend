import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RenterNavbar from '../../Components/RenterNavbar';
import Footer from '../../Components/Footer';
import { Button, Alert , Container, Divider, FormControl, TextField, Typography, Box } from '@mui/material';
import axios from 'axios';
import Loading from '../../Components/Loading';

import { setUserSession } from '../../utils/session';

function RenterLogin() {

    const [loading,setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [renter, setRenter] = useState({
        email: "", password: ""
    });

    let navigate = useNavigate();

    const loginRenter = async (e) => {
        e.preventDefault();
        const renters = {
            email: renter.email,
            password: renter.password
        }
        setLoading(true);
        return await axios.post('http://localhost:4000/api/v1/renter/renter-login', renters,{mode: 'cors'})
        .then(function (response) {
            setUserSession(response.data.token, response.data.user);
            setLoading(false);
            setRenter({email: "", password: ""})
            navigate(`/renter/dashboard/${response.data.user.userId}`);
        })
        .catch(function (error) {
            setError(error.response.data.message);
            setLoading(false);
        });
    }

    const handleChange = (e) => {
        setRenter({...renter,
             [e.target.name]: e.target.value
        });
    }

    return(
        <Box>
        <RenterNavbar />
        <Container sx={{ my:2 }}>
            <Typography variant="h5" sx={{ my:2, textAlign:'center' }}>Renter Login</Typography>
            { error && <Alert severity="error">{error}</Alert>}      
            <Typography variant="h5" sx={{textAlign:'center'}}>{ loading && <Loading />}</Typography>
            <form onSubmit={loginRenter} id="login-form">
            <FormControl sx={{ my:2 }} fullWidth={true}>
                <TextField label="Email" id="email" size="small" name="email" value={renter.email} onChange={handleChange} />
            </FormControl>
            <FormControl sx={{ my:2 }} fullWidth={true}>
                <TextField label="Password" id="password" type="password" size="small" name="password" value={renter.password} onChange={handleChange} />
            </FormControl>
            <Button variant="contained" type="submit" sx={{ my:2 }}>Login</Button>
            </form>
            <Divider />
            <Typography sx={{ my:2 }}>
                <Link to="/renter/renter-register">
                    Create an account
                </Link>
            </Typography>
        </Container>
        <Footer />
        </Box>
    )
}

export default RenterLogin;