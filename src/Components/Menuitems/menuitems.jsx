import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';

const MenuItems=()=>{

    const [items,setItems]=useState({})

    useEffect(()=>{
        axios.get("items.json").then(response=>{
            setItems(response.data.data)
            console.log(response)
        }).catch(error=>{
            console.log(error)
        })
    },[])
    return(
        <>
        <div>
            <h2>Menu Items</h2>
            {items && items.Breakfast && items.Breakfast.map(item=>{
                return <p>{item}</p>
            })}
        </div>
        </>
    )
}
export default MenuItems;
   