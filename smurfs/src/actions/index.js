import axios from 'axios';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';


export const fetchFacts = () => {
    return (dispatch) => {
        dispatch({ type: START_FETCHING})
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response}))
    }
}

//POST REQUEST

export const useFacts = (input) => {
    return(dispatch) => {
        dispatch({ type: START_FETCHING})
    axios
        .post('http://localhost:3333/smurfs', input)
        .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
        .catch(err => console.log(err))
    }}

    
    // dispatch({ type: FETCH_FAILURE, payload: err.response})