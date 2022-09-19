import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from "./LayoutStyle.module.css"

const Layout = ({ children }) => {
    return (
        <div className={styles.Layout}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
