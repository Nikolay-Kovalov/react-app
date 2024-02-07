import React from "react";
import ItemList from "../components/ItemsList/ItemList";
import LargeItem from "../components/LargeItem/LargeItem";

class Home extends React.Component{

    render() {
        const { items,addToCart,chooseCategory, onLargeItemClick, largeItem,isLargeItem  } = this.props

        return (
            <>
            <ItemList onLargeItemClick={onLargeItemClick} chooseCategory={chooseCategory} items={items} addToCart={addToCart} />
                {isLargeItem && <LargeItem onLargeItemClick={onLargeItemClick} addToCart={addToCart} item={largeItem} />}
                </>
        )
    }
}
export default Home;