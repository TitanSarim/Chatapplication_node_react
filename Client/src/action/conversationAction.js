import axios from 'axios';
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


export const getConversations = () => async(dispatch) =>{


    try {
        
        dispatch({type: ALL_CONVERSATION_REQUEST});

        let link = `/api/v1/allConversations`;

        const {data} = await axios.get(link);

        dispatch({
            type: ALL_CONVERSATION_SUCCESS,
            payload: data,
        })

    } catch (error) {

        dispatch({
            type: ALL_CONVERSATION_FAIL,
            payload: error.response.data.message,
        })

    }


}

export const clearErrors = () => async (dispatch) => {

    dispatch({type: CLEAR_ERRORS})

}