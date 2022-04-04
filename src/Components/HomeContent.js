import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import { Grid, Container, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function HomeContent() {

    const [allProducts, getAllProducts] = useState([]);
    const [latestProducts, getLatestProducts] = useState([]);

    useEffect(() => {
        getProducts();
        getLatest();
    },[]);

    const getProducts = async () => {
        await axios.get('http://localhost:4000/api/v1/products')
        .then(function (response) {
        // handle success
        getAllProducts(response.data.product);
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
    }

    const getLatest = async () => {
        await axios.get('http://localhost:4000/api/v1/latest-products')
        .then(function (response) {
            getLatestProducts(response.data.products);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    return( 
        <Container sx={{ minHeight: 'calc(100vh - 272px)' }}>
            <Grid sx={{ my:2 }}  justifyContent='space-between' spacing={{ md:4, xs:2 }}>
                <Link  style={{ textDecoration: 'none', color: 'white' }} to={'Electronics'}><Button sx={{ mx:2, background: '#E44C62' }} variant="contained" >Electronics</Button></Link>
                <Button sx={{ m:2, background: '#E44C62' }} variant="contained"><Link  style={{ textDecoration: 'none', color: 'white' }} to={'Vehicle'}>Vehicles</Link></Button>
                <Button sx={{ mx:2, background: '#E44C62' }} variant="contained"><Link  style={{ textDecoration: 'none', color: 'white' }} to={'Clothes'}>Clothes</Link></Button>
                <Button sx={{ mx:2, background: '#E44C62' }} variant="contained"><Link  style={{ textDecoration: 'none', color: 'white' }} to={'Furniture'}>Furniture</Link></Button>
            </Grid>

                <Typography sx={{ mt:2, mb:1 }} variant="h5">Latest Products</Typography>
            
                <Grid container spacing={{ xs: 0, md: 2 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                
                {latestProducts.map((product, index) => (
                    <Grid item xs={2} sm={3} md={3} key={index}>
                    <ProductCard key={index} product={product} />
                    </Grid>
                ))}
                </Grid>

                <Typography sx={{ mt:2, mb:1 }} variant="h5">Trending Products</Typography> 
            <Grid container spacing={{ xs: 0, md: 2 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                {allProducts.map((product, index) => (
                    <Grid item xs={2} sm={3} md={3} key={index}>
                    <ProductCard key={index} product={product} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default HomeContent;