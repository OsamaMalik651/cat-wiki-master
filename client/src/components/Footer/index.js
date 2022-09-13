import React from 'react'
import styles from "./FooterStyles.module.css";
import { ReactComponent as AppLogo } from "../../assets/CatwikiLogo.svg"

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <AppLogo fill='white' />
            <p>©  created by <u>Osama Malik</u>-devChallenge.io</p>
        </div>
    )
}

export default Footer
