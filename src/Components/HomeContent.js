import React from 'react';
import ProductCard from './ProductCard';
import { Grid, Container } from '@mui/material';

function HomeContent() {
    return(
        <Container>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                {Array.from(Array(6)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                    <ProductCard />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default HomeContent;