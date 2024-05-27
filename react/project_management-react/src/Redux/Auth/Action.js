import { API_BASE_URL } from "@/Config/api";
import axios from "axios";
import { type } from "os";

import { GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionTypes"


export const register = userData => async(dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
        // const { data } = await axios.post('$ { API_BASE_URL } /
        //     auth / signup ', userData)
        const { data } = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
            dispatch({ type: REGISTER_SUCCESS, payload: data });
        }
        console.log("register success", data);
    } catch (error) {
        console.log(error);
    }
}
export const login = userData => async(dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
        // const { data } = await axios.post('$ { API_BASE_URL } /
        //     auth / signup ', userData)
        const { data } = await axios.post(`${API_BASE_URL}/auth/signing`, userData);
        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
            dispatch({ type: LOGIN_SUCCESS, payload: data });
        }
        console.log("LOGIN success", data);
    } catch (error) {
        console.log(error);
    }
}
export const getUser = () => async(dispatch) => {
    dispatch({ type: GET_USER_REQUEST });
    try {
        const { data } = await axios.get(`${API_BASE_URL}/api/users/profile`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
        });
        dispatch({ type: GET_USER_SUCCESS, payload: data });

        console.log("user success", data)
    } catch (error) {
        console.log(error);
    }
};
export const logout = () => async(dispatch) => {
    dispatch({ type: LOGOUT });
    localStorage.clear();
};