import React from "react";
import styles from "./Order.module.css";
import { FaTrash } from "react-icons/fa";

class Order extends React.Component{
    
    render() {
        const { order,onDeleteOrder } = this.props;
        return (
            <li className={styles.item}>
              
                <img className={styles.img} src={order.img} alt="" />
                <div className={styles.text_wrapper}>
                <h2 className={styles.title}>{order.title}</h2>
                <p className={styles.price}>{order.price}</p>
                    <FaTrash onClick={() => { onDeleteOrder(order.id) }} className={styles.delete_btn} />
                    </div>     
                  </li>
            
        )
    }
}

export default Order;