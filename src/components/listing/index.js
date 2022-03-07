import React, { useEffect, useState } from 'react'
import _styles from "./styles.module.css"


function Pizza({item,addToOrder}) {
    return(
        <div className={_styles.card}>
            <div className = {_styles.card_img}>
                <img src = {item.img_url} />
                <span className={_styles.name}>{item.name}</span>
            </div>
            <p className={_styles.description}>{item.description}</p>
            <ul className={_styles.features}>
                <li>Stars</li>
                <li>Price</li>
                <li>Topings</li>
                <li>Add</li>
            </ul>
            <button onClick = {() => addToOrder(item)}>Place Order</button>
        </div>
    )
}

export default function Listing({state,dispatch,pizzas,addToOrder}) {
   
    const filterItem = (show,all = false) => {
        const items = JSON.parse(localStorage.getItem('items'));
        let newItems = [];
        if(all) 
            newItems = items;
        else 
            newItems = items.filter((el) => el.isVeg === show)
        dispatch({
            type: 'SUCCESS',
            payload: newItems
        })
    }
  return (
      <>
        {state.loading ? <p>'loading.'</p> :<div>
        <button onClick={() => filterItem(true)}>Veg</button>
        <button onClick={() => filterItem(false)}>Non Veg</button>
        <button onClick={() => filterItem(true,true)}>All</button>
        <div className = {_styles.display}>
            {pizzas.map(el => <Pizza item = {el} addToOrder = {addToOrder} />)}
        </div>
        </div>
        }   
    </>
  )
}
