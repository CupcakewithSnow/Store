import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import userReducer from './userReducer'
import thunk from 'redux-thunk'
import productReducer from './productReducer'
import basketReducer from './basketReducer'
const rootReducer = combineReducers(
    {
        User:userReducer,
        Product:productReducer,
        Basket:basketReducer
    }
)
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
export default store