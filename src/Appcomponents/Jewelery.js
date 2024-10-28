import React, { useContext, useState } from 'react'
import { ProductContext } from '../contexts/ProductContext';
import { CartContext } from '../contexts/CartContext';
import { SigninContext } from '../contexts/SigninContext';
import Product from './Product';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



const Jewelery = () => {

  const { products } = useContext(ProductContext);



  const filteredProducts = products.filter(item => {
    return item.category === "jewelery"
  });


  return (
    <div>


      <Grid container spacing={2}>

        <Grid item xs={6} md={1.5}>
          <Box ></Box>
        </Grid>

        <Grid item xs={6} md={9} >
          <Typography sx={{ fontFamily: 'Poppins,sans-serif' }} variant="h4" gutterBottom>
          </Typography>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from(filteredProducts).map(product => (
              <Grid item xs={2} sm={4} md={3} key={product.id}>
                <Product product={product} key={product.id} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={6} md={1.5}>
          <Box></Box>
        </Grid>
      </Grid>

    </div>

  )

}

export default Jewelery


