import * as types from "./ActionTypes"; // Assuming your action types are in a file named actionTypes.js
import api from "@/Config/api";

export const getUserSubscription = () => {
  return async (dispatch) => {
    dispatch({ type: types.GET_USER_SUBSCRIPTION_REQUEST });
    try {
      const response = await api.get("/api/subscriptions/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });
      dispatch({
        type: types.GET_USER_SUBSCRIPTION_SUCCESS,
        payload: response.data,
      });
      console.log("User's subscription:", response.data);
    } catch (error) {
      dispatch({
        type: types.GET_USER_SUBSCRIPTION_FAILURE,
        error: error.message,
      });
      console.log("Error:", error);
    }
  };
};

export const upgradeSubscription = ({ planType }) => {
  return async (dispatch) => {
    dispatch({ type: types.UPGRADE_SUBSCRIPTION_REQUEST });
    try {
      const response = await api.patch("/api/subscriptions/upgrade", null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
        params: {
          planType: planType,
        },
      });
      dispatch({
        type: types.UPGRADE_SUBSCRIPTION_SUCCESS,
        payload: response.data,
      });
      console.log("Upgraded subscription:", response.data);
    } catch (error) {
      console.log(error.response.data);
      dispatch({
        type: types.UPGRADE_SUBSCRIPTION_FAILURE,
        error: error.message,
      });
    }
  };
};
