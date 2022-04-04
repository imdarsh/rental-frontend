import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Grid, Box, Card, Button, Typography, Container, CardMedia, Divider } from '@mui/material';

function Orders() {

    const [order, setOrder] = useState({
        name: "", price: "", deposit: "", description: "", category: "", image: ""
    });
    const [user, setUser] = useState({
        name: "", email: "", contact: "", address: "", city: "", state: ""
    })

    useEffect(() => {
        getOrder();
        getUser();
    },[]);

    let navigate = useNavigate();

    let { id } = useParams();

    // get Product Order
    const getOrder = async () => {
        await axios.get(`http://localhost:4000/api/v1/products/${id}`)
        .then(function (response) {
            console.log(response.data.product);
            setOrder(response.data.product);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    // get User
    const getUser = async () => {
        let userId = JSON.parse(localStorage.getItem('user')).userId;
        await axios.get(`http://localhost:4000/api/v1/getUser-id/${userId}`)
        .then(function (response){
            console.log(response.data.user);
            setUser(response.data.user);
        })
        .catch(function (error){
            console.log(error);
        })
    }

    // checkout
    const checkout = async () => {
        let totals = parseInt(order.deposit)+parseInt(order.price);
        const orders = {
            userId: JSON.parse(localStorage.getItem('user')).userId,
            productId: id,
            total: totals
        }

        await axios.post(`http://localhost:4000/api/v1/orders/${id}`, orders, {mode: 'cors'})
        .then(function (response) {
            navigate(`/success`);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    return (
        <div>
            <Navbar />
            <Container sx={{ minHeight: 'calc(100vh - 100px)' }}>
            <Grid container spacing={{ xs: 2, md: 3 }} sx={{ m: 2 }} columns={{ xs: 2, sm: 8, md: 12 }}>
            <Grid item xs={6} md={4} sx={{ textAlign:'center' }}>
            <Box component="img" sx={{
                my:2,
          height: 350,
          width: 300,
          maxHeight: { xs: 300, md: 500 },
          maxWidth: { xs: 300, md: 500 },
        }} alt="product" src={`http://localhost:4000/uploads/${JSON.stringify(order.image).replace(/"/g, "")}`} />
            </Grid>
            <Grid item md={8} xs={6}>
                <Typography variant="h5" fontWeight="bold" sx={{ mx:2, mt:5 }}>{order.name}</Typography>
                <Typography sx={{ mx:2 }}>{order.category}</Typography>
                <Typography variant="h6">
                    <Typography variant="h6" component="span" sx={{mx:2, fontWeight: 'bold'}}>Rent: &#8377;{order.price}</Typography>  
                    <Typography variant="h6" component="span" sx={{mx:2, fontWeight: 'bold'}}>Deposit: &#8377;{order.deposit}</Typography>
                </Typography>
            <Divider />
            <Typography sx={{ mx:2 }}>  
            <Typography variant="h6" fontWeight="bold" sx={{ mt: 4 }}>
                Delivery Address
            </Typography>
            <Typography>
                {user.address}
            </Typography>
            <Typography>
                {user.city}, {user.state}
            </Typography>
            </Typography>
            <Divider />
            </Grid>
            </Grid>
            <Typography sx={{ fontWeight: 'bold', my: 2 }} textAlign="center" variant="h5">Total: &#8377;{parseInt(order.deposit)+parseInt(order.price)}</Typography>
            <Typography>            
                <Button sx={{ my: 2, width: '90%',background: '#E44C62' }} variant="contained" onClick={checkout}>Proceed to Rent</Button>
            </Typography>  
            </Container>
            <Footer />
        </div>
    )
}

export default Orders;