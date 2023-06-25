import { legacy_createStore } from "redux";

import { MovieReducer } from "../reducer/MovieReducer";


export const store = legacy_createStore(MovieReducer)

