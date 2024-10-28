import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import {SidebarContext} from  '../contexts/SidebarContext';
import {CartContext} from  '../contexts/CartContext';
import CartItem from '../Appcomponents/CartItem';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const CustomButton = styled(Button)({

  fontSize: 14,
  color:'white',
  border: '1.5px solid crimson',
  backgroundColor:'crimson',
  // fontFamily: 'Shantell Sans, cursive'
  height:'45px',
  width: '45px',
  borderRadius: 0
  
});

const Sidebar=() =>{

    const {isOpen,handleClose}=useContext(SidebarContext);
    const {cart,clearCart,total,itemAmount}=useContext(CartContext);

    

  return (
    <div className={`${isOpen? 'right-0':'right-full'}`}>

    <Box  sx={{width:'35vw',height:'90vh',border:'0px solid blue'}}>
    
    <Typography variant="h9"  sx={{fontFamily:'Poppins,sans-serif',fontSize:'80%',fontWeight:'900'}} gutterBottom>
        SHOPPING BAG ({itemAmount})
      </Typography>
      {cart.map((item=>{
        return <CartItem item={item} key={item.id}/>
      }))}
      <Box sx={{width:'100%',height:'10%',border:'0px solid pink'}}>


      <Divider style={{marginBottom:'10px'}}></Divider>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <Box>
          <div style={{fontWeight:'800',fontSize:'90%',margin:'8% 0 0 4%'}}>
          <span >TOTAL:</span>${parseFloat(total).toFixed(2)}
          </div>
          </Box>
        </Grid>
        <Grid item xs={6} md={6}>
          <Box><CustomButton sx={{marginLeft:'50%',"&:hover": {backgroundColor: "crimson", }}} onClick={clearCart} startIcon={<DeleteIcon sx={{marginLeft:'30%'}}></DeleteIcon>}></CustomButton></Box>
        </Grid>
      </Grid>


        
        
        
      </Box>
         
      </Box>

    </div>
  )
}

export default Sidebar
