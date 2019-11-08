import axios from 'axios';

export const START_FETCHING = 'START_FETCHING';
export const START_POSTING = 'START_POSTING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: START_FETCHING })
    axios.get('http://localhost:3333/smurfs')
        .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data}))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.data}))
}

export const postSmurfs = () => dispatch => {
    dispatch({ type: START_POSTING })
    axios.post('http://localhost:3333/smurfs')
        .then(res => console.log(res))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.data}))
}


