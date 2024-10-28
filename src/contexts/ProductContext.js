import React, { useContext, useState, useEffect, createContext } from 'react'
import axios from 'axios';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([]);

    const [axiosproducts, setProduct] = useState([]);//by my axios way
    const [modproducts, setModproducts] = useState([]);
    

    const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);

    };
    // const filteredProducts = products.filter(item => {
    //     return item.category === "men's clothing" || item.category === "women's clothing"
    //   });



    useEffect(() => {
        fetchProducts();



        //     axios.get('https://fakestoreapi.com/products')
        //   .then(res=>{
        //     setProduct(res.data)
        //       console.log(res.data)
        //   }).catch(err=>{
        //     console.log(err);
        //   })

    }, []);
    for (var i = 0; i < products.length; i++) {
        products[i] = { ...products[i], count: 10 }
    }
    return <ProductContext.Provider value={{ products, setProducts, modproducts, setModproducts}}>{children}</ProductContext.Provider>
};

export default ProductProvider

