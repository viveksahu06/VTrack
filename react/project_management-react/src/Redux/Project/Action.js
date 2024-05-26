import api, { API_BASE_URL } from "@/Config/api"
import { FETCH_PROJECTS_REQUEST, FETCH_PROJECTS_SUCCESS } from "./ActionType"

export const fetchProjects = ({ category, tag }) => async(dispatch) => {
    dispatch({ type: FETCH_PROJECTS_REQUEST })
    try {
        const { data } = await api.get("/api/projects", {
            params: { category, tag }
        })
        console.log("all projects", data)
        dispatch({
            type: FETCH_PROJECTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        console.log("error", error)
    }
}