import {
    MOVIES_ADD_FAVORITE,
    MOVIES_REMOVE_FAVORITE,
    MOVIES_GET,
    MOVIES_GET_DETAIL
} from '../types/moviesTypes';

const initalState = {
    searchedMovies: [],
    favoritesMovies: [],
    movieDetail: {},
    loading: false,
    error: null
};

export const moviesReducer = (state = initalState, action) => {
    switch (action.type) {
        case MOVIES_GET:
            return {
                ...state,
                searchedMovies: action.payload
            }
        case MOVIES_GET_DETAIL:
            return {
                ...state,
                movieDetail: action.payload
            }
        case MOVIES_ADD_FAVORITE:
            return {
                ...state,
                favoritesMovies: [...state.favoritesMovies, action.payload]
            }
        case MOVIES_REMOVE_FAVORITE:
            return {
                ...state,
                favoritesMovies: state.moviesFavorites.filter(movie => movie.id !== action.payload)
            }
        default: return { ...state }
    }
}