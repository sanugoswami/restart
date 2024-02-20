import React, { Component } from 'react';
import Header from '../../Components/Header/header';
import Meals from '../../Components/Meals/meals';
import MenuItems from '../../Components/Menuitems/menuitems';
import "./home.css";

const Home=()=>{
    return (
        <>
        <div className='home-container'>
            <div>
                <Header/>
            </div>
        
            <div className='main-container'>
                <Meals/>
                <MenuItems/>
            </div>
          
        </div>
        
        </>
    )
}
export default Home;