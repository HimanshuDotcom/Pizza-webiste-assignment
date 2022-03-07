import Navbar from "./components/navbar";
import _styles from './App.module.css';
import Listing from "./components/listing";
import { useEffect, useReducer, useState } from "react";
import cx from "classnames";
import reducer from "./reducer";


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

function App() {
  const [state, dispatch] = useReducer(reducer,{
    'items' : [],
    'orders': [],
    'showPizza' : true,
    'showOrders' : false,
    'loading' : true
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

  const addToOrder = (item) => {
    console.log(item);
  }

  useEffect(() => {
    fetch(`https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        localStorage.setItem('items',JSON.stringify(data))
        dispatch({
          type: 'SUCCESS',
          payload : data
        })
        
    })
  },[])
 
  return (
    <div className="App">
      <Navbar/>

      <div className= {_styles.tab}>
        <Button name = "Pizzas" active = {state.showPizza} handleClick = {handlePizza} />
        <Button name = "Orders" active = {state.showOrder} handleClick = {handleOrder} />
      </div>

      {state.showPizza && <Listing addToOrder = {addToOrder}  state = {state} dispatch = {dispatch} pizzas = {state.items} />}
      {state.showOrder && "ORDER"}
    </div>
  );
}

export default App;
