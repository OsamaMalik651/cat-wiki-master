import React from 'react'
import styles from "./BlogStyle.module.css"
import { MdArrowRightAlt } from 'react-icons/md';
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";


const BlogSection = () => {
    return (
        <div className={styles.BlogSection}>
            <div className={styles.BlogSection__Left}>
                <hr />
                <h1>Why should you have a cat?</h1>
                <p>Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</p>
                <p>READ MORE <MdArrowRightAlt /></p>
            </div>
            <div className={styles.BlogSection__Right}>
                <div className={styles.ImageGrid}>
                    <img src={Image2} alt="" className={styles.GridItem1} />
                    <img src={Image3} alt="" className={styles.GridItem2} />
                    <img src={Image1} alt="" className={styles.GridItem3} />
                </div>
            </div>
        </div>
    )
}

export default BlogSection
