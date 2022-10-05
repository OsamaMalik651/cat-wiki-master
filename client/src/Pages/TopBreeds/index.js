import React, { useContext } from 'react'
import CatInfoCard from '../../components/CatInfoCard';
import { CatContext } from '../../context/cat-context';

import styles from "./TopBreeds.module.css";
const TopBreeds = () => {
    const { topBreeds, loading } = useContext(CatContext);
    return (
        <div className={styles.TopBreeds}>
            <h1>Top 10 most searched breeds</h1>
            <div className={styles.TopSearchedCats}>
                {!loading && topBreeds.map((breed, index) => {
                    return <CatInfoCard breed={breed} key={breed.id} index={index} />
                })}
            </div>
        </div>
    )
}

export default TopBreeds;
