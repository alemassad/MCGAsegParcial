
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'

import thunk from 'redux-thunk'

import produReducer from './produDucks'

//import {composeWithDevTools} from 'redux-devtools-extension'



const rootReducer = combineReducers({
    products: produReducer     
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) )
    return store
}
