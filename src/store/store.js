import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import listingReducer from './reducers/listingReducer'


const configureStore = () => {
    const store = createStore(combineReducers(
        { listingReducer }
    ), applyMiddleware(thunk))
    return store
}

export default configureStore