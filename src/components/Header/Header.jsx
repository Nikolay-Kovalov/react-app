import React from "react";
import Nav from "../Nav/Nav";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import OrderList from "../OrderList/OrderList";


class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpenCart: false,
        }
        this.onCartClick = this.onCartClick.bind(this)
    }

    onCartClick() {
        this.setState(prevState => {
            console.log(!prevState.isOpenCart)
            return {isOpenCart: !prevState.isOpenCart}
        })

    }

    render() {
        const { orders,onDeleteOrder,sum } = this.props;
        return (
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.nav_wrapper}>
                        <Link to="/react-app" className={styles.logo}>House stuff</Link>
                        <div className={styles.cart_icon_wrapper}>
                            <FaShoppingCart onClick={this.onCartClick} className={styles.cart} />
                            <Nav />
                            {this.state.isOpenCart && <div className={styles.shopping_cart}> {orders.length > 0 ? <OrderList sum = {sum} onDeleteOrder={onDeleteOrder} orders={orders}></OrderList> : <p className={styles.empty_cart_text}>Корзина пуста</p>}</div>}
                            </div>
                        </div>
                    <div className={styles.hero_banner}></div>
                    </div>
        </header>
    )
}
}

export default Header;