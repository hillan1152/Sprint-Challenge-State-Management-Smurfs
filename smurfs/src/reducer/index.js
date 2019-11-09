import { POST_SMURF, POST_FAILURE, POST_SUCCESS, FETCH_SUCCESS, FETCH_FAILURE, START_FETCHING } from '../actions';

const initialState = {
    smurfs: [],
    isLoading: false,
    error: "",
    add: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: ''
                }
        case FETCH_SUCCESS:
            return {   
                ...state,
                isFetching: false,
                error: '',
                smurfs: action.payload
            }
        case FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        case POST_SMURF:
            return {
                ...state,
                isFetching: false,
                error: '',
                add: true
            }
        case POST_SUCCESS:
            console.log('POST WORKED', action.payload)
            return {
                ...state,
                isFetching: false,
                error: '',
                smurfs: action.payload
            }
        case POST_FAILURE:
            console.log('POST FAILED', action.payload)
            return {
                ...state,
                isFetching: false,
                error: action.payload,
                add: false     
            }
        default:
            return state;
    }
}

export default reducer;