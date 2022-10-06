import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getAllBreeds } from '../../services/breeds';
import styles from "./InputStyle.module.css"
const Input = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [breedsData, setBreedsData] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [showResults, setShowResults] = useState(false)

    useEffect(() => {
        getAllBreeds().then((breeds) => {
            setBreedsData(breeds)
            setFilteredResults(breeds)
        })
    }, [])

    useEffect(() => {
        if (searchTerm !== '') {
            const filteredData = [...breedsData].filter((item) => {
                if (item.name.match(searchTerm)) {
                    return item;
                } else return null;
            });
            setFilteredResults(filteredData)
            setShowResults(true)
        }
        else {
            setFilteredResults(breedsData)
            setShowResults(false)
        }
    }, [searchTerm])
    return (
        <div className={styles.Input}>
            <input type="text" placeholder='Enter your breed' onChange={(e) => setSearchTerm(e.target.value)} />
            <span className="material-symbols-outlined">
                search
            </span>
            <div className={`${styles.SearchResults} ${showResults ? styles.ShowResults : ""}`}>
                <div className={styles.Search}>
                    {filteredResults?.map(item => {
                        return <Link key={item.id} to={`${item.name}`} state={{ id: `${item.id}`, url: `${item.image?.url}` }}>
                            <p>{item.name}</p>
                        </Link>
                    }
                    )}
                </div>
            </div>
        </div>
    )
}

export default Input
