import React, { useEffect, useState } from 'react';
import { Button, Container, Alert, FormControl, NativeSelect, TextField, Typography, InputLabel, Select, MenuItem } from '@mui/material';
import RenterNavbar from '../../Components/RenterNavbar';
import Footer from '../../Components/Footer';
import { useNavigate } from 'react-router-dom';
import { Label } from '@mui/icons-material';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UpdateProduct() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [upload, setUpload] = useState('');
    const categories = ["Furniture", "House", "Clothes", "Vehicle", "Electronics"];
    const [fetchProduct, setFetchProduct] = useState();
    const [product, setProduct] = useState({
        name: "", price: "", deposit: "", description: "", category: ""
    });

    let navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        getProducts();
    },[]);

    const getProducts = async () => {
        await axios(`http://localhost:4000/api/v1/products/${id}`)
        .then(function (response) {
            console.log(response.data.product.category);
            setProduct(response.data.product);
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    
    const editProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name",product.name);
        formData.append("price",product.price);
        formData.append("deposit",product.deposit);
        formData.append("description",product.description);
        formData.append("category",product.category);
        formData.append("userId",JSON.parse(localStorage.getItem('user')).userId);
        setLoading(true);
        return await axios.patch(`http://localhost:4000/api/v1/products/${id}`, formData,{mode: 'cors'})
        .then(function (response) {
            setLoading(false);
            setProduct({ name: "", price: "", deposit: "", description: "", category: ""})
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

    return(
        <div>
        <RenterNavbar />
        <Container sx={{ my:2 }}>
            <Typography variant="h5" sx={{ textAlign: 'center' }}>Create Product</Typography>
            { error && <Alert severity="error">{error}</Alert>}   
            <form id="create-product" onSubmit={editProduct}>
                <FormControl sx={{ my:2 }} fullWidth={true}>
                    <TextField label="Product Name" name="name" id="name" size="small" value={product.name} onChange={handleChange} required />
                </FormControl>
                <FormControl sx={{ my:2 }} fullWidth={true}>
                    <TextField label="Rent" name="price" id="price" size="small" value={product.price} onChange={handleChange} required />
                </FormControl>
                <FormControl sx={{ my:2 }} fullWidth={true}>
                    <TextField label="Deposit" name="deposit" id="deposit" size="small" value={product.deposit} onChange={handleChange} required />
                </FormControl>
                <FormControl sx={{ my:2 }} fullWidth={true}>
                    <TextField label="Description" name="description" id="description" size="small" value={product.description} onChange={handleChange} required />
                </FormControl>
                <FormControl sx={{ my:2 }} fullWidth={true}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <NativeSelect
                    value={product.category.value}
                    defaultValue={product.category}
                    onChange={handleChange}
                >
                    {
                        categories.map((cat, index) => (
                            <option value={cat} key={index}>{cat}</option>
                        ))
                    }
                </NativeSelect>

                </FormControl>
                <Button variant="contained" size="small" type="submit">Create Product</Button>
            </form>
        </Container>
        <Footer />
        </div>
    )
}

export default UpdateProduct;