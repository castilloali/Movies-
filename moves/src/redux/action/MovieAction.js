import { ALLMOVIES } from "../types/MovieTypes"




export const getAllMovies = () => {
    return {
        type: ALLMOVIES,
        data : [],
        pages : 0
    }
}