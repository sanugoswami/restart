import React, { Component, useEffect, useState } from 'react';
import Header from '../../Components/Header/header';
import Meals from '../../Components/Meals/meals';
import MenuItems from '../../Components/Menuitems/menuitems';
import "./home.css";
import MyCart from '../../Components/Cart/cart';


const Home=()=>{
    const [mealItem,setMealItem,] = useState("");
    const [cartItem, setCartItem] = useState("")
    const mealHandler=(data)=>{
            setMealItem(data);
    }

    const cartHandler=(data)=>{
        setCartItem(data);
    }
    return (
        <>
        <div className='home-container'>
            <div className='main-container'>
                <Meals mealHandler={mealHandler}></Meals>
                <MenuItems mealItem={mealItem} cartHandler={cartHandler}></MenuItems>
                <MyCart cartItem={cartItem}></MyCart>
                
            </div>
          
        </div>
        
        </>  )
   

    
   
}
        
    
    
export default Home;