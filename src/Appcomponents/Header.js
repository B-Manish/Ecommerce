import React, { useContext, useState } from 'react'
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';
import { SigninContext } from '../contexts/SigninContext';

import { Link } from 'react-router-dom';
import InputBase from '@mui/material/InputBase';


import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';

import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Snackbar from '@mui/material/Snackbar';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import AdbIcon from '@mui/icons-material/Adb';
import Box from '@mui/material/Box';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Row } from 'simple-flexbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';



const pages = ['Products', 'Men', 'Women', 'Electronics', 'Jewelry'];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(-110),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [
      theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    fontFamily: 'Poppins,sans-serif'
  },
}));






const Header = () => {


  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const { products,category, setCategory  } = useContext(ProductContext);
  const { avatar } = useContext(SigninContext);
  const [open, setOpen] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();
  const [st, setSt] = useState("none");

  const classes = useStyles();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const gotoproduct = (id) => {
    navigate(`/product/${id}`)
  };
  const gotoproducts = () => {
    navigate(`/products`)
  };

  const gotohome = () => {
    navigate(`/home`)
  };

  function menproducts (){
     navigate(`/men`);
  
  };
  function womenproducts (){
    navigate(`/women`);
 
 };
 function jeweleryproducts (){
  navigate(`/jewelery`);

};
function electronicsproducts (){
  navigate(`/electronics`);

};







  const [query, setQuery] = useState("");

  const modifiedproducts = [];
  for (var i = 0; i < products.length; i++) {
    modifiedproducts[i] = { ...products[i], label: products[i].title }
  }

  return (
    <div>
      <Toolbar>

        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} onClick={gotohome} />
        <Row vertical="center" horizontal="center">
          <div style={{ fontWeight: 700, cursor: 'pointer' }} onClick={gotohome}> Ecomm</div>
          <div style={{ margin: '0 0 0 40px', cursor: 'pointer' }} onClick={gotoproducts}> Products</div>
          <div style={{ margin: '0 0 0 40px', cursor: 'pointer' }} onClick={menproducts}> Men</div>
          <div style={{ margin: '0 0 0 40px', cursor: 'pointer' }} onClick={womenproducts}> Women</div>
          <div style={{ margin: '0 0 0 40px', cursor: 'pointer' }} onClick={jeweleryproducts}> Jewelery</div>
          <div style={{ margin: '0 0 0 40px', cursor: 'pointer' }} onClick={electronicsproducts}> Electronics</div>
        </Row>
        <Row style={{ marginLeft: '515px' }}>
          <Link to={`/cart`}>
            <Badge sx={{ color: 'black' }} badgeContent={itemAmount} color="primary" onClick={handleClick}>
              <div onClick={() => setIsOpen(!isOpen)}>
                <ShoppingCartIcon />
              </div>
            </Badge>
          </Link>
          <Avatar sx={{ bgcolor: deepPurple[400], fontSize: 15, margin: '-12px 0 0 20px' }}>{avatar}</Avatar>
        </Row>

      </Toolbar>

      {/* <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)} onclick={inputclick}
        onMouseEnter={e => {
          setSt("block");
        }} />
      {
        products.filter(post => {
          if (query === '') {
            return post;
          } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
            return post;
          }
        }).map((post, index) => (
          // <div className="box" key={index} style={{ display: st }}>
          //   <div onClick={gotoproducts} style={{cursor: 'pointer' }}>{post.title}</div>
          // </div>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', display: st }} component="nav" aria-label="mailbox folders">
            <ListItem button onClick={gotoproduct(post.id)} onMouseLeave={e => {
              setSt("none")
            }}>
              <ListItemText style={{ fontFamily: 'Poppins,sans-serif' }}> {post.title}</ListItemText>
            </ListItem>
            <Divider />
          </List>
        ))
      } */}

    </div>
  )
}

export default Header
