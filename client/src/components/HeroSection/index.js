import React, { useContext } from 'react'
import styles from './HeroSectionStyle.module.css'
import AppLogo from "../../assets/CatwikiLogo.svg"
import Input from '../Input/Index'
import { MdArrowRightAlt } from 'react-icons/md';
import ImageCard from '../ImageCard';
import { Link } from 'react-router-dom';
import { CatContext } from '../../context/cat-context';

const HeroSection = () => {
    const { topBreeds } = useContext(CatContext);
    return (
        <div className={styles.HeroSection}>
            <div className={styles.HeroSectionTop}>
                <img src={AppLogo} alt="" />
                <p>Get to know more about your cat breed</p>
                <Input />
            </div>
            <div className={styles.HeroSectionBottom}>
                <div className={styles.HSB__Top}>
                    <p>Most Searched Breed</p>
                    <hr />
                </div>
                <div className={styles.HSB__Middle}>
                    <h1>66+ Breeds for you to Discover</h1>
                    <Link to="/top-10-searched-breeds"><p>SEE MORE <MdArrowRightAlt /> </p></Link>

                </div>
                <div className={styles.HSB__Bottom}>
                    {topBreeds.slice(0, 4)?.map((breed) => {
                        return <ImageCard breed={breed} key={breed.id} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default HeroSection
