import api from "@/Config/api";
import {
    ACCEPT_INVITATION_REQUEST,
    ACCEPT_INVITATION_SUCCESS,
    CREATE_PROJECT_REQUEST,
    CREATE_PROJECT_SUCCESS,
    CREATE_PROJECT_FAILURE,
    DELETE_PROJECT_REQUEST,
    DELETE_PROJECT_SUCCESS,
    DELETE_PROJECT_FAILURE,
    FETCH_PROJECT_BY_ID_REQUEST,
    FETCH_PROJECT_BY_ID_SUCCESS,
    FETCH_PROJECT_BY_ID_FAILURE,
    FETCH_PROJECTS_REQUEST,
    FETCH_PROJECTS_SUCCESS,
    FETCH_PROJECTS_FAILURE,
    INVITE_TO_PROJECT_REQUEST,
    INVITE_TO_PROJECT_SUCCESS,
    INVITE_TO_PROJECT_FAILURE,
    SEARCH_PROJECTS_REQUEST,
    SEARCH_PROJECTS_SUCCESS,
    SEARCH_PROJECTS_FAILURE,
} from "./ActionType";

export const fetchProjects = ({ category, tag }) => async(dispatch) => {
    dispatch({ type: FETCH_PROJECTS_REQUEST });
    try {
        const { data } = await api.get("/api/projects", { params: { category, tag } });
        console.log("all projects", data);
        dispatch({
            type: FETCH_PROJECTS_SUCCESS,
            projects: data,
        });
    } catch (error) {
        console.log("error", error);
        dispatch({
            type: FETCH_PROJECTS_FAILURE,
            error: error.message,
        });
    }
};

export const searchProjects = (keyword) => async(dispatch) => {
    dispatch({ type: SEARCH_PROJECTS_REQUEST });

    try {
        const { data } = await api.get("/api/projects/search?keyword=" + keyword)
        console.log("search projects", data);
        dispatch({ type: SEARCH_PROJECTS_SUCCESS, projects: data });
    } catch (error) {
        console.log("error", error);
        dispatch({
            type: SEARCH_PROJECTS_FAILURE,
            error: error.message,
        });
    }
};

export const createProject = (projectData) => async(dispatch) => {
    dispatch({ type: CREATE_PROJECT_REQUEST });

    try {
        const { data } = await api.post("/api/projects", projectData);
        console.log("created project:--------", data);
        dispatch({ type: CREATE_PROJECT_SUCCESS, project: data });
    } catch (error) {
        console.error("error:", error);
        dispatch({
            type: CREATE_PROJECT_FAILURE,
            error: error.message,
        });
    }
};

export const fetchProjectById = (id) => async(dispatch) => {
    dispatch({ type: FETCH_PROJECT_BY_ID_REQUEST });

    try {
        const { data } = await api.get("/api/projects/" + id);
        console.log("project:", data);
        dispatch({ type: FETCH_PROJECT_BY_ID_SUCCESS, project: data });
    } catch (error) {
        console.error("error:", error);
        dispatch({
            type: FETCH_PROJECT_BY_ID_FAILURE,
            error: error.message,
        });
    }
};

export const deleteProject = ({ projectId }) => async(dispatch) => {
    dispatch({ type: DELETE_PROJECT_REQUEST });

    try {
        const { data } = await api.delete("/api/projects/" + projectId)
        console.log("deleted project:", projectId);
        dispatch({ type: DELETE_PROJECT_SUCCESS, projectId });
    } catch (error) {
        console.error("error:", error);
        dispatch({
            type: DELETE_PROJECT_FAILURE,
            error: error.message,
        });
    }
};

export const inviteToProject = ({ email, projectId }) => async(dispatch) => {
    dispatch({ type: INVITE_TO_PROJECT_REQUEST });

    try {
        const { data } = await api.post("/api/projects/invite", { email, projectId });
        console.log("invite project:", data);
        dispatch({ type: INVITE_TO_PROJECT_SUCCESS, payload: data });
    } catch (error) {
        console.error("error:", error);
        dispatch({
            type: INVITE_TO_PROJECT_FAILURE,
            error: error.message,
        });
    }
};

export const acceptInvitation = ({ token, navigate }) => async(dispatch) => {
    dispatch({ type: ACCEPT_INVITATION_REQUEST });
    try {
        const { data } = await api.get("/api/projects/accept_invitation", {
            params: {
                token
            },
        })

        navigate("/project/" + data.projectId);
        console.log("accepted invitation:", data);
        dispatch({ type: ACCEPT_INVITATION_SUCCESS });
    } catch (error) {
        console.log("error:", error);
        // Optionally, add an error action for accepting invitation failure
    }
};