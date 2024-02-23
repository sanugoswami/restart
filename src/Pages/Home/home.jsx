import React, { Component, useEffect, useState } from 'react';
import Header from '../../Components/Header/header';
import Meals from '../../Components/Meals/meals';
import MenuItems from '../../Components/Menuitems/menuitems';
import "./home.css";

const Home=()=>{
    const [mealItem,setMealItem] = useState("");
    const mealHandler=(data)=>{
        setMealItem(data);
    }

    return (
        <>
        <div className='home-container'>
            <div>
                <Header/>
            </div>
        
            <div className='main-container'>
                <Meals mealHandler={mealHandler}/>
                <MenuItems mealItem={mealItem}/>
            </div>
          
        </div>
        
        </>
    )
}
export default Home;