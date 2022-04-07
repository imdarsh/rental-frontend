import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ProductCard from '../Components/ProductCard';
import { Divider, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Category() {

    const [products, setProducts] = useState([]);

    
    useEffect(() => {
        getCategory();
    },[]);
    
    let { category } = useParams();
    const getCategory = async () => {
        await axios.get(`http://localhost:4000/api/v1/category/${category}`)
        .then(function (response){
            setProducts(response.data.products);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    return(
        <div>
            <Navbar />
            <Typography variant="h5" textAlign="center" sx={{ my:2 }}>{category}</Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                {products.map((product, index) => (
                    <Grid item xs={2} sm={3} md={3} key={index}>
                    <ProductCard key={index} product={product} />
                    </Grid>
                ))}
            </Grid>
            <Footer />
        </div>
    )
}

export default Category;