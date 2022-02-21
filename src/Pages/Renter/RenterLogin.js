import React from 'react';
import { Link } from 'react-router-dom';
import RenterNavbar from '../../Components/RenterNavbar';
import Footer from '../../Components/Footer';
import { Button, Container, Divider, FormControl, TextField, Typography, Box } from '@mui/material';

function RenterLogin() {
    return(
        <Box>
        <RenterNavbar />
        <Container sx={{ my:2 }}>
            <Typography variant="h5" sx={{ my:2, textAlign:'center' }}>Renter Login</Typography>
            <FormControl sx={{ my:2 }} fullWidth={true}>
                <TextField label="Email" id="email" size="small" name="email" />
            </FormControl>
            <FormControl sx={{ my:2 }} fullWidth={true}>
                <TextField label="Password" id="password" type="password" size="small" name="password" />
            </FormControl>
            <Button variant="contained" type="submit" sx={{ my:2 }}>Login</Button>
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