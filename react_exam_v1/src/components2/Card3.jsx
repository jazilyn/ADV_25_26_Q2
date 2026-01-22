import { useState } from "react";
import styles from "./card3.module.css";

function card3({shoe_name, shoe_id, shoe_color, shoe_desc, shoe_price, cart}){ 
    const [Name, setName]=useState(shoe_name);
    const[id,setid]=useState(shoe_id);
    const[Color, setColor]=useState(shoe_color);
    const[Description,setDescription]=useState(shoe_desc);
    const[Price, setPrice]=useState(shoe_price);
    const[Cart, setCart]=useState(cart);
    
    
    return(
        <div className = {styles.card_container}> 
            <h1> {shoe_name} </h1>
            <p> {shoe_id} </p>
            <p> {shoe_color} </p>
            <p> {shoe_desc} </p>
            <h2> {shoe_price}</h2>
            <p> {cart} </p>
            <p className = {styles.shoe_font}> {shoe_name} </p>
            <button> Add to cart </button> 
        </div>
    );
}

export default card3; 

