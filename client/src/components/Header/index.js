import React from 'react';
import styles from "./HeaderStyle.module.css";
import { ReactComponent as AppLogo } from "../../assets/CatwikiLogo.svg"

const Header = () => {
    return (
        <div className={styles.Header}>
            <AppLogo fill='#291507' />
        </div>
    )
}

export default Header;
