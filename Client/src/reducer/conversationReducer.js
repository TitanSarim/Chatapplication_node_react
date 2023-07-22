import {
    CREATE_CONVERSATION_REQUEST,
    CREATE_CONVERSATION_SUCCESS,
    CREATE_CONVERSATION_FAIL,
    ALL_CONVERSATION_REQUEST,
    ALL_CONVERSATION_SUCCESS,
    ALL_CONVERSATION_FAIL,
    SINGLE_CONVERSATION_REQUEST,
    SINGLE_CONVERSATION_SUCCESS,
    SINGLE_CONVERSATION_FAIL,
    CLEAR_ERRORS,
}
from '../constants/conversationConstants'


export const conversationsReducer = (state = {data: []}, action) => {

    switch(action.type){

        case ALL_CONVERSATION_REQUEST:
            return{
                loading: true,
                data: []
            }

        case ALL_CONVERSATION_SUCCESS:
            return{
                loading: false,
                data: action.payload.data
            }

        case ALL_CONVERSATION_FAIL:
            return{
                loading: false,
                error: action.payload                
            }

        case CLEAR_ERRORS:
            return{
                ...state,
                error: null
            }

        default:
            return state

    }

}