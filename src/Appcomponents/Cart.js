import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';
import CartItem from '../Appcomponents/CartItem';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { SigninContext } from '../contexts/SigninContext';

const CustomButton = styled(Button)({

  fontSize: 14,
  color: 'white',
  border: '1.5px solid crimson',
  backgroundColor: 'crimson',
  // fontFamily: 'Shantell Sans, cursive'
  height: '45px',
  width: '45px',
  borderRadius: 0

});

const Cart = () => {

  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  const { cartisempty, setCartisempty } = useContext(SigninContext);
  const { products, setProducts } = useContext(ProductContext);


  //mine
  useEffect(() => {
    setProducts(products);
  }, [products]);

  useEffect(() => {
    if (itemAmount === 0) {
      setCartisempty(true);
    } else {
      setCartisempty(false);
    }
  }, [itemAmount]);


  const emptycart = () => {
    for (var i = 0; i < products.length; i++) {
      products[i].count = 10;
    }
    setProducts(products);
  }

  return (
    <div>

      <Box sx={{ width: '35vw', height: '90vh', border: '0px solid blue', margin: '10vh 0 0 30vw' }}>

        <Typography variant="h9" sx={{ fontFamily: 'Poppins,sans-serif', fontSize: '100%', fontWeight: '900', marginLeft: '-100px' }} gutterBottom>
          SHOPPING BAG ({itemAmount})
        </Typography>
        {cart.map((item => {
          return <CartItem item={item} key={item.id} />
        }))}
        <Box sx={{ width: '167%', height: '10%',marginLeft:'-145px' }}>
          <Divider style={{ marginBottom: '10px' }}></Divider>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <Box><CustomButton sx={{ margin: '3% 0 0 23%', "&:hover": { backgroundColor: "crimson" } }} onClick={function (event) { clearCart(); emptycart() }} startIcon={<DeleteIcon sx={{ marginLeft: '30%' }}></DeleteIcon>}></CustomButton></Box>
            </Grid>
            <Grid item xs={6} md={6}>
              <Box>
                <div style={{ fontWeight: '800', fontSize: '130%', margin: '4% 0 0 58%' }}>
                  <span >TOTAL:</span>${parseFloat(total).toFixed(2)}
                </div>
              </Box>
            </Grid>
          </Grid>
          {/* onClick={function(event){ func1(); func2()}}//two functions in an onclick event */}




        </Box>

      </Box>

    </div>
  )
}

export default Cart
