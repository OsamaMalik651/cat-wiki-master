import { createContext, useEffect, useState } from "react";
import { getTopBreeds } from "../services/breeds";

export const CatContext = createContext();

export const CatContextProvider = ({ children }) => {
    const [topBreeds, setTopBreeds] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!topBreeds.length) {
            setLoading(true)
            getTopBreeds().then((response) => {
                setTopBreeds(response)
                setLoading(false)
            })
        }
    }, [])
    return (
        <CatContext.Provider value={{ topBreeds, loading }}>
            {children}
        </CatContext.Provider>
    )
}