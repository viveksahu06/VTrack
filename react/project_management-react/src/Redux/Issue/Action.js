import api from '@/Config/api';
import * as actionTypes from './ActionTypes'; // Assuming your action types are in this file


// Action for fetching issues
export const fetchIssues = (id) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_ISSUES_REQUEST });
    try {
      const response = await api.get(`/api/issues/project/${id}`);
      console.log('Fetched issues:', response.data);
      dispatch({
        type: actionTypes.FETCH_ISSUES_SUCCESS,
        issues: response.data,
      });
    } catch (error) {
      console.log('Error:', error);
      dispatch({
        type: actionTypes.FETCH_ISSUES_FAILURE,
        error: error.message,
      });
    }
  };
};


// Action for fetching an issue by ID
export const fetchIssueById = (id) => {
    return async (dispatch) => {
      dispatch({ type: actionTypes.FETCH_ISSUE_BY_ID_REQUEST });
      try {
        const response = await api.get(`/api/issues/${id}`);
        console.log('Fetched issue by ID:', response.data);
        dispatch({
          type: actionTypes.FETCH_ISSUE_BY_ID_SUCCESS,
          issue: response.data,
        });
      } catch (error) {
        console.log('Error:', error);
        dispatch({
          type: actionTypes.FETCH_ISSUE_BY_ID_FAILURE,
          error: error.message,
        });
      }
    };
  };

  // Action for updating an issue's status
export const updateIssueStatus = (id, status) => {
    return async (dispatch) => {
      dispatch({ type: actionTypes.UPDATE_ISSUE_STATUS_REQUEST });
      try {
        const response = await api.put(`/api/issues/${id}/status/${ status }`);
        console.log('Updated issue status:', response.data);
        dispatch({
          type: actionTypes.UPDATE_ISSUE_STATUS_SUCCESS,
          issues: response.data,
        });
      } catch (error) {
        dispatch({
          type: actionTypes.UPDATE_ISSUE_STATUS_FAILURE,
          error: error.message,
        });
      }
    };
  };

// Action for assigning a user to an issue
export const assignedUserToIssue = ({ issueId, userId }) => {
    return async (dispatch) => {
      dispatch({ type: actionTypes.ASSIGN_USER_TO_ISSUE_REQUEST });
      try {
        const response = await api.put(`/api/issues/${issueId}/assignee/$ { userId }`);
        console.log('Assigned user to issue:', response.data);
        dispatch({
          type: actionTypes.ASSIGN_USER_TO_ISSUE_SUCCESS,
          issue: response.data,
        });
      } catch (error) {
        console.log('Error:', error);
        dispatch({
          type: actionTypes.ASSIGN_USER_TO_ISSUE_FAILURE,
          error: error.message,
        });
      }
    };
  };