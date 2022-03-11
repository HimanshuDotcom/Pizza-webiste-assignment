import _styles from './styles.module.css';
import StarIcon from '@mui/icons-material/Star';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import Button from '@mui/material/Button';


export default function Pizza({count,item,addToOrder,showModal}) {
    return(
        <div className={_styles.card}>
            <div className = {_styles.card_img}>
                <img src = {item.img_url} />
                <span className={_styles.name}>{item.name}</span>
            </div>
            <p className={_styles.description}>{item.description}</p>
            <ul className={_styles.features}>
                <li>{item.rating.toPrecision(2)}<StarIcon style={{'color' : "#EBDE14"}}/></li>
                <li>{item.isVeg ? "VEG" : "NON-VEG"}<LocalPizzaIcon style = {{'color' :'red', 'fontSize' : '3rem'}} /></li>
                <li>Price &rarr;</li>
                <li><span className = {_styles.price_btn}>&#8377; {item.price}</span></li>
            </ul>
            <div>
            <Button 
                style={{'fontSize' : '1.5rem'}} 
                variant = "outlined" 
                onClick={() => showModal(item)}
            >
                Make pizza more tasty + 
            </Button>
            <Button 
                style = {{'fontSize' : '1.7rem'}}
                variant = "contained"  
                onClick = {() => addToOrder(item.id)}
            >
                {count ? <span>({count})</span> : null} &nbsp;
                Add to Order &rarr;
            </Button>
            </div>
        </div>
    )
}
