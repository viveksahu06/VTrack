import * as actionTypes from './ActionTypes'; // Ensure correct import path

const initialState = {
    issues: [],
    loading: false,
    error: null,
    issueDetails: null,
};

const issueReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ISSUES_REQUEST:
        case actionTypes.CREATE_ISSUE_REQUEST:
        case actionTypes.DELETE_ISSUE_REQUEST:
        case actionTypes.FETCH_ISSUE_BY_ID_REQUEST:
        case actionTypes.ASSIGN_USER_TO_ISSUE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case actionTypes.FETCH_ISSUES_SUCCESS:
            return {
                ...state,
                loading: false,
                issues: action.issues,
            };

        case actionTypes.FETCH_ISSUE_BY_ID_SUCCESS:
        case actionTypes.UPDATE_ISSUE_STATUS_SUCCESS:
            return {
                ...state,
                loading: false,
                issueDetails: action.issue, // Assuming the payload is a single issue
            };

        case actionTypes.CREATE_ISSUE_SUCCESS:
            return {
                ...state,
                loading: false,
                issues: [...state.issues, action.issue],
            };

        case actionTypes.ASSIGN_USER_TO_ISSUE_SUCCESS:
            return {
                ...state,
                loading: false,
                issues: state.issues.map((issue) =>
                    issue.id === action.issue.id ? action.issue : issue
                ),
            };

        case actionTypes.DELETE_ISSUE_SUCCESS:
            return {
                ...state,
                loading: false,
                issues: state.issues.filter((issue) => issue.id !== action.issueId),
            };

        case actionTypes.FETCH_ISSUES_FAILURE:
        case actionTypes.CREATE_ISSUE_FAILURE:
        case actionTypes.DELETE_ISSUE_FAILURE:
        case actionTypes.FETCH_ISSUE_BY_ID_FAILURE:
        case actionTypes.ASSIGN_USER_TO_ISSUE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        default:
            return state;
    }
};

export default issueReducer;