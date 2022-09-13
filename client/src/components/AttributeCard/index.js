import React from 'react'
import styles from "./AttributeCardStyle.module.css"
const AttributeCard = ({ attribute }) => {
    const AttributeName = (attribute[0].charAt(0).toUpperCase() + attribute[0].slice(1)).replaceAll("_", " ");
    const rating = [...Array(5).keys()].map(rating => {
        if (rating <= attribute[1]) {
            return <hr key={rating} className={`${styles.Bar} ${styles.Filled}`} />
        }
        else return <hr key={rating} className={`${styles.Bar}`} />

    }
    )
    return (
        <div className={styles.AttributeCard}>
            <b>{AttributeName}:</b>
            <span className={styles.Ratings}>{rating}</span>
        </div>
    )
}

export default AttributeCard
