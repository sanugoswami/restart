import React, { Component, useEffect } from 'react';
import "./meals.css";
import axios from 'axios';

const Meals=()=>{

    const meals=["Breakfast","Lunch","Snacks","Dinner"]
   
    useEffect(()=>{
        
        axios.get("meals.json").then(resposne=>{
            console.log("*****",resposne);
        }).catch(error=>{
            console.log("####",error);
        })
    })

    return(
        <>
        <div className='meals-container'>
            {meals.map(item=>{
               return <p>{item}</p>
            })}
        </div>
        </>
    )
}
export default Meals;
