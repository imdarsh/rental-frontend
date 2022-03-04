import React, { useState } from 'react';
import { Button, Container, FormControl, FormLabel, TextField, Typography } from '@mui/material';
import RenterNavbar from '../../Components/RenterNavbar';
import Footer from '../../Components/Footer';
import { useNavigate } from 'react-router-dom';
import { Label } from '@mui/icons-material';
import axios from 'axios';

function CreateProduct() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [upload, setUpload] = useState('');
    const [product, setProduct] = useState({
        name: "", price: "", deposit: "", description: "", image: "", category: "", userId: ""
    });

    let navigate = useNavigate();
    
    const addProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name",product.name);
        formData.append("price",product.price);
        formData.append("deposit",product.deposit);
        formData.append("description",product.description);
        formData.append("category",product.category);
        formData.append("userId",JSON.parse(localStorage.getItem('user')).userId);
        formData.append("image",upload);
        setLoading(true);
        return await axios.post('http://localhost:4000/api/v1/products', formData,{mode: 'cors'})
        .then(function (response) {
            setLoading(false);
            setProduct({ name: "", price: "", deposit: "", description: "", image: "", category: "", userId: ""})
            navigate(`/renter/dashboard`);
        })
        .catch(function (error) {
            setError(error.response.data.message);
            setLoading(false);
        });
    }

    const handleChange = (e) => {
        setProduct({...product,
            [e.target.name]: e.target.value
        });
    }

    const handleUpload = (e) => {
        setUpload(e.target.files[0]);
    }

    return(
        <div>
        <RenterNavbar />
        <Container sx={{ my:2 }}>
            <Typography variant="h5" sx={{ textAlign: 'center' }}>Create Product</Typography>
            <form id="create-product" onSubmit={addProduct}>
                <FormControl sx={{ my:2 }} fullWidth={true}>
                    <TextField label="Product Name" name="name" id="name" size="small" value={product.name} onChange={handleChange} />
                </FormControl>
                <FormControl sx={{ my:2 }} fullWidth={true}>
                    <TextField label="Rent" name="price" id="price" size="small" value={product.price} onChange={handleChange} />
                </FormControl>
                <FormControl sx={{ my:2 }} fullWidth={true}>
                    <TextField label="Deposit" name="deposit" id="deposit" size="small" value={product.deposit} onChange={handleChange} />
                </FormControl>
                <FormControl sx={{ my:2 }} fullWidth={true}>
                    <TextField label="Description" name="description" id="description" size="small" value={product.description} onChange={handleChange} />
                </FormControl>
                <FormControl sx={{ my:2 }} fullWidth={true}>
                    <TextField label="Category" name="category" id="category" size="small" value={product.category} onChange={handleChange} />
                </FormControl>
                <FormControl sx={{ my:2 }} fullWidth={true}>
                    <FormLabel>Upload Image</FormLabel>
                    <TextField type="file" name="image" id="image" size="small" onChange={handleUpload} />
                </FormControl>
                <Button variant="contained" size="small" type="submit">Create Product</Button>
            </form>
        </Container>
        <Footer />
        </div>
    )
}

export default CreateProduct;