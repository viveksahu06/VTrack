import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

const rootReducer = combineReducers({

})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))