import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import './menuitems.css';

const MenuItems=({mealItem,cartHandler})=>{

    const [foodItems,setFoodItems]=useState({})
    const [description,setDescription]=useState("")
    //const test=[]

    const descriptionHandler=(data)=>{
        data?setDescription(data):setDescription("Description not found");
    }

    const handleCart=(data)=>{
        cartHandler(data);
    }

    useEffect(()=>{
        axios({
            method:"get",
            url:"items.json"
        }).then(response=>{
            setFoodItems(response.data.menuItemData)
        }).catch(error => {
            console.log(error);
        })
    }, []); 

    useEffect(()=>{
        setDescription("")
    },[mealItem])

    return(
        <>
        <div className='menu-item-container'>
          <h3>MenuItem - {mealItem}</h3>
          <hr></hr>
          {
            mealItem ? 
            foodItems[mealItem].length > 0 ? foodItems[mealItem].map((data,index)=>{
                return (
                    <div key="index" className='menu-item-details-container'>
                        <div class="image-container" >
                            <img alt="no image available" height="120" width="120" src={data.photo}/>
                        </div>
                        <div className="text-container">
                            <div>{data.item}</div>
                            <div 
                                className="text-click" 
                                onClick={()=>descriptionHandler(data.description)}
                                >Description
                            </div>
                              <div className="price-details">{data.price}</div>
                              <div className="button-container">
                                <button className="button-details"
                                onClick={()=>handleCart(data.item)}>Add to cart</button>
                              </div>
                        </div>
                    </div>)        
            }):<h1>We are Sorry! We are not serving 
                <span className='unavailable-item'>{mealItem}
                </span> now
                </h1>
            :<h1>Please Select a meal</h1>
          }
          {
            description && (
                <div>
                    <hr></hr>
                    <h3>Recipe Descriptions</h3>
                    <div>
                      {description}
                    </div>
                 </div>
            )
          }
        </div>
        </>
    )
}
export default MenuItems;
   