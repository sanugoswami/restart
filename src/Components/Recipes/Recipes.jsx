import React, { Component, useEffect } from 'react';
import "./recipes.css";
import axios from 'axios';

const Recipes=()=>{

    const recipes=["Breakfast & Brunch","Lunch","Appetizers & Snacks","Dinner", "Deserts","Drink and cocktail","Side Dishes","Grilling and Barbeque","Microwave Recipes","Air Fryer Recipes","Baking Recipes"]
   
    useEffect(()=>{

        axios.get("Recipes.json").then(resposne=>{
            console.log("*****",resposne);
        }).catch(error=>{
            console.log("####",error);
        })
    })

    return(
        <>
        <div className='recipes-container'><h2>Recpies</h2>
            {recipes.map(item=>{
               return <p>{item}</p>
            })}
        </div>
        </>
    )
}
export default Recipes;
