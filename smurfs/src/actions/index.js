import axios from 'axios';

// ACTIONS GET
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

// ACTIONS POST
export const POST_SMURF = "POST_SMURF" 
export const POST_SUCCESS = "POST_SUCCESS"
export const POST_FAILURE = "POST_FAILURE"



export const fetchSmurfs = () => dispatch => {
    dispatch({ type: START_FETCHING })
    axios.get('http://localhost:3333/smurfs')
        .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data}))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.data}))
}

export const postSmurfs = smurf => dispatch => {
    dispatch({ type: POST_SMURF })
    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then(res => {
        console.log(`POST RESPONSE`, res);
        dispatch({
            type: POST_SUCCESS,
            payload: res.data
        });
        })
        .catch(err => dispatch({ type: POST_FAILURE, payload: err.data}))
}


