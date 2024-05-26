import { type } from "os"
import { REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"
import { API_BASE_URL } from "@/Config/api"
import axios from "axios"

export const register = userData => async(dispatch) => {
    dispatch({
        type: REGISTER_REQUEST
    })
    try {
        // const { data } = await axios.post('$ { API_BASE_URL } /
        //     auth / signup ', userData)
        const { data } = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
            dispatch({ type: REGISTER_SUCCESS, payload: data });
        }


        console.log("register success", data)

    } catch (error) {
        console.log(error)
    }
}