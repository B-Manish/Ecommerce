

import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import StarIcon from '@mui/icons-material/Star';

import ReactImageMagnify from 'react-image-magnify';
import zIndex from '@mui/material/styles/zIndex';


const labels = {
  0.5: 'Useless',
  1: 'Useless',
  1.5: 'Poor',
  2: 'Poor',
  2.5: 'Satisfactory',
  3: 'Satisfactory',
  3.5: 'Good',
  4: 'Good',
  4.5: 'Excellent',
  5: 'Excellent',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomButton = styled(Button)({

  fontSize: 14,
  color: 'white',
  border: '1.5px solid black',
  borderRadius: 4,
  backgroundColor: 'black',
  fontFamily: 'Poppins,sans-serif',
  height: 50,
  zIndex: 0

});

const Productdetails = () => {

  const { id } = useParams();//getting id from url
  const [spacing, setSpacing] = React.useState(2);
  const { products, setProducts } = useContext(ProductContext);
  const { addToCart, increaseAmount } = useContext(CartContext);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const [dp, setDp] = useState("none");

  const [ggopen, setGGopen] = React.useState(false);

  const handleClickOpen = () => {
    setGGopen(true);
  };



  //mine
  useEffect(() => {
    setProducts(products);
  }, [products]);


  const product = products.find((item) => {
    return item.id === parseInt(id);
  });


  const handleClick = () => {
    setOpen(true);
  };
  const reviewclick = () => {
    console.log("review");
  };
  const submitrating = () => {
    const oldcount = rating.count;
    const oldrating = rating.rate;
    rating.count = oldcount + 1;
    rating.rate = ((oldrating * oldcount) + value) / rating.count;
    setProducts(products);
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const addtocartproductdetails = () => {

    let productindex = products.findIndex(function (item) {
      return item.id == id;
    });
    products[productindex].count = products[productindex].count - 1;
    setProducts(products);
  }

  if (!product) {//if prouct is not found

    return <Grid sx={{ flexGrow: 1 }} container spacing={2}>

      <Grid item xs={6} md={6}>
        <Box sx={{ height: '85vh', width: '95%' }}>
          <Skeleton variant="circular" width={300} height={300} sx={{ margin: '8% 0 0 40%' }} />
        </Box>
      </Grid>

      <Grid item xs={6} md={6}>
        <Box sx={{ height: '30vh', width: '95%', marginTop: '8vh ' }}>
          <Stack spacing={0}>
            <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
            <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
            <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
            <Skeleton variant="text" sx={{ fontSize: '6rem' }} />
            <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
          </Stack>
        </Box>
      </Grid>

    </Grid>
  }
  const { title, price, description, image, category, rating } = product;

  return (
    <div>
      {/* <p>rating {rating.rate}</p>
      <p>count {rating.count}</p>
      <p>product id {id}</p> */}
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>

        <Grid item xs={6} md={6}>
          <Box sx={{ height: '85vh', width: '95%' }}>

            <Box sx={{ height: '80vh', width: '65%', marginLeft: '26%', marginTop: '2%', border: '0px dotted' }}>
              {/* <img src={image} style={{ height: '100%', width: '100%' }} alt='' /> */}
              <div style={{ height: '100%', width: '100%' ,zIndex:99999,position:'relative'}}>
                <ReactImageMagnify {...{
                  smallImage: {
                    alt: 'small image',
                    isFluidWidth: true,
                    src: image,
                    height: '80vh',
                    width: '60vw'
                  },
                  largeImage: {
                    src: image,
                    width: 1200,
                    height: 1800

                  }
                }} />
              </div>

            </Box>
          </Box>
        </Grid>

        <Grid item xs={6} md={6}>
          <Box sx={{ height: '30vh', width: '95%', marginTop: '13vh' }}>
            <Typography sx={{ fontFamily: 'Poppins,sans-serif' }} variant="h5" gutterBottom>{product.title}</Typography>
            <Typography sx={{ fontFamily: 'Poppins,sans-serif', color: 'orange' }} variant="h6" gutterBottom>${product.price}</Typography>

            <Typography sx={{ fontFamily: 'Poppins,sans-serif' }} variant="body1" gutterBottom>
              <Rating name="half-rating-read" defaultValue={product.rating.rate} precision={0.1} readOnly sx={{ zIndex: -1 }} /> {product.rating.count}&nbsp;ratings
            </Typography>

            <Typography sx={{ fontFamily: 'Poppins,sans-serif' }} variant="body1" gutterBottom>{product.description}</Typography>

            <CustomButton onClick={function (event) { addToCart(product, product.id); handleClick(); addtocartproductdetails() }} sx={{ marginTop: '13px', "&:hover": { backgroundColor: "black" }}} variant="contained" startIcon={<ShoppingBagTwoToneIcon />}>Add to cart</CustomButton>
            <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Successfully added to the cart!
              </Alert>
            </Snackbar>



            {/* <Typography sx={{ fontFamily: 'Poppins,sans-serif', cursor: 'pointer' }} variant="body1" gutterBottom onClick={() => {
              setDp("block");
            }}>ADD A RATING</Typography>

            <Box
              sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
                display: dp
              }}
            >
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
              <Button variant="text" sx={{ color: 'black' }} onClick={submitrating}>Submit</Button>
            </Box> */}


            {/* onClick={function(event){ func1(); func2()}}//two functions in an onclick event */}
          </Box>
        </Grid>

      </Grid>

    </div>
  )
}

export default Productdetails
