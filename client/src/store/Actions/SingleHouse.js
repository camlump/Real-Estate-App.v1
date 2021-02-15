import { FECTH_HOUSE_FAIL, FETCH_HOUSE_REQUEST, FETCH_HOUSE_SUCCESS } from "./ActionTypes";
import axios from 'axios'

import React from 'react'

const singleHouseAction = (house_id) =>  async (dispatch) => {
   const dev_url = `http://localhost:5000/api/house-details/${house_id}`;
   const production_url = `/house-details/${house_id}`

   try {
       dispatch({type: FETCH_HOUSE_REQUEST});
       const { data } = await axios.get(production_url);
       dispatch({type: FETCH_HOUSE_SUCCESS, payload:data})

   } catch(error) {
       dispatch({type: FECTH_HOUSE_FAIL})
   }
}

export default singleHouseAction
