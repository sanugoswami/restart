import React, { Component, useEffect, useState } from 'react';

import './cart.css';

const MyCart=({cartItem})=>{

    const [cart, setCart]=useState([])
    
    useEffect(()=>{
        //This is used to store previous data as well as current data in array
        if(cart && !cart.includes(cartItem)){
            setCart((prevItem)=> [...prevItem,cartItem])
        }
    },[cartItem])

    return(
        <>
        <div className='MyCart-conatainer'>
            <div className='MyCart-box'></div>
            <h3>My Cart</h3>
            <hr></hr>
            {cart?.map((item,index)=>{
                return <div key={index}>{item}</div>
            })}
        </div>
        </>
    )

    }


   

export default MyCart;