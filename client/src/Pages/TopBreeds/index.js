import React from 'react'
import CatInfoCard from '../../components/CatInfoCard';
import styles from "./TopBreeds.module.css";
const TopBreeds = () => {
    return (
        <div className={styles.TopBreeds}>
            <h1>Top 10 most searched breeds</h1>
            <div className={styles.TopSearchedCats}>
                <CatInfoCard />
                <CatInfoCard />
                <CatInfoCard />
            </div>
        </div>
    )
}

export default TopBreeds;
