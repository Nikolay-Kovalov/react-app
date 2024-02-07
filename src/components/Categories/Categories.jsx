import React from "react";
import styles from "./Categories.module.css";

class Categories extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                key: "all",
                name: "Все"
                },
                {
                key: "sofa",
                name: "Диваны"
                },
                 {
                key: "bed",
                name: "Кровати"
                },
                  {
                key: "chair",
                name: "Стулья"
                },
                   {
                key: "table",
                name: "Столы"
                },
        
            ]
        }
    }
    render() {
        const { chooseCategory } = this.props;
        return (
            <ul className={styles.categories_list}>
                {this.state.categories.map(item => (
                    <li className={styles.item} key={item.key}><button onClick={()=>{chooseCategory(item.key)}} className={styles.btn}>{item.name}</button></li>
                ))}
            </ul>
        )
    }
}

export default Categories;