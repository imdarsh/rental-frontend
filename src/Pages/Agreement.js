import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Typography, Container } from '@mui/material';
import { Radio, RadioGroup, FormControlLabel } from '@mui/material';
import { Button } from '@mui/material';


function Agreement() {

    const [disabled, setDisabled] = useState(true);
    const [allProducts, getAllProducts] = useState({
        name: "", price: "", deposit: "", description: "", category: "", image: ""
    });

    useEffect(() => {
        getProducts();
    },[]);

    let navigate = useNavigate();
    
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

    const handleClick = () => {
        navigate(`/orders/${id}`);
    }

    const handleDisabled = () => {
        setDisabled(false);
    }
    
    const handleEnabled = () => {
        setDisabled(true);
    }

    return(
        <div>
            <Navbar />
            <Container sx={{ minHeight: 'calc(100vh - 144px)' }}>
                <Typography variant='h4' sx={{ textAlign: 'center', my: 2 }}>
                    Agreement
                </Typography>
                <Typography variant="body1">
                    <Typography sx={{ fontWeight: 'bold' }} variant="h5">Terms and Conditions</Typography>
                    <ul>
                        <li>The renter hereby agrees to pay the owner the amount of money mentioned in the Agreement to lease the product owned by the owner.</li>
                        <li>The agreement shall be effective on the date of recieving product and end on the date of being delivered back to it's respective owner.</li>
                        <li>The rental amount for the product is {allProducts.price}.</li>
                        <li>Upon the end of the term of agreement, this agreement will not be automatically renewed for a new term.</li>
                        <li>Prior to taking product, the renter will pay the owner an amount of Rs.{allProducts.deposit} as a security deposit to cover any damages suffered by the product. Such deposit will be returned to the renter upon the end of this agreement, provided the product is left in same condition as prior to when recieved by renter.</li>
                        <li>By signing this agreement user accepts to all the terms and conditions written above.</li>
                    </ul>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="I do not accept all the terms and conditions."
                        id="condition"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel onClick={handleDisabled} value="I accept all the terms and conditions." control={<Radio size="small" />} label="I accept all the terms and conditions." />
                        <FormControlLabel onClick={handleEnabled} value="I do not accept all the terms and conditions." control={<Radio size="small" />} label="I do not accept all the terms and conditions." />
                    </RadioGroup>
                    <Button variant="contained" sx={{ my:2, background: '#E44C62' }} onClick={handleClick} disabled={disabled}>Continue</Button>
                </Typography>
            </Container>
            <Footer />
        </div>
    )
}

export default Agreement;