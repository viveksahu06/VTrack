import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from 'redux-thunk';

import { authReducer } from "./Auth/Reducer";
import { projectReducer } from "./ProjectSer/Reducer";
import ChatReducer from "./Chat/Reducer";
import commentReducer from "./Comment/Reducer";
import issueReducer from "./Issue/Reducer";
import subscriptionReducer from "./Subscription/Reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    chat: ChatReducer,
    comment: commentReducer,
    issue: issueReducer,
    subscription: subscriptionReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));