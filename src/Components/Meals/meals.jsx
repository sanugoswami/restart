import React, { Component, useEffect, useState } from 'react';
import "./meals.css";
import axios from 'axios';

const Meals=()=>{

    const [meals,setMeals]=useState([])
   
    useEffect(()=>{
        axios.get("meals.json").then(resposne=>{
            setMeals(resposne.data.data)
        }).catch(error=>{
            console.log("####",error);
        })
    })

    const clickHandler=(item)=>{

    }

    return(
        <>
        <div className='meals-container'>
            <h3>Meals</h3>
            {meals.map(item=>{
               return <p onClick={clickHandler(item)}>{item}</p>
            })}
        </div>
        </>
    )
}
export default Meals;
