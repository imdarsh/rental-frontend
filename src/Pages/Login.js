import React from 'react';
import { InputLabel, OutlinedInput, Container, FormControl, Input, Button, Divider } from '@mui/material';
import {  } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Login() {
    return(
        <div>
            <Container sx={{my: 2}}>
                <FormControl fullWidth={true} sx={{ my:2 }}>
                    <InputLabel htmlFor="component-outlined">Email</InputLabel>
                    <OutlinedInput
                    id="component-outlined"
                    size="medium"
                    label="Email"
                    />
                </FormControl>
                <FormControl fullWidth={true} sx={{ my:2 }}>
                    <InputLabel htmlFor="component-outlined">Password</InputLabel>
                    <OutlinedInput
                    id="component-outlined"
                    size="medium"
                    label="Password"
                    />
                </FormControl>
                <Button variant="contained">Login</Button>
                <Divider sx={{ my: 2 }} />
                <Link to="/register">Create an account</Link>
            </Container>
        </div>
    )
}

export default Login;