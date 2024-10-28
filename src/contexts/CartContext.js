import React, { createContext, useState, useEffect, useContext } from 'react'
import { ProductContext } from './ProductContext'

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [itemAmount, setItemAmount] = useState(0);//no of items in the cart
    const [total, setTotal] = useState(0);//cart total

    const { products, setProducts } = useContext(ProductContext);
    //    const [updatedproducts,setUpdatedproducts]=useState(products);


    useEffect(() => {
        const total = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.price * currentItem.amount
        }, 0);
        setTotal(total);
    });



    //update item amount
    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.amount
            }, 0);
            setItemAmount(amount);
        }
    }, [cart])


    //mine
    useEffect(() => {
        setProducts(products);
    }, [products]);


    //add to cart
    const addToCart = (product, id) => {

        const newItem = { ...product, amount: 1 }//adds amount parameter to the product object

        const cartItem = cart.find((item) => {//checks if item is already in the cart
            return item.id === id;
        });
        if (cartItem) {//if item already exists in the cart
            const newCart = [...cart].map(item => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount + 1 }
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } else {
            setCart([...cart, newItem]);
        }
    };

    //delete from cart
    const removeFromCart = (id) => {
        const newCart = cart.filter((item) => {
            return item.id !== id;
        });
        setCart(newCart);
    }

    //clear cart
    const clearCart = () => {
        setCart([]);
    };


    //increase amount
    const increaseAmount = (id) => {
        const cartItem = cart.find((item) => item.id === id);
        addToCart(cartItem, id);


        const productid = products.find((item) => item.id === id).id;
        let productindex = products.findIndex(function (item) {
            return item.id === productid;
        });
        const currentcount = products[productindex].count;

        products[productindex] = { ...products[productindex], count: currentcount - 1 }
        console.log("add", products);
        setProducts(products);

        // if stock is 0,disable add button




    }

    //decrease amount
    const decreaseAmount = (id) => {
        const cartItem = cart.find((item) => {
            return item.id === id;
        });

        if (cartItem) {
            const newCart = cart.map(item => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount - 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        }
        if (cartItem.amount < 2) {
            removeFromCart(id);
        }



        const productid = products.find((item) => item.id === id).id;
        let productindex = products.findIndex(function (item) {
            return item.id === productid;
        });
        const currentcount = products[productindex].count;
        products[productindex] = { ...products[productindex], count: currentcount + 1 }
        console.log("remove", products);
        setProducts(products);

    };


    return <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount, total, products }}>{children}</CartContext.Provider>
}

export default CartProvider
