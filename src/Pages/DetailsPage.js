import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Typography, Button, Container, Grid, Box } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { maxWidth, textAlign, width } from '@mui/system';

function DetailsPage() {
    const [allProducts, getAllProducts] = useState({
        name: "", price: "", deposit: "", description: "", category: "", image: ""
    });

    useEffect(() => {
        getProducts();
    },[]);

    let { id } = useParams();

    const getProducts = async () => {
        await axios.get(`http://localhost:4000/api/v1/products/${id}`)
        .then(function (response) {
        // handle success
        console.log(response.data.product);
        getAllProducts(response.data.product);
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
    }

    return(
        <div>
            <Navbar />
            <Grid container spacing={{ xs: 2, md: 3 }} sx={{ m: 2 }} columns={{ xs: 2, sm: 8, md: 12 }}>
            <Grid item xs={6} md={4} sx={{ textAlign:'center' }}>
            <Box component="img" sx={{
                my:2,
          height: 350,
          width: 300,
          maxHeight: { xs: 300, md: 500 },
          maxWidth: { xs: 300, md: 500 },
        }} alt="product" src={`http://localhost:4000/uploads/${JSON.stringify(allProducts.image).replace(/"/g, "")}`} />
            </Grid>
            <Grid item md={8} xs={6}>
                <Typography variant='h4' sx={{ textAlign: 'center', my: 2 }}>
                    {allProducts.name}
                </Typography>
                <Typography sx={{ mx: 2 }} variant="body1">
                    {allProducts.description}
                </Typography>
            <Button sx={{ mx: 2, my: 2 }} variant="contained">Get on Rent</Button>
            </Grid>
            </Grid>
            <Footer />
        </div>
    )
}

export default DetailsPage;