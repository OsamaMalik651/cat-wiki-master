import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ImageCardStyle.module.css'
const ImageCard = () => {
    return (
        <div className={styles.ImageCard}>
            <img src="" alt="" />
            <Link to="/breed">
                <p>Cat Name</p>
            </Link>
        </div>
    )
}

export default ImageCard
