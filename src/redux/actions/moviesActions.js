import {
    MOVIES_ADD_FAVORITE,
    MOVIES_REMOVE_FAVORITE,
    MOVIES_GET,
    MOVIES_GET_DETAIL,
    MOVIES_GET_FAILURE,
    MOVIES_GET_DETAIL_FAILURE,
    apiKey
} from '../types/moviesTypes';

export const addFavoriteMovie = (movie) => {
    return {
        type: MOVIES_ADD_FAVORITE,
        payload: movie
    }
};

export const removeFavoriteMovie = (movieId) => {
    return {
        type: MOVIES_REMOVE_FAVORITE,
        payload: movieId
    }

};

//recibe un nombre de pelicula y devuelve una lista de peliculas con el nombre de indicado.
export const getMovies = (title) => {
    console.log(`getMovies: ${title}`);
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`
    console.log(url);
    return function (dispatch) {
        return fetch(url)
            .then(response => {
                console.log(`response: ${response}`);
                return response.json()
            })
            .then(json => dispatch({
                type: MOVIES_GET,
                payload: json
            }))
            .catch(error => dispatch({
                type: MOVIES_GET_FAILURE,
                payload: error
            }
            ));
    }
};

export const getMovieDetail = (id) => {
    return function (dispatch) {
        return fetch("http://www.omdbapi.com/?apikey=20dac387&i=" + id)
            .then(response => response.json())
            .then(json => dispatch({
                type: MOVIES_GET_DETAIL,
                payload: json
            }))
            .catch(error => dispatch({
                type: MOVIES_GET_DETAIL_FAILURE,
                payload: error
            }
            ));
    }

}