import { FECTH_HOUSE_FAIL, FETCH_HOUSE_REQUEST, FETCH_HOUSE_SUCCESS } from "../Actions/ActionTypes";


export const HouseForSaleReducer = (state ={houseForSaleList: []}, action) =>{
    
    
    switch (action) {
        case FETCH_HOUSE_REQUEST:
            return {loading: true}
        case FETCH_HOUSE_SUCCESS:
            return {loading:false, houseForSaleList:action.payload}
        case FECTH_HOUSE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const HouseForRentReducer = (state ={houseForRentList: []}, action) =>{
    
    
    switch (action) {
        case FETCH_HOUSE_REQUEST:
            return {loading: true}
        case FETCH_HOUSE_SUCCESS:
            return {loading:false, houseForRentList:action.payload}
        case FECTH_HOUSE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}