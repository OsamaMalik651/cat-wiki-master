import React from 'react'
import styles from './HeroSectionStyle.module.css'
import AppLogo from "../../assets/CatwikiLogo.svg"
import Input from '../Input/Index'
import { MdArrowRightAlt } from 'react-icons/md';
import ImageCard from '../ImageCard';

const HeroSection = () => {
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
                    <p>SEE MORE <MdArrowRightAlt /> </p>
                </div>
                <div className={styles.HSB__Bottom}>
                    <ImageCard />
                    <ImageCard />
                    <ImageCard />
                    <ImageCard />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
