import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { HouseForRentReducer, HouseForSaleReducer } from './Reducers/HouseFetchReducer';
import {SearchBarReducer} from  './Reducers/SearchBarReducer'


const initialState={};


const reducer= combineReducers({
    houseForSale:HouseForSaleReducer,
    houseForRent:HouseForRentReducer,
    searchBarResults: SearchBarReducer
    
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    reducer,initialState, composeEnhancer(applyMiddleware(thunk))

)

export default store;