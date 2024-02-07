import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./Layout.module.css"
import {Outlet} from "react-router-dom"

class Layout extends React.Component{

    render() {
        const{orders,onDeleteOrder,sum} = this.props
        return (
            <div>
                <Header sum = {sum} onDeleteOrder={onDeleteOrder} orders={orders} />
                <main>
                    <div className={styles.container}>
                <Outlet>
              
                    
         
                        </Outlet>
                        </div>
                               </main>
            <Footer />
            </div>
        )
    }
}

export default Layout;