import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';

function ProductCard({product}) {
    return(
  
      <Card sx={{ Width: 300, m: 2 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={product.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small">See More</Button>
        <Button variant="contained" size="small">Get On Rent</Button>
      </CardActions>
    </Card>
       
    )
}

export default ProductCard;