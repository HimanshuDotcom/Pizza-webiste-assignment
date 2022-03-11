import React, { useEffect, useState } from 'react'
import _styles from "./styles.module.css";
import Modal from '../modal';
import SortIcon from '@mui/icons-material/Sort';
import Pizza from '../pizza';




export default function Listing({orders,pizzas,addToOrder}) {
   console.log(pizzas)
    const [items,setItems] = useState([]);
    const[modalItem, setModalItem] = useState(null);
    const[addOns, setaddOns] = useState(null); // todo

    useEffect(() => {
        setItems([...pizzas]);
    },[])

    const showModal = (item) => {
        setModalItem({...item});
    }


    const filterItem = (show) => {
        let newItems = [];
        newItems = pizzas.filter((el) => el.isVeg === show)
        setItems([...newItems]);
    }
    const sortItems = (filter) => {
        let newItems = [];
        if(filter === 'rating')
            newItems = items.sort((a,b) => b[filter] - a[filter]);
        else
            newItems =  items.sort((a,b) => a[filter]-b[filter]);
        
        setItems([...newItems]);
    }

  return (
      <>
      {
          modalItem && <Modal item = {modalItem} setaddOns = {setaddOns} setModalItem = {setModalItem}  />
      }
        <div className={_styles.container}>
            <div className = {_styles.filter}>
                <div className={_styles.filter_btns}>
                    <button  onClick={() => filterItem(true)}>Veg</button>
                    <button  onClick={() => filterItem(false)}>Non Veg</button>
                    <button  onClick={() => setItems([...pizzas])}>All</button>
                </div>
                <div className={_styles.filter_btns}>
                    <button onClick={() => sortItems('price')}>Price <SortIcon style={{'fontSize' : '2rem'}} /></button>
                    <button onClick={() => sortItems('rating')}>Rating <SortIcon style={{'fontSize' : '2rem'}} /></button>

                </div>
            </div>
            <div className = {_styles.display}>
                {items.map((el,index) => <Pizza key = {el.id} count = {orders[el.id]} item = {el} addToOrder = {addToOrder}  showModal = {showModal}/>)}
            </div>
        </div>  
    </>
  )
}
