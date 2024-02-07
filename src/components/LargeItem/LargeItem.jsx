import React from "react";
import styles from "./LargeItem.module.css";

class LargeItem extends React.Component{

    render() {
        const { addToCart, item, onLargeItemClick} = this.props;
        return (
            <div className={styles.backdrop}>
                <div  className={styles.modal}>
                   
                <img onClick={() => { onLargeItemClick(item) }} className={styles.img} src={item.img} alt="" />
                <h2 className={styles.title}>{item.title}</h2>
                <p className={styles.text}>{item.descr}</p>
                <p className={styles.price}>{item.price}</p>
                <button onClick={() => {addToCart(item)}} className={styles.add_button}>+</button>
                </div>
            </div>
        )
    }
}

export default LargeItem;