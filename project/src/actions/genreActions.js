import axios from 'axios'

export const FETCH_GENRES_START = 'FETCH_GENRES_START';
export const FETCH_GENRES_SUCCESS = 'FETCH_GENRES_SUCCESS';
export const FETCH_GENRES_FAILURE = 'FETCH_GENRES_FAILURE';

export const getData = () => {
    return dispatch => {
        dispatch({ type: FETCH_GENRES_START });
        axios
        .get('https://binaryjazz.us/wp-json/genrenator/v1/genre/20/')
        .then(res => {
            console.log(res)
            dispatch({ type: FETCH_GENRES_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_GENRES_FAILURE, payload: err });
        })
    }
}