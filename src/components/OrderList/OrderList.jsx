import React from "react";
import styles from "./OrderList.module.css";
import Order from "../Order/Order";

class OrderList extends React.Component{
 
    render() {
 
        const { orders, onDeleteOrder, sum } = this.props;
        const totalAmount = sum();
        return (<>
            <ul className={styles.order_list}>
                {orders.map(item => (
                    <Order onDeleteOrder={onDeleteOrder} order={item} key={item.id} />
                ))}
            </ul>
            <p className={styles.sum}>Сумма: {totalAmount}$</p>
            </>
        )
    }
}

export default OrderList;