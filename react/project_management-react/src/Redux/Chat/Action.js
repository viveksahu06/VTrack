import api from "@/Config/api";
import * as actionTypes from "./ActionTypes";

export const sendMessage = (messageData) => {
    return async(dispatch) => {
        dispatch({ type: actionTypes.SEND_MESSAGE_REQUEST });
        try {
            const response = await api.post("/api/messages/send", messageData);
            dispatch({
                type: actionTypes.SEND_MESSAGE_SUCCESS,
                message: response.data,
            });
            console.log("message sent", response.data)
        } catch (error) {
            console.log(error)
            dispatch({
                type: actionTypes.SEND_MESSAGE_FAILURE,
                error: error.message,
            });
        }
    };
};

export const fetchChatByProject = (projectId) => {
    return async(dispatch) => {
        dispatch({ type: actionTypes.FETCH_CHAT_BY_PROJECT_REQUEST });
        try {
            const response = await api.get(
                `/api/projects/${projectId}/chat`
            );
            console.log("fetch chat", response.data)
            dispatch({
                type: actionTypes.FETCH_CHAT_BY_PROJECT_SUCCESS,
                chat: response.data,
            });
        } catch (error) {
            console.log("error -- ", error)
            dispatch({
                type: actionTypes.FETCH_CHAT_BY_PROJECT_FAILURE,
                error: error.message,
            });
        }
    };
};

export const fetchChatMessages = (chatId) => {
    return async(dispatch) => {
        dispatch({ type: actionTypes.FETCH_CHAT_MESSAGES_REQUEST });
        try {
            const response = await api.get(
                `/api/messages/chat/${chatId}`
            );
            console.log("fetch messages ", response.data)
            dispatch({
                type: actionTypes.FETCH_CHAT_MESSAGES_SUCCESS,
                chatId,
                messages: response.data,
            });
        } catch (error) {
            console.log("error -- ", error)
            dispatch({
                type: actionTypes.FETCH_CHAT_MESSAGES_FAILURE,
                error: error.message,
            });
        }
    };
};