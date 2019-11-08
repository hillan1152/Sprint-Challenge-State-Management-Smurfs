import { START_POSTING, FETCH_SUCCESS, FETCH_FAILURE, START_FETCHING } from '../actions';

const initialState = {
    smurfs: [],
    isLoading: false,
    error: ""
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
        default:
            return state;
    }
}

export default reducer;