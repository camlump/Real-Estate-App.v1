const{ FECTH_HOUSE_FAIL, FETCH_HOUSE_REQUEST, FETCH_HOUSE_SUCCESS } = require("../Actions/ActionTypes");



const singleHouseReducer = (state = { singleHouse: [] }, action) =>{
    switch(action.type) {
        case FETCH_HOUSE_REQUEST:
            return { loading: true};
        case FETCH_HOUSE_SUCCESS:
            return {loading: false, singleHouse: action.payload};
        case FECTH_HOUSE_FAIL:
            return { loading: false, error: action.payload};
        default:
            return state;
    }
}

export default singleHouseReducer;