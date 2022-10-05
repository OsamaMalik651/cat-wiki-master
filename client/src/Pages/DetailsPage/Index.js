import React, { useEffect, useState } from 'react'
import styles from './DetailPageStyle.module.css'
import { cat } from "../../dummyCat"
import AttributeCard from '../../components/AttributeCard'
import { useLocation, } from 'react-router-dom'
import { getBreedDetails } from '../../services/breeds'
const DetailsPage = (props) => {
    const [breedDetails, setBreedDetails] = useState({});
    const [catAttributes, setCatAttributes] = useState([]);
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)
    var keys = ["adaptability", "affection_level", "child_friendly", "grooming", "intelligence", "health_issues", "social_needs", "stranger_friendly"]

    let { state } = useLocation();
    useEffect(() => {
        getBreedDetails(state.id).then((breedDetail) => {
            setBreedDetails(breedDetail.data)
            setImages(breedDetail.imageURLs)
        })
    }, []);

    useEffect(() => {
        if (Object.keys(breedDetails).length && images.length) {
            let filteredCatAttributes = Object.entries(breedDetails).filter(([key, value]) => keys.includes(key))
            setCatAttributes(filteredCatAttributes)
            setLoading(false)
        }
    }, [breedDetails])

    return (
        !loading && <div className={styles.DetailsPage}>
            <div className={styles.DetailsPage__Top}>
                <div className={styles.Top__Left}>
                    <div className={styles.MainImage}>
                        <img src={state.url} alt="" />
                    </div>
                </div>
                <div className={styles.Top__Right}>
                    <div className={styles.CatDetails}>
                        <h1>{breedDetails.name}</h1>
                        <p>{breedDetails.description}</p>
                        <p><b>Temperament:</b> {breedDetails.temperament}</p>
                        <p><b>Origin:</b> {breedDetails.origin}</p>
                        <p><b>Life Span:</b> {breedDetails.life_span} years</p>
                    </div>
                    <div className={styles.CatAttributes}>
                        {catAttributes.map((attribute, index) => <AttributeCard key={index} attribute={attribute} />)}
                    </div>
                </div>
            </div>
            <div className={styles.DetailsPage__Bottom}>
                <h1>Other photos</h1>
                <div className={styles.Photos}>
                    {images?.slice(0, 8).map((image) => <img src={image.url} alt="" key={image.id} />)}
                </div>
            </div>

        </div>
    )
}

export default DetailsPage
