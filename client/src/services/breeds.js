import axios from "axios";

export const getTopBreeds = async () => {
    const response = await axios.get("/api/top-breeds")
    return response.data
}
