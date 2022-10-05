import axios from "axios";
import { cat } from "../dummyCat";

export const getTopBreeds = async () => {
    const response = await axios.get("/api/top-breeds")
    return response.data
}

export const getBreedDetails = async (breedID) => {
    const response = await axios.get("/api/getBreedDetails", {
        params: {
            id: breedID
        }
    })
    console.log(response)
    return response.data
}