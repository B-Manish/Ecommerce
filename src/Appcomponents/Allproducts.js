import React, { useContext, useState, useEffect, useRef } from 'react'
import { ProductContext } from '../contexts/ProductContext';
import { CartContext } from '../contexts/CartContext';
import Product from '../Appcomponents/Product';
import Hero from '../Appcomponents/Hero';
import Footer from '../Appcomponents/Footer';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';



const Allproducts = () => {


    const [checked, setChecked] = React.useState(false);
    const [onechecked, setOneChecked] = React.useState(false);
    const [twochecked, setTwoChecked] = React.useState(false);
    const [threechecked, setThreeChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);

        setOneChecked(false);
        setTwoChecked(false);
        setThreeChecked(false);

        setCh(false);
        setOneCh(false);
        setTwoCh(false);
        setThreeCh(false);

        if (checked == false) {
            allproducts = products.filter(item => {
                return item.price > 0 && item.price < 10
            })
            setAllproducts(allproducts);
        }
        else {
            setAllproducts(products);
        }
    };
    const handleoneChange = (event) => {
        setOneChecked(event.target.checked);

        setChecked(false);
        setTwoChecked(false);
        setThreeChecked(false);

        setCh(false);
        setOneCh(false);
        setTwoCh(false);
        setThreeCh(false);

        if (onechecked == false) {
            allproducts = products.filter(item => {
                return item.price >= 10 && item.price < 100
            })
            setAllproducts(allproducts);
        }
        else {
            setAllproducts(products);
        }
    };
    const handletwoChange = (event) => {
        setTwoChecked(event.target.checked);

        setOneChecked(false);
        setChecked(false);
        setThreeChecked(false);

        setCh(false);
        setOneCh(false);
        setTwoCh(false);
        setThreeCh(false);


        if (twochecked == false) {
            allproducts = products.filter(item => {
                return item.price >= 100 && item.price < 1000
            })
            setAllproducts(allproducts);
        }
        else {
            setAllproducts(products);
        }
    };
    const handlethreeChange = (event) => {
        setThreeChecked(event.target.checked);

        setOneChecked(false);
        setTwoChecked(false);
        setChecked(false);

        setCh(false);
        setOneCh(false);
        setTwoCh(false);
        setThreeCh(false);


        if (threechecked == false) {
            allproducts = products.filter(item => {
                return item.price > 1000
            })
            setAllproducts(allproducts);
        }
        else {
            setAllproducts(products);
        }
    };


    const { products } = useContext(ProductContext);
    var [allproducts, setAllproducts] = useState(products);


    const [ch, setCh] = React.useState(false);
    const [onech, setOneCh] = React.useState(false);
    const [twoch, setTwoCh] = React.useState(false);
    const [threech, setThreeCh] = React.useState(false);

    const handleCh = (event) => {
        setCh(event.target.checked);

        setOneCh(false);
        setTwoCh(false);
        setThreeCh(false);

        setChecked(false);
        setOneChecked(false);
        setTwoChecked(false);
        setThreeChecked(false);

        if (ch == false) {
            allproducts = products.filter(item => {
                return item.rating.rate >= 4
            })
            setAllproducts(allproducts);
        }
        else {
            setAllproducts(products);
        }
    };
    const handleoneCh = (event) => {
        setOneCh(event.target.checked);

        setCh(false);
        setTwoCh(false);
        setThreeCh(false);

        setChecked(false);
        setOneChecked(false);
        setTwoChecked(false);
        setThreeChecked(false);

        if (onech == false) {
            allproducts = products.filter(item => {
                return item.rating.rate >= 3
            })
            setAllproducts(allproducts);
        }
        else {
            setAllproducts(products);
        }
    };
    const handletwoCh = (event) => {
        setTwoCh(event.target.checked);

        setOneCh(false);
        setCh(false);
        setThreeCh(false);

        setChecked(false);
        setOneChecked(false);
        setTwoChecked(false);
        setThreeChecked(false);


        if (twoch == false) {
            allproducts = products.filter(item => {
                return item.rating.rate >= 2
            })
            setAllproducts(allproducts);
        }
        else {
            setAllproducts(products);
        }
    };
    const handlethreeCh = (event) => {
        setThreeCh(event.target.checked);

        setOneCh(false);
        setTwoCh(false);
        setCh(false);

        setChecked(false);
        setOneChecked(false);
        setTwoChecked(false);
        setThreeChecked(false);


        if (threech == false) {
            allproducts = products.filter(item => {
                return item.rating.rate >= 1
            })
            setAllproducts(allproducts);
        }
        else {
            setAllproducts(products);
        }
    };



    return (
        <div>

            <Grid container spacing={2}>
                {/* <p>Height:{height}</p> */}

                <Grid item xs={6} md={2.2} >
                    <Box sx={{ border: '0px solid red', margin: '30px 0 0 30px' }} >
                        <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: '18px' }} >Price</div>

                        <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: '13px', marginBottom: '-10px' }} >
                            <Checkbox checked={checked} onChange={handleChange} size="small" />Below $10
                        </div>
                        <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: '13px', marginBottom: '-10px' }} >
                            <Checkbox checked={onechecked} onChange={handleoneChange} size="small" />$10 - $100
                        </div>
                        <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: '13px', marginBottom: '-10px' }} >
                            <Checkbox checked={twochecked} onChange={handletwoChange} size="small" />$100 - $1000
                        </div>
                        {/* <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: '13px', marginBottom: '-10px' }} >
                            <Checkbox checked={threechecked} onChange={handlethreeChange} size="small" />Above $1000
                        </div> */}

                    </Box>


                    <Box sx={{ border: '0px solid red', margin: '30px 0 0 30px' }} >
                        <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: '18px' }} >Avg. Rating</div>

                        <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: '13px', cursor: 'pointer', marginBottom: '-10px' }} >
                            <Checkbox checked={ch} onChange={handleCh} size="small" /><Rating name="read-only" value={4} readOnly size="small" />& Up
                        </div>
                        <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: '13px', cursor: 'pointer', marginBottom: '-10px' }} >
                            <Checkbox checked={onech} onChange={handleoneCh} size="small" /><Rating name="read-only" value={3} readOnly size="small" />& Up
                        </div>
                        <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: '13px', cursor: 'pointer', marginBottom: '-10px' }}>
                            <Checkbox checked={twoch} onChange={handletwoCh} size="small" /><Rating name="read-only" value={2} readOnly size="small" />& Up
                        </div>
                        <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: '13px', cursor: 'pointer', marginBottom: '-10px' }}>
                            <Checkbox checked={threech} onChange={handlethreeCh} size="small" /><Rating name="read-only" value={1} readOnly size="small" />& Up
                        </div>
                    </Box>
                </Grid>

                <Grid item xs={6} md={9} >
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {Array.from(allproducts).map(product => (
                            <Grid item xs={2} sm={4} md={3} key={product.id}>
                                <Product product={product} key={product.id} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

            </Grid>



        </div>

    )

}

export default Allproducts

