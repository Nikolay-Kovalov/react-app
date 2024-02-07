import React from "react";
import "./App.css"
import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Aboute from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Cabinet from "./pages/Cabinet";
import items from "./data";


class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            items,
            orders: [],
            curretItems: items,
            isLargeItem: false,
            largeItem: {}
        }
    }  

    onLargeItemClick = (largeItem) => {
        this.setState({largeItem})
        this.setState({ isLargeItem: !this.state.isLargeItem });
    }
    
    chooseCategory = (category) => {
        if (category === "all") {
            this.setState({ curretItems: this.state.items })
            return
        }
        console.log(category)
        this.setState({curretItems: this.state.items.filter(item => item.category === category)})
        
    }

    sum = () => {
        let sum = 0;
        this.state.orders.forEach(item => sum += parseFloat(item.price))
        return sum
    } 
    
    onDeleteOrder = (id) => {
    this.setState({orders: this.state.orders.filter(item => item.id !== id )})
    }

    addToCart = (order) => {
        let isInArray = false;
        this.state.orders.forEach(item => {
            if (item.id === order.id) {
                isInArray = true;
                    return
                }
        })
        if (!isInArray) {
                       this.setState({ orders: [...this.state.orders, order] }) 
        }

    
    }
    render() {
        const curretItems = this.state.curretItems;
        const orders = this.state.orders;


        return (
            <div className="app">
                <Routes>
                    <Route path="/react-app" element={<Layout  sum = {this.sum} orders={orders} onDeleteOrder={this.onDeleteOrder} />}>
                        <Route index element={<Home isLargeItem = {this.state.isLargeItem} largeItem = {this.state.largeItem} onLargeItemClick={this.onLargeItemClick} chooseCategory = {this.chooseCategory} items={curretItems} addToCart = {this.addToCart}/>}/>
                        <Route path="/react-app/about" element={<Aboute />}/>
                        <Route path="/react-app/contacts" element={<Contacts />} />
                        <Route path="/react-app/cabinet" element={<Cabinet/>}/>
                    </Route>
     </Routes>
            </div>
        )
    }
}

export default App;
