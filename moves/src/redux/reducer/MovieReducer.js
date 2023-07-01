import { ALLMOVIES } from "../types/MovieTypes";

export const MovieReducer = (state = { movies : [], pageCount : 0}, action) => {
    switch(action.type) {
        case ALLMOVIES : 
            return {movies : action.data, pageCount : action.pages }
            default : 
            return state ;
    }
}
