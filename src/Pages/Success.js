import { Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Success() {

    let navigate = useNavigate();

    const goBack = () => {
        navigate('/');
    }

    return(
        <div style={{ position: 'absolute', top: '40%', left:'45%' }}>
            <img style={{ width: '100px' }} src={`http://localhost:4000/uploads/success.png`} />
            <Typography variant="h4">Success</Typography>
            <Button variant="contained" sx={{ background: '#E44C62' }} onClick={goBack}>Go Back</Button>
        </div>
    )
}

export default Success;