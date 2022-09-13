import React from 'react'
import styles from "./InputStyle.module.css"
const Input = () => {
    return (
        <div className={styles.Input}>
            <input type="text" placeholder='Enter your breed' />
            <span class="material-symbols-outlined">
                search
            </span>
            <div className={`${styles.SearchResults}  ${styles.ShowResults}`}>
                <div className={styles.Search}>
                    <p>American Bobtail</p>
                    <p>American Curl</p>
                    <p>American Shorthair</p>
                    <p>American Wirehair</p>
                </div>
            </div>
        </div>
    )
}

export default Input
