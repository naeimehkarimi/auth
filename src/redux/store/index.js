import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducers } from "../reducer";


export const myStore=createStore(reducers,compose(
    applyMiddleware(thunk)
));


