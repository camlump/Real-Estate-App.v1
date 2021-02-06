
import {
    FECTH_HOUSE_FAIL,
    FETCH_HOUSE_REQUEST,
    FETCH_HOUSE_SUCCESS
    
} from '../Actions/ActionTypes'




export const SearchBarReducer = (state = {searchBarResults: []}, action) => {
    switch(action.type) {
        case FETCH_HOUSE_REQUEST:
            return {laoding: true};
        case FETCH_HOUSE_SUCCESS:
            return { loading: false, searchBarResults: action.payload};
        case FECTH_HOUSE_FAIL:
            return { loading: false, error: action.payload}
        default:
            return state;
        
        }

    }
