import React, { useContext, useState, useEffect, createContext } from 'react'
import axios from 'axios';

export const SigninContext = createContext();

const SigninProvider = ({ children }) => {

    const [logindetails, setLogindetails] = useState([]);
    const [isloggedin, setIsloggedin] = useState(false);
    const [avatar, setAvatar] = useState("");
    const [cartisempty, setCartisempty] = useState(false);

    

    const fetchLogindetails = async () => {
        const response = await fetch('https://fakestoreapi.com/users');
        const data = await response.json();
        
    
        //console.log(x.substring(0, 1));
        const modlogindetails=[];
        for (var i = 0; i < data.length; i++) {
            modlogindetails[i] = {
            "email": data[i].email,
            "password": data[i].password,
            "username": data[i].username,
            "fname": data[i].name.firstname,
            "lname": data[i].name.lastname,
            "avatar": (data[i].name.firstname.substring(0, 1) + data[i].name.lastname.substring(0, 1)).toUpperCase()
          }
        }
        setLogindetails(modlogindetails);
    
      };
    
      useEffect(() => {
        fetchLogindetails();
      }, []);
     
    return <SigninContext.Provider value={{logindetails,setAvatar,avatar,isloggedin,setIsloggedin,cartisempty, setCartisempty}}>{children}</SigninContext.Provider>
};

export default SigninProvider

