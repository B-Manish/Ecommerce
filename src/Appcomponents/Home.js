import React, { useContext, useState } from 'react'
import { ProductContext } from '../contexts/ProductContext';
import { CartContext } from '../contexts/CartContext';
import { SigninContext } from '../contexts/SigninContext';
import Product from '../Appcomponents/Product';
import Hero from '../Appcomponents/Hero';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Signin from './Signin'



const Home = () => {

  const { cart } = useContext(CartContext)
  const { products } = useContext(ProductContext);
  const { avatar } = useContext(SigninContext);
  const productratings = [];
  const indexarray = [];
  const productids = [];

  for (var i = 0; i < products.length; i++) {
    productratings[i] = {
      "id": products[i].id,
      "rating": products[i].rating.rate,
      "title": products[i].title,
      "price": products[i].price,
      "description": products[i].description,
      "category": products[i].category,
      "count": products[i].count,
      "image": products[i].image
    }
  }


  const descarray = productratings.sort(function (a, b) {
    return parseFloat(b.rating) - parseFloat(a.rating);
  });
  descarray.splice(8, 12)




  const filteredProducts = products.filter(item => {
    return item.category === "men's clothing" || item.category === "women's clothing"
  });


  return (
    <div>

      {/* <Signin/> */}

      <Hero ></Hero>

      <Grid container spacing={2}>

        <Grid item xs={6} md={1.5}>
          <Box ></Box>
        </Grid>

        <Grid item xs={6} md={9} >
          <Typography sx={{ fontFamily: 'Poppins,sans-serif' }} variant="h4" gutterBottom>
            Trending Products
          </Typography>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from(descarray).map(product => (
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

export default Home

