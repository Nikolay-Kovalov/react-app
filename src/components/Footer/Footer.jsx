import React from "react";
import styles from "./Footer.module.css"

class Footer extends React.Component{
    render() {
        return (
            <footer className={styles.footer}>
                <p className={styles.footer_text}>© 2024. All rights reserved.</p>
            </footer>
        )
    }
}

export default Footer;