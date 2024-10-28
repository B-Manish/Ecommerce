import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { green } from '@mui/material/colors';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { ProductContext } from '../contexts/ProductContext';



const AddtocartButton = styled(Button)({

  fontSize: 14,
  color: 'white',
  border: '1.5px solid green',
  backgroundColor: 'green',
  // fontFamily: 'Shantell Sans, cursive'
  height: '45px',
  width: '45px',
  borderRadius: 0

});


const CustomButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  color: green,
  border: '1.5px solid',
});

const Product = ({ product }) => {

  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);
  const { id, image, category, title, price, amount, count } = product;
  const { products, setProducts } = useContext(ProductContext);


  const navto = () => {
    navigate(`/product/${id}`)
  }

  //mine
  useEffect(() => {
    setProducts(products);
  }, [products]);

  const pconsole = () => {
    let productindex = products.findIndex(function (item) {
      return item.id == id;
    });
    products[productindex].count = products[productindex].count - 1;
    setProducts(products);
    console.log(products)
  }

  // const [style, setStyle] = useState({ display: 'none' });
  const [style, setStyle] = useState("none");



  return (
    <div>
      <Box sx={{ height: '320px', width: '200px' }}>
        <Grid container spacing={2}>
          <Grid item md={12} sx={{ height: '220px' }}>
            <Box sx={{ height: '100%', border: '1px solid silver', width: '100%' }} onMouseEnter={e => {
              setStyle("block");
            }}
              onMouseLeave={e => {
                setStyle("none")
              }}>
              <Box sx={{ height: '72%', width: '57%', margin: '15% 0 0 20%', border: '0px solid yellow' }}>
                <Link to={`/product/${id}`}><img src={product.image} style={{ height: '100%', width: '100%' }} alt='' /></Link>
              </Box>
              {/* <AddtocartButton startIcon={<AddShoppingCartIcon />} style={{ display: style,width:'10px' }} onClick={function (event) { addToCart(product, product.id); pconsole() }}></AddtocartButton> */}
              <div style={{ display: style, backgroundColor: 'slategray' ,width:'32px',height:'32px'}} onClick={function (event) { addToCart(product, product.id); pconsole() }}>
                <AddShoppingCartIcon style={{ color: 'white', backgroundColor: 'slategray',margin:'4px 0 0 4px',position:'absolute'}}></AddShoppingCartIcon>
              </div>

            </Box>
          </Grid>
          <Grid item md={12} sx={{ height: '110px' }}>
            <Box sx={{ height: '100%', width: '100%', fontSize: 12 }}>
              <div style={{ color: 'grey', fontWeight: 'bold' }}>{product.category.replace(/([\W_]|^)(\w)(?<!\w'\w)/g, (_, x, y) => `${x}${y.toUpperCase()}`)}</div>
              <div style={{ fontWeight: 'bold' }}>{product.title}</div>
              <div style={{ fontWeight: 'bold', color: 'lightsalmon' }} >${product.price}</div>
            </Box>
          </Grid>
        </Grid>
      </Box>



    </div>
  )
}

export default Product
