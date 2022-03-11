import { useState } from 'react';
import _styles from './styles.module.css';
import { Button } from '@mui/material';

function Checkbox({items}) {
    const [checkedItems, setCheckedItems] = useState(
        new Array(items.length).fill(false)
    )
    const handleOnChange = (index) => {
        const updatedItems = [...checkedItems];
        updatedItems[index] = !updatedItems[index];
        setCheckedItems(updatedItems);
    }
    return(
        <>
            <ul className={_styles.checkbox_container}>
                {
                items.map(({name,size}, index) => (
                    <li key = {`item-${name || size}`}>
                        <div className={_styles.checkbox}>
                            <input
                                type="checkbox"
                                id={`custom-checkbox-${index}`}
                                // name="size"
                                value={name}
                                checked={checkedItems[index]}
                                onChange={() => handleOnChange(index)}
                            />
                            <label htmlFor={`custom-checkbox-${index}`}>{name || size}</label>
                        </div>
                    </li>
                ))
                }
            </ul>
        </>
    )
}

function Radio({items}) {

    const [checkedItem, setCheckedItem] = useState(-1)
   
    return (

        <>
            <ul className={_styles.checkbox_container}>
                {
                items.map(({size,name}, index) => (
                    <li key = {`item-${name || size}`}>
                        <div className={_styles.checkbox}>
                            <input
                                type="radio"
                                id={`custom-radio-${size || name}`}
                                // name="size"
                                value={size}
                                checked={index === checkedItem}
                                onChange={() => setCheckedItem(index)}
                            />
                            <label htmlFor={`custom-radio-${size || name}`}>{size || name}</label>
                        </div>
                    </li>
                ))
                }
            </ul>
        </>
    )
}

function Modal({item, setModalItem, setaddOns}) {
   
    // todo
    const handleAddons = () => {
        setaddOns();
    }
    
    return(
         <div className={_styles.modal}>
             <div className={_styles.header}>
                <h1 className={_styles.title}>Add ons +</h1>
                <button onClick={() => setModalItem(null)} className={_styles.close}>&times;</button>
             </div>
             <div className={_styles.body}>
                <div>
                    <h2 className={_styles.secondary}>{item['toppings'][0]['title']}</h2>
                    {item['toppings'][0]['isRadio'] ?
                        <Radio items = {item['toppings'][0]['items']} /> :  
                        <Checkbox items = {item['toppings'][0]['items']} />
                    }
                </div>
                <div>
                    <h2 className={_styles.secondary}>{item['size'][0]['title']}</h2>
                    {item['size'][0]['isRadio'] ?
                        <Radio items = {item['size'][0]['items']} /> :  
                        <Checkbox items = {item['size'][0]['items']} />
                    }
                </div>
             </div>
             <div className={_styles.footer}>
                 <Button onClick={() => setModalItem(null)} style = {{'fontSize' : '1.6rem', 'backgroundColor' : 'green'}} variant='contained'>Apply</Button>
             </div>
         </div>
    )
}

export default Modal;