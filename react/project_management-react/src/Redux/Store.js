import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
<<<<<<< HEAD
import { projectReducer } from "./Project/Reducer";
import ChatReducer from "./Chat/Reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    chat: ChatReducer
});

=======

const rootReducer = combineReducers({
    auth: authReducer
});
>>>>>>> eebeda7cbb7488059e26abbb1eccf7e7d7780f29
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))