import { Button, Container, Divider, FormControl, TextField, Typography, Alert } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Loading from '../Components/Loading';

function ChangePassword() {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    let navigate = useNavigate();

    const changePassword = async (e) => {
        e.preventDefault();
        setLoading(true);
        if(user.newpassword === user.cnfnewpassword) {
            const users = {
                oldpassword: user.oldpassword,
                newpassword: user.newpassword
            }
            let id = JSON.parse(localStorage.getItem('user')).userId; 
            await axios.patch(`http://localhost:4000/api/v1/change-password/${id}`, users)
            .then(function (response) {
                console.log(true);
                setLoading(false);
                navigate(`/my-profile`);
            })
            .catch(function (error) {
                setLoading(false);
                
                setError(error.response.data.message);
            })
        }
        else {
            setError("Password Does not Match");
            setLoading(false);
        }
    }

    const handleChange = (e) => {
        setUser({...user,
            [e.target.name]: e.target.value
        });
    }

    return(
        <div>
            <Navbar />
            <Typography textAlign="center" variant="h5" fontWeight="bold" sx={{ my:2 }}>Change Password</Typography>
            <Container sx={{ minHeight: 'calc(100vh - 192px)'}}>
                <Divider sx={{ background: 'black' }} />
                { error && <Alert sx={{ my:2 }} severity="error">{error}</Alert>}      
                <Typography variant="h5" sx={{textAlign:'center'}}>{ loading && <Loading />}</Typography>
                <form onSubmit={changePassword} id="change-password-form">
                <FormControl sx={{ my:2 }} fullWidth>
                    <TextField type="password" size="small" label="Old Password" name="oldpassword" id="oldpassword" onChange={handleChange} value={user.oldpassword} />
                </FormControl>
                <FormControl sx={{ my:2 }} fullWidth>
                    <TextField type="password" size="small" label="New Password" name="newpassword" id="newpassword" onChange={handleChange} value={user.newpassword} />
                </FormControl>
                <FormControl sx={{ my:2 }} fullWidth>
                    <TextField type="password" size="small" label="Confirm New Password" name="cnfnewpassword" id="cnfnewpassword" onChange={handleChange} value={user.cnfnewpassword} />
                </FormControl>
                <Button type="submit" variant="contained" sx={{ my:2, background: '#E44C62' }}>Change Password</Button>
                </form>
            </Container>
            <Footer />
        </div>
    )
}

export default ChangePassword;