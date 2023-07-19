import { configureStore } from '@reduxjs/toolkit';
import {combineReducers } from "redux"
import thunk from "redux-thunk"

import {userReducer} from './reducer/userReducer'

const reducer = combineReducers({


    user: userReducer

})



const middleware = [thunk]

const store = configureStore({

    reducer,

    middleware,

    // eslint-disable-next-line no-undef
    devTools: process.env.NODE_ENV !== 'production',


})

export default store;