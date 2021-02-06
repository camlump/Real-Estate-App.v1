import { FECTH_HOUSE_FAIL, FETCH_HOUSE_REQUEST, FETCH_HOUSE_SUCCESS } from "./ActionTypes";

import axios from 'axios'



export const houseForSaleAction = () =>  async(dispatch) =>{

    const url = '/api/house-sale'
    try {
        dispatch({type: FETCH_HOUSE_REQUEST })
        const {data} = await axios.get(url)
        dispatch({type: FETCH_HOUSE_SUCCESS, payload:data})
    } catch(error) {
            dispatch({type: FECTH_HOUSE_FAIL, payload: error})
    }
};

export const houseForRentAction = () => async (dispatch) =>{

    const url = '/api/house-rent'
    try {
        dispatch({type: FETCH_HOUSE_REQUEST })
        const {data} = await axios.get(url);
        dispatch({type: FETCH_HOUSE_SUCCESS, payload:data})
    } catch(error) {
            dispatch({type: FECTH_HOUSE_FAIL, payload: error})
    }
};