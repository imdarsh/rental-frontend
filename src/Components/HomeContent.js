import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import { Grid, Container } from '@mui/material';

function HomeContent() {

    const [allProducts, getAllProducts] = useState('');

    useEffect(() => {
        getProducts();
    },[]);

    const getProducts = async () => {
        axios.get('http://localhost:4000/api/v1/products')
        .then(function (response) {
        // handle success
        const allProd = JSON.stringify(response.data.product);
        console.log(allProd);    
        getAllProducts(allProd);
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
    }
    
    return( 
        <div>{allProducts}
        </div>
        // <Container>
        //     <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        //         {Array.from(Array(6)).map((_, index) => (
        //             <Grid item xs={2} sm={4} md={4} key={index}>
        //             {/* <ProductCard /> */}
        //             </Grid>
        //         ))}
        //     </Grid>
        // </Container>
    )
}

export default HomeContent;