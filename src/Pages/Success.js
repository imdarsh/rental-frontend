import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Success() {

    let navigate = useNavigate();

    const goBack = () => {
        navigate('/');
    }

    return(
        <div>
            Success
            <Button variant="contained" onClick={goBack}>Go Back</Button>
        </div>
    )
}

export default Success;