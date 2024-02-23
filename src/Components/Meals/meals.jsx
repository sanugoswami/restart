import React, { Component, useEffect, useState } from 'react';
import "./meals.css";
import axios from 'axios';

const Meals=({mealHandler})=>{

    const [meals,setMeals]=useState([])
   
    useEffect(()=>{
        axios.get("meals.json").then(resposne=>{
            setMeals(resposne.data.data)
        }).catch(error=>{
            console.log("####",error);
        })
    })

    return(
        <>
        <div className='meals-container'>
            <h3>Meals</h3>
            {meals.map((mealItem,index)=>{
               return <p className="meals-item" key={index} onClick={()=>mealHandler(mealItem)}>{mealItem}</p>
            })}
        </div>
        </>
    )
}
export default Meals;
