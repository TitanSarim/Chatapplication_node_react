import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAIL,
    
    CLEAR_ERRORS
} from '../constants/userConstants'

import axios from 'axios'




export const login = (email, password) => async (dispatch) => {

    try {
        dispatch({type: LOGIN_REQUEST});
        
        const config = { headers: { "Content-Type": "application/json" } };

        const {data} = await axios.post(`/api/v1/loggedIn`, 
            {email, password},
            config
        )

        dispatch({type: LOGIN_SUCCESS, payload: data.user});
        
    } catch (error) {
        dispatch({type: LOGIN_FAIL, payload: error.response.data.message});
    }

}



export const register = (myForm) => async (dispatch) => {



    try {
        dispatch({type: REGISTER_REQUEST});

        
        const config = { headers: { "Content-Type": "application/json" } };

        const {data} = await axios.post(`/api/v1/register`, 
            myForm,
            config
        )

        dispatch({type: REGISTER_SUCCESS, payload: data.user});
        
    } catch (error) {
        dispatch({type: REGISTER_FAIL, payload: error.response.data.message});
    }

}



export const userLogOut = () => async (dispatch) => {

    try {


        await axios.get(`/api/v1/logout`);

        dispatch({
            type: LOGOUT_USER_SUCCESS,
        })
        
    } catch (error) {
        dispatch({type: LOGOUT_USER_FAIL, payload: error.response.data.message});
    }

}

export const clearErrors = () => async (dispatch) => {

    dispatch({type: CLEAR_ERRORS})

}