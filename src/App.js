import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Appcomponents/Home';
import Product from './Appcomponents/Product';
import Cart from './Appcomponents/Cart';
import Productdetails from './Appcomponents/Productdetails';
import Header from './Appcomponents/Header';
import Sidebar from './Appcomponents/Sidebar';
import Footer from './Appcomponents/Footer';
import Searchbar from './Appcomponents/Searchbar';
import Disable from './Appcomponents/Disable';
import Allproducts from './Appcomponents/Allproducts';
import Signin from './Appcomponents/Signin';
import Ratinggg from './Appcomponents/Ratinggg';
import Democarousel from './Appcomponents/Democarousel';
import Check from './Appcomponents/Check';
import Men from './Appcomponents/Men';
import Women from './Appcomponents/Women';
import Jewelery from './Appcomponents/Jewelery';
import Electronics from './Appcomponents/Electronics';
import Dial from './Appcomponents/Dial';



import { SigninContext } from './contexts/SigninContext';



function App() {
  const { isloggedin, cartisempty } = useContext(SigninContext);
  console.log("cartisempty", cartisempty);
  console.log("isloggedin", isloggedin);
  return (
    <div className="App">



      <Router>
        {(isloggedin) ? <Header /> : null}
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/home' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/sbar' element={<Searchbar />} />
          <Route path='/disable' element={<Disable />} />
          <Route path='/products' element={<Allproducts />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/rating' element={<Ratinggg />} />
          <Route path='/car' element={<Democarousel />} />
          <Route path='/check' element={<Check />} />
          <Route path='/men' element={<Men/>} />
          <Route path='/women' element={<Women/>} />
          <Route path='/jewelery' element={<Jewelery/>} />
          <Route path='/electronics' element={<Electronics/>} />
          <Route path='/dial' element={<Dial/>} />



          <Route path='/product/:id' element={<Productdetails />} />
        </Routes>
        {(isloggedin) ? <Footer /> : null}




        {/* (cartisempty) ? <>Cart is empty</> : <Cart /> */}
      </Router>

    </div>
  );
}

export default App;
