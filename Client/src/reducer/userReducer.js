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
import Cookies from 'js-cookie';


export const userReducer = (state = {user: []}, action) =>{

    const token = Cookies.get('token');

    switch(action.type){

        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
            return{
                loading: true,
                isAuthenticated: false,
            }

        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return{
                ...state,
                loading: false,
                isAuthenticated: !!token,
                user: action.payload,
            }

        case LOGOUT_USER_SUCCESS:
            return{
                loading: false,
                user: null,
                isAuthenticated: false
            }
    

       
        case LOGIN_FAIL:
        case REGISTER_FAIL:
            return{
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            };


        case LOGOUT_USER_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
 
        

        case  CLEAR_ERRORS:
            return{
                ...state,
                error: null,
            }

        default:
            return state;    
    }



}
