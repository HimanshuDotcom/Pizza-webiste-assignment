import React from 'react';
import _styles from "./styles.module.css";
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

function Item({id,orders,items,removeOrder}) {

    const count = orders[id];
    const item = items[id-1];
    return(
        <div className={_styles.order}>
                            {/* <img src={item.img_url} /> */}
            <p className={_styles.count}><b>{count}</b></p>
            <div className={_styles.desc}>
                {/* <img src={item.img_url} /> */}
                <p style={{'marginRight': '.5rem'}}>{item.name}</p>
                <DeleteIcon onClick = {() => removeOrder(id)} style = {{'fontSize' : '2rem', 'cursor' : 'pointer'}} />
            </div>
            <p className={_styles.price}>&#8377; {count * item.price}</p>
        </div>
    )
}

export default function Order({items,orders, removeOrder}) {
    const orderIds = Object.keys(orders);
    console.log(orders,items)
    const total = orderIds.reduce((prevCount, key) => {
            const count = orders[key];
            const item = items[key-1];
            return prevCount + (count*(item['price']));
        }, 0)

    console.log(total)
  return (
      <>
        <h1 className={_styles.primary}>Your Pizza's</h1>
        <div className={_styles.orders}>
            {
                Object.keys(orders).map(el => <Item orders = {orders} items = {items}  id = {el} removeOrder = {removeOrder} />)
            }
        </div>
        <div className={_styles.total}><b style={{'marginRight' : '1.5rem'}}>Total: </b> &#8377;{total.toLocaleString()} </div>
    </>
  )
}
