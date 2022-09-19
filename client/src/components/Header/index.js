import React from 'react';
import styles from "./HeaderStyle.module.css";
import { ReactComponent as AppLogo } from "../../assets/CatwikiLogo.svg"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={styles.Header}>
            <Link to="/">
                <AppLogo fill='#291507' />
            </Link>
        </div>
    )
}

export default Header;
