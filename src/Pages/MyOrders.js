import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import Loading from '../Components/Loading';
import axios from 'axios';

function MyOrders() {

    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getOrders();
    },[]);

    const getOrders = async () => {
        setLoading(true);
        let userId = JSON.parse(localStorage.getItem('user')).userId;

        await axios.get(`http://localhost:4000/api/v1/myorders/${userId}`)
        .then(function (response){
            console.log(response.data);
            setOrders(response.data.orders);
            setProducts(response.data.products);
            setLoading(false);
        })
        .catch(function (error){
            setLoading(false);
            console.log(error);
        })
    }
    
    return(
        <>
            <Navbar />
                <Typography sx={{ my:2 }} variant="h5" textAlign="center">My Orders</Typography>
                <Typography variant="h3" sx={{textAlign:'center'}}>{ loading && <Loading />}</Typography>
                {products.map((row,index) => (
                <Card sx={{ m:2 }}>
                <Grid container spacing={{ xs: 2, md: 2 }} sx={{ m: 2 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                <Grid item xs={4} md={4} sx={{ textAlign:'center' }}>
                    <CardMedia component="img" sx={{ my:2, height: 300, width: 300, maxHeight: { xs: 300, md: 500 }, maxWidth: { xs: 300, md: 500 }}} image={`http://localhost:4000/uploads/${JSON.stringify(row.image).replace(/"/g, "")}`} />
                </Grid>
                <Grid item md={6} xs={6}>
                            <CardContent>
                            <Typography fontWeight="bold">Product Id:  {row._id}</Typography>
                            <Typography variant="h6">Product Name: {row.name}</Typography>
                            <Typography>Total: &#8377;{parseInt(row.price) + parseInt(row.deposit)}</Typography>
                            </CardContent>
                </Grid>
                </Grid>
                </Card>
                ))}
            <Footer />
        </>
    )
}

export default MyOrders;