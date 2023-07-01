import { legacy_createStore, applyMiddleware } from "redux";

import { MovieReducer } from "../reducer/MovieReducer";

import thunk from "redux-thunk";


export const store = legacy_createStore(MovieReducer, applyMiddleware(thunk))

