import React from "react";
import styles from "./Item.module.css";

class Item extends React.Component{

    render() {
        const { item,addToCart, onLargeItemClick} = this.props
        const maxLength = 90;
        const remaindedText = item.descr.slice(0,maxLength)+"..."
        return (
            <li  className={styles.item}>
   
                <img onClick={() => { onLargeItemClick(item) }} className={styles.img} src={item.img} alt="" />
      
                <h2 className={styles.title}>{item.title}</h2>
                <p className={styles.text}>{remaindedText}</p>
                <p className={styles.price}>{item.price}</p>
                <button onClick={() => {addToCart(item)}} className={styles.add_button}>+</button>
            </li>
        )
    }
}

export default Item;