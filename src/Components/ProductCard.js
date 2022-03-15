import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import { textAlign } from '@mui/system';
import { Link } from 'react-router-dom';

function ProductCard({product}) {
    return(
      <Link to={`/details/${product._id}`} style={{ textDecoration: 'none' }}>
      <Card sx={{ Width: 300, m: 2 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={`http://localhost:4000/uploads/${JSON.stringify(product.image).replace(/"/g, "")}`}
      />
      <CardContent sx={{ my:0 }}>
        <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.category} 
        </Typography>   
        <Typography variant="button" component="div">
          Deposit: &#8377;{product.deposit}
        </Typography>
        <Typography variant="button" component="div">
          Rent: &#8377;{product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="medium" fullWidth>Get On Rent</Button>
      </CardActions>
    </Card>
    </Link>  
    )
}

export default ProductCard;