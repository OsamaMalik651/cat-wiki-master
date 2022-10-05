import React from 'react'
import styles from "./CatInfoCard.module.css"
const CatInfoCard = ({ breed, index }) => {
    return (
        <div className={styles.CatInfoCard}>
            <div className={styles.CardLeft}>
                <img src={breed?.image.url || ""} alt="" />
            </div>
            <div className={styles.CardRight}>
                <h1>{index + 1}. {breed?.name}</h1>
                <p>{breed?.description}</p>
            </div>
        </div>
    )
}

export default CatInfoCard
