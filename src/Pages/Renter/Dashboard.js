import { Typography, Button, Container, TableCell, TableRow, TableBody, TableHead, Table, Paper, TableContainer } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RenterNavbar from '../../Components/RenterNavbar';
import Footer from '../../Components/Footer';
import ProductCard from '../../Components/ProductCard';
import { Link, useNavigate } from 'react-router-dom'; 

function Dashboard() {

    const [allProducts, getAllProducts] = useState([]);

    useEffect(() => {
        getProducts();
    },[]);

    let navigate = useNavigate();

    const getProducts = async () => {
        let userId = JSON.parse(localStorage.getItem('user')).userId;
        await axios.get(`http://localhost:4000/api/v1/show-products/${userId}`)
        .then(function (response) {
        // handle success
        getAllProducts(response.data.products);
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
    }

    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:4000/api/v1/products/${id}`)
        .then(function (response) {
            navigate('/renter/dashboard');
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    
    return(
        <div>
            <RenterNavbar />
                <Typography variant="h4" sx={{ textAlign:'center' }}>
                    Renter Dashboard
                </Typography>
                <Container  sx={{ my:2 }}>
                <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Product Name</TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold' }}>Rent</TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold' }}>Deposit</TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold' }}>Category</TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold' }}>Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {allProducts.map((row, index) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.deposit}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right"><Button onClick={() => deleteProduct(row._id)} variant="conatained">Delete</Button></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                </Container>
            <Footer />
        </div>
    )
}

export default Dashboard;