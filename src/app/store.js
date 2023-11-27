import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { movieReducer } from "./reducers/movieReducer";

const rootReducer= combineReducers({movieState:movieReducer})
export const store=createStore(rootReducer,applyMiddleware(thunk))