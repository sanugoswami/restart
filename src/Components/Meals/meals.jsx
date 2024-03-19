import React, { Component, useEffect, useRef, useState } from 'react';
import "./meals.css";
import axios from 'axios';

const Meals=({mealHandler})=>{

    const [meals,setMeals]=useState([])
    useEffect(()=>{
        axios({
            method:"get",
            url:"meals.json"
        }).then(response=>{
            setMeals(response.data.mealsData)
        }).catch(error=>{
            console.log("####",error);
        })
    },[])

    return(
        <>
        <div className='meals-container'>
            <div className="meals-box">
            <h3 >Meals</h3>
            <hr></hr>
            {meals.map((mealItem,index)=>{
               return <p className="meals-item" key={index} onClick={()=>mealHandler(mealItem)}>{mealItem}</p>
            })}
        </div>
        </div>
        </>
    )
}
export default Meals;
