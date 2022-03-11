import _styles from './styles.module.css';
import Listing from "../listing";
import { useEffect, useReducer, useState } from "react";
import cx from "classnames";
import reducer from "./reducer";
import Loading from '../loading';
import Order from '../orders';

// ------ Button Component ------

function Button({name,active,handleClick}) {
  return (
    <button
      className={cx(_styles.btn, {
        [_styles.active] : active
      })} 
      onClick={handleClick}
    >
      {name}
  </button>
  )
}

// ------- end ----------


function Display() {
  const [state, dispatch] = useReducer(reducer,{
    'items' : [],
    'orders': {},
    'showPizza' : true,
    'showOrders' : false,
    'loading' : true,
    'msg' : null
  })


  const handleOrder = () => {
    dispatch({
      type : 'SHOW_CART'
    })
  }

  const handlePizza = () => {
    dispatch({
      type : 'SHOW_PIZZA'
    })
  }

  const addToOrder = (id) => {
    dispatch({
      type: 'ADD_ORDER',
      payload: id
    })
  }

  const removeOrder = (id) => {
    dispatch({
      type: 'REMOVE_ORDER',
      payload: id
    })
  }

  useEffect(() => {
    fetch(`https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68`)
    .then(res => res.json())
    .then(data => {
      console.log('herrrererr')
        dispatch({
          type: 'SUCCESS',
          payload : data
        })
     })
     .catch(err => {
       dispatch({
         type: 'FAIL',
         payload: "Failed to Fetch Pizaas (404)"
       })
     })

  },[])
 
  return (
    <div className="App">

      <div className= {_styles.tab}>
        <Button name = "Pizzas" active = {state.showPizza} handleClick = {handlePizza} />
        <Button name = "Orders" active = {state.showOrder} handleClick = {handleOrder} />
      </div>

      {state.loading && <Loading msg = "Loading Pizzas" />}

      {state.msg && <div className={_styles.errMsg}>{state.msg}</div>}

      {  (state.showPizza && !state.loading && !state.msg) && 
          <Listing 
            addToOrder = {addToOrder}  
            dispatch = {dispatch} 
            orders = {state.orders} 
            pizzas = {state.items} 
          />
      }

      { state.showOrder && 
        <Order 
          orders = {state.orders} 
          items = {state.items} 
          removeOrder = {removeOrder} 
        />
      }
    </div>
  );
}

export default Display;