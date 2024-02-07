import React from "react";
import styles from "./ItemList.module.css";
import Item from "../Item/Item";
import Categories from "../Categories/Categories";

class ItemList extends React.Component{
    render() {
        const { items,addToCart,chooseCategory, onLargeItemClick } = this.props;

        return (
            <>
                <Categories chooseCategory={chooseCategory} />
            <ul className={styles.item_list}>
                {items.map(item => {
                    return <Item onLargeItemClick={onLargeItemClick} key={item.id} item={item} addToCart={addToCart} />
                })
                   }
               
                </ul>
             </>
        )
    }
}

export default ItemList;