import { height } from '@mui/system'
import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import WomanImage from '../Appcomponents/wh.png';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { Routes, Route, useNavigate } from 'react-router-dom';



const Hero = () => {
  const navigate = useNavigate();

  const gotowomproducts = () => {
    navigate(`/women`);
  }

  return (
    <section style={{ height: '92vh', width: '98.7239vw', backgroundColor: 'mistyrose', marginBottom: '5%' }} >
      <Grid container spacing={2}>
        <Grid item xs={8} md={6}>
          <Box sx={{ margin: '20% 0 0 20%' }}>
            <Typography sx={{ fontFamily: 'Poppins,sans-serif' }} variant="h5" gutterBottom>New Trend</Typography>
            <Typography sx={{ fontFamily: 'Poppins,sans-serif' }} variant="h2" gutterBottom>AUTUMN SALE</Typography>
            <div style={{ fontFamily: 'Poppins,sans-serif', textDecoration: 'underline', cursor: 'pointer' }} onClick={gotowomproducts}>Discover  More</div>
          </Box>
        </Grid>
        <Grid item xs={4} md={6}>
          <Box sx={{ height: '90vh' }}>
            <div><img src={WomanImage} style={{ width: '30%', margin: '6% 0 0 25%' }} /></div>
          </Box>
        </Grid>

      </Grid>
    </section>
  )

}

export default Hero
