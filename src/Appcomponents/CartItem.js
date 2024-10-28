import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ProductContext } from '../contexts/ProductContext';
import Container from '@mui/material/Container';
import CheckIcon from '@mui/icons-material/Check';

const CustomButton = styled(Button)({

  fontSize: 10,
  color: 'white',
  border: '1.5px solid black',
  backgroundColor: 'black',
  fontFamily: 'Poppins,sans-serif',
  height: 30

});

const CloseButton = styled(Button)({
  color: 'grey',
});
const PlusButton = styled(Button)({
  color: 'grey',
});
const MinusButton = styled(Button)({
  color: 'grey',
});

const CartItem = ({ item }) => {

  // onClick={function(event){addToCart(product,product.id);handleClick();addtocartproductdetails()}}
  const { removeFromCart, increaseAmount, decreaseAmount, itemAmount, products } = useContext(CartContext);
  console.log("cart item", products);

  const { id, title, image, price, amount, count } = item;

  let productindex = products.findIndex(function (item) {
    return item.id === id;
  });


  const deleteitemfromcart = () => {

    let productindex = products.findIndex(function (item) {
      return item.id == id;
    });
    products[productindex].count = 10;
    // setProducts(products);
  }
  return (
    <div>
      {/* <Box sx={{ height: '30vh', width: '35vw', border: '0px solid yellow' }}>
        <Divider style={{ marginBottom: '3%' }} />
        <Grid container>

          <Grid item xs={6} md={4}>
            <Box sx={{ width: '70%', height: '100%', border: '0px solid green' }}>
              <Link to={`/product/${id}`}>
                <img style={{ height: '70%', width: '70%', margin: '25% 0 0 35%' }} src={image} />
              </Link>
            </Box>
          </Grid>

          <Grid item xs={6} md={8}>
            <Box sx={{ border: '0px solid blue', marginTop: '5%' }}>


              <Grid container spacing={2}>
                <Grid item xs={6} md={9.5}>
                  <Box>
                    <div><Link to={`/product/${id}`} style={{ textDecoration: 'none', fontSize: '85%', color: 'black', fontWeight: '700' }}>{title}</Link></div>
                  </Box>
                </Grid>
                <Grid item xs={6} md={2.5}>
                  <Box>
                    <CloseButton onClick={function (event) { removeFromCart(id); deleteitemfromcart() }} endIcon={<CloseIcon />}></CloseButton>
                  </Box>
                </Grid>
              </Grid>




              <Grid container spacing={2}>
                <Grid item xs={6} md={4.5}>
                  <Box sx={{ border: '1px solid grey' }}>
                    <Box sx={{ width: '100%', height: '100%', border: '1px solid grey' }}>
                      <Grid container spacing={0}>
                        <Grid item xs={6} md={4}>
                          <Box><RemoveIcon style={{ color: 'grey' }} onClick={() => decreaseAmount(id)}>-</RemoveIcon></Box>
                        </Grid>
                        <Grid item xs={6} md={4}>
                          <Box sx={{ margin: '0 0 0 30%' }}>{amount}</Box>
                        </Grid>
                        <Grid item xs={6} md={4}>
                          <Box><AddIcon style={{ color: 'grey' }} onClick={() => increaseAmount(id)}>+</AddIcon></Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6} md={3.75}>
                  <Box sx={{ fontSize: '70%', fontWeight: '600', color: 'gray' }}> Price:${price} </Box>
                </Grid>
                <Grid item xs={6} md={3.75}>
                  <Box sx={{ fontSize: '70%', fontWeight: '600' }}>Total:{`$ ${parseFloat(price * amount).toFixed(2)}`}</Box>
                </Grid>
                <div>Stock left:{products[productindex].count} pieces</div>
              </Grid>






            </Box>
          </Grid>
        </Grid>




      </Box>
      <Divider /> */}










      {/* <Box sx={{ height: '40vh', width: '55vw', border: '1px solid yellow' ,marginBottom:'5%'}}> */}

      <Box sx={{ height: '230px', width: '740px', border: '0px solid yellow', margin: '0 0 0px -130px' }}>
        <Divider />
        <Grid container>
          <Grid item xs={6} md={3.5} style={{ border: '0px solid red' }}>
            <Container style={{ border: '0px solid green' }}>
              <Box sx={{ width: '100%', height: '210px', margin: '35px 0 0 20px' }}>
                <Link to={`/product/${id}`}>
                  <img style={{ height: '70%', width: '70%', margin: '0% 0 0 0%' }} src={image} />
                </Link>
              </Box>
            </Container>
          </Grid>

          <Grid item xs={6} md={6.5} style={{ border: '0px solid pink' }}>

            <Typography sx={{ fontFamily: 'Poppins,sans-serif', fontSize: '17px', fontWeight: 550, marginTop: '40px' }} gutterBottom>{title}</Typography>
            <Typography sx={{ fontFamily: 'Poppins,sans-serif', fontSize: '12px', fontWeight: 800, color: 'green' }} gutterBottom>In Stock</Typography>
            <Typography sx={{ fontFamily: 'Poppins,sans-serif', fontSize: '12px', fontWeight: 400 }} gutterBottom>Gift options not available</Typography>


            <Grid container spacing={0} style={{ marginTop: '15px' }}>
              <Grid item xs={6} md={1} style={{ borderLeft: '1px solid grey', borderTop: '1px solid grey', borderBottom: '1px solid grey' }}>
                <Box><RemoveIcon style={{ color: 'grey', marginTop: '5px' }} onClick={() => decreaseAmount(id)}>-</RemoveIcon></Box>
              </Grid>
              <Grid item xs={6} md={1} style={{ borderTop: '1px solid grey', borderBottom: '1px solid grey' }}>
                <Box sx={{ textAlign: "center", marginTop: '5px' }}>{amount}</Box>
              </Grid>
              <Grid item xs={6} md={1} style={{ borderRight: '1px solid grey', borderTop: '1px solid grey', borderBottom: '1px solid grey' }}>
                <Box ><AddIcon style={{ color: 'grey', marginTop: '5px' }} onClick={() => increaseAmount(id)}>+</AddIcon></Box>
              </Grid>
              <Box>
                <CloseButton onClick={function (event) { removeFromCart(id); deleteitemfromcart() }} endIcon={<CloseIcon />}></CloseButton>
              </Box>
            </Grid>







          </Grid>

          <Grid item xs={6} md={2} style={{ border: '0px solid blue' }}>
            <div style={{ fontWeight: '900', fontSize: '20px', margin: '40px 0 0 20px' }}>{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
          </Grid>
        </Grid>
      </Box>
      <Divider />
    </div>
  )
}

export default CartItem
