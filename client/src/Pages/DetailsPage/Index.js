import React from 'react'
import styles from './DetailPageStyle.module.css'
import { cat } from "../../dummyCat"
import AttributeCard from '../../components/AttributeCard'
const DetailsPage = () => {
    var keys = ["adaptability", "affection_level", "child_friendly", "grooming", "intelligence", "health_issues", "social_needs", "stranger_friendly"]
    const catAttributes = Object.entries(cat).filter(([key, value]) => keys.includes(key))
    console.log(catAttributes)
    return (
        <div className={styles.DetailsPage}>
            <div className={styles.DetailsPage__Top}>
                <div className={styles.Top__Left}>
                    <div className={styles.MainImage}>
                        <img src="" alt="" />
                    </div>
                </div>
                <div className={styles.Top__Right}>
                    <div className={styles.CatDetails}>
                        <h1>Bengal</h1>
                        <p>Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.</p>
                        <p><b>Temperament:</b> Alert, Agile, Energetic, Demanding, Intelligent</p>
                        <p><b>Origin:</b> United States</p>
                        <p><b>Life Span:</b> 12 - 15 years</p>
                    </div>
                    <div className={styles.CatAttributes}>
                        {catAttributes.map((attribute, index) => <AttributeCard key={index} attribute={attribute} />)}
                    </div>
                </div>
            </div>
            <div className={styles.DetailsPage__Bottom}>
                <h1>Other photos</h1>
                <div className={styles.Photos}>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />

                </div>
            </div>

        </div>
    )
}

export default DetailsPage
