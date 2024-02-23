import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import './menuitems.css';

const MenuItems=({mealItem})=>{

    const [foodItems,setFoodItems]=useState({})

    useEffect(()=>{
        axios.get("items.json").then(response=>{
            setFoodItems(response.data.data)
            console.log(response.data.data)
        }).catch(error=>{
            console.log(error)
        })
    },[])

    return(
        <>
        <div>
          <h1>{mealItem}</h1>
          {
            mealItem ? 
            foodItems[mealItem].length > 0 ? foodItems[mealItem].map((data,index)=>{
                return <h2 key={index}>{data} - <span className="text-click">Description</span></h2>
                
            }):<h1>We are Sorry! We are not serving <span className='unavailable-item'>{mealItem}</span> now</h1>
            :<h1>Please Select a meal</h1>
          }
          
        </div>
        </>
    )
}
export default MenuItems;
   