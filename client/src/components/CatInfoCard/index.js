import React from 'react'
import styles from "./CatInfoCard.module.css"
const CatInfoCard = () => {
    return (
        <div className={styles.CatInfoCard}>
            <div className={styles.CardLeft}>
                <img src="" alt="" />
            </div>
            <div className={styles.CardRight}>
                <h1>1. Bengal</h1>
                <p>Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it. </p>
            </div>
        </div>
    )
}

export default CatInfoCard
