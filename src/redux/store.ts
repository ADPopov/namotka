import {applyMiddleware, combineReducers, createStore} from "redux";
import ReduxThunk from 'redux-thunk';
import { UserReducer } from "./UsersReducer";

let reducers = combineReducers({
    user: UserReducer,
})

let store = createStore(reducers, applyMiddleware(ReduxThunk));

window.store = store;

export default store;
