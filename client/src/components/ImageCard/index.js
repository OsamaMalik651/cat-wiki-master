import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ImageCardStyle.module.css'
const ImageCard = ({ breed }) => {
    return (
        <div className={styles.ImageCard}>
            <img src={breed.image.url} alt="" />
            <Link to={`${breed.name}`} state={{ id: `${breed.id}`, url: breed.image.url }}>
                <p>{breed.name}</p>
            </Link>
        </div>
    )
}

export default ImageCard
